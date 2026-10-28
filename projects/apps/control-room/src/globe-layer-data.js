// Curated demonstration data from the reference HTML.
// These are illustrative country figures, not live telemetry or city-level totals.
export const DEFAULT_GLOBE_LAYER = 'rev';
export const GLOBE_LAYERS = [
  { id: 'rev', label: 'Revenue', color: '#ffb94d', description: 'Bar height = annual net sales ($B) · Illustrative data' },
  { id: 'share', label: 'Market Share', color: '#c99ba3', description: 'Pies: Network / strongest rival / runner-up / other · Illustrative data' },
  { id: 'aws', label: 'AWS Usage', color: '#62b6ff', description: 'Bar height = AWS usage index · Illustrative data' },
  { id: 'ppl', label: 'People & Sites', color: '#62dbac', description: 'Bars = employees · Diamonds = AWS regions · Illustrative data' },
  { id: 'flow', label: 'Goods Flows', color: '#55d6df', description: 'Moving packets = goods in transit · Illustrative network' },
  { id: 'leo', label: 'Network Leo', color: '#bb9aff', description: 'Satellite orbits and coverage markets · Illustrative, not live tracking' },
];

export const SHARE_COLORS = [GLOBE_LAYERS.find(layer => layer.id === 'share').color, '#62b6ff', '#ffb445', '#557269'];

export const MARKETS = [
  ['US', 'United States', 39, -98, 470, 40, 'Walmart', 6.4, 'Target', 1.9, 100, 1100, 8],
  ['CA', 'Canada', 56, -96, 16.2, 42, 'Walmart Canada', 9, 'Canadian Tire', 4.1, 5, 45, 2],
  ['BR', 'Brazil', -10, -53, 4.8, 6, 'Mercado Livre', 33, 'Shopee', 12, 4, 15, 1],
  ['MX', 'Mexico', 23, -102, 9.5, 14, 'Mercado Libre', 25, 'Walmart MX', 12, 2, 40, 1],
  ['GB', 'United Kingdom', 54, -2, 42.7, 30, 'eBay UK', 9, 'Tesco', 8, 9, 75, 1],
  ['DE', 'Germany', 51, 10.5, 44.5, 46, 'Otto', 5.1, 'Zalando', 4.4, 10, 40, 1],
  ['FR', 'France', 46.6, 2.3, 15.5, 22, 'Cdiscount', 7, 'E.Leclerc', 4, 6, 22, 1],
  ['IT', 'Italy', 42.8, 12.6, 10.2, 35, 'eBay Italia', 8, 'Zalando', 5, 3, 18, 1],
  ['CN', 'China', 35, 104, 3.1, .7, 'Alibaba', 44, 'JD.com', 27, 2, 10, 2],
  ['IN', 'India', 22, 79, 8.4, 30, 'Flipkart', 32, 'Meesho', 14, 7, 110, 2],
  ['JP', 'Japan', 37, 138, 28.8, 25, 'Rakuten', 21, 'Yahoo! Japan', 12, 8, 12, 3],
  ['AU', 'Australia', -25, 134, 4.9, 10, 'eBay AU', 12, 'Woolworths', 8, 5, 7, 2],
  ['ZA', 'South Africa', -29, 24.5, .6, 6, 'Takealot', 30, '', 0, 1.5, 7, 1],
  ['SA', 'Saudi Arabia', 24, 45, 2.4, 22, 'Noon', 26, '', 0, 2, 3, 1],
].map(([id, name, lat, lon, revenue, share, rival, rivalShare, runner, runnerShare, aws, employees, regions]) => ({
  id, name, lat, lon, revenue, share, aws, employees, regions, kind: 'market', status: 'ok',
  code: `MARKET · ${id}`, competitors: [{ name: rival, share: rivalShare }, { name: runner, share: runnerShare }].filter(row => row.name),
}));

export const LEO_MARKETS = ['US', 'GB', 'DE', 'FR', 'CA'];

export function shareRows(market) {
  const rows = [{ name: 'Network', share: market.share }, ...market.competitors];
  rows.push({ name: 'Other', share: Math.max(0, 100 - rows.reduce((sum, row) => sum + row.share, 0)) });
  return rows.map((row, index) => ({ ...row, color: row.name === 'Other' ? SHARE_COLORS[3] : SHARE_COLORS[index] }));
}

export function barHeights(id, markets = MARKETS) {
  const key = { rev: 'revenue', aws: 'aws', ppl: 'employees' }[id];
  if (!key) return null;
  const max = Math.max(1, ...markets.map(market => market[key]));
  return new Map(markets.map(market => [market, .12 + Math.sqrt(market[key] / max) * .95]));
}

export function marketDetails(market, layer) {
  const money = value => `$${value.toFixed(1)}B`;
  const specs = {
    rev: [[money(market.revenue), 'Annual net sales'], [`${market.share}%`, 'Market share'], [`${market.competitors[0].share}%`, market.competitors[0].name]],
    share: [[`${market.share}%`, 'Network share'], [`${market.competitors[0].share}%`, market.competitors[0].name], [money(market.revenue), 'Annual net sales']],
    aws: [[String(market.aws), 'Usage index'], [String(market.regions), 'AWS regions'], [`${market.employees}K`, 'Employees']],
    ppl: [[`${market.employees}K`, 'Employees'], [String(market.regions), 'AWS regions'], [String(market.aws), 'AWS usage index']],
    flow: [['City-level', 'Flow data'], ['—', 'Country aggregate'], ['Demo', 'Not live telemetry']],
    leo: [[LEO_MARKETS.includes(market.id) ? 'Yes' : 'No', 'Demo coverage market'], ['3', 'Orbit shells'], ['Demo', 'Not live tracking']],
  };
  return specs[layer] ?? specs.share;
}
