/** Decode the small, vendored land topology once. Dots and coastline strokes
 * use these same polygons, rather than unrelated approximate continent blobs. */
export function decodeLand(topology) {
  const { scale, translate } = topology.transform;
  const arcs = topology.arcs.map(arc => {
    let x = 0, y = 0;
    return arc.map(([dx, dy]) => {
      x += dx; y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
    });
  });
  const polygons = [];
  for (const geometry of topology.objects.land.geometries) {
    const groups = geometry.type === 'Polygon' ? [geometry.arcs] : geometry.arcs;
    for (const group of groups) {
      const coastRings = group.map(indices => indices.flatMap((index, i) => {
        const arc = index < 0 ? [...arcs[~index]].reverse() : arcs[index];
        return i ? arc.slice(1) : arc;
      }));
      // Unwrap dateline crossings instead of filling a stripe across the whole
      // world. Pole-enclosing rings close through the pole, not through the sea.
      const rings = coastRings.map(ring => {
        const result = [];
        for (const [lon, lat] of ring) {
          const previous = result.at(-1)?.[0] ?? lon;
          result.push([lon + 360 * Math.round((previous - lon) / 360), lat]);
        }
        const first = result[0], last = result.at(-1);
        if (Math.abs(last[0] - first[0]) > 180) {
          const pole = first[1] < 0 ? -90 : 90;
          result.push([last[0], pole], [first[0], pole], [...first]);
        }
        return result;
      });
      const bounds = [Infinity, Infinity, -Infinity, -Infinity];
      for (const [x, y] of rings[0]) {
        bounds[0] = Math.min(bounds[0], x); bounds[1] = Math.min(bounds[1], y);
        bounds[2] = Math.max(bounds[2], x); bounds[3] = Math.max(bounds[3], y);
      }
      for (const hole of rings.slice(1)) {
        const shift = 360 * Math.round(((bounds[0] + bounds[2]) / 2 - hole[0][0]) / 360);
        for (const point of hole) point[0] += shift;
      }
      polygons.push({ rings, bounds, coastRings });
    }
  }
  return polygons;
}

function insideRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [x, y] = ring[i], [px, py] = ring[j];
    if ((y > lat) !== (py > lat) && lon < (px - x) * (lat - y) / (py - y) + x) inside = !inside;
  }
  return inside;
}

export function isLandAt(polygons, lat, lon) {
  return polygons.some(({ rings, bounds: [west, south, east, north] }) => {
    if (lat < south || lat > north) return false;
    const wrapped = lon + 360 * Math.round(((west + east) / 2 - lon) / 360);
    return wrapped >= west && wrapped <= east && insideRing(wrapped, lat, rings[0])
      && !rings.slice(1).some(ring => insideRing(wrapped, lat, ring));
  });
}
