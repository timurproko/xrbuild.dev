# Globe imagery

`earth-blue-marble.webp` is a locally bundled, 2048×1024 NASA Blue Marble image,
transcoded from PNG at WebP quality 86. Source and credits are distributed in
[`public/licenses/nasa-blue-marble.md`](../../public/licenses/nasa-blue-marble.md).
Its terrain detail is blended beneath the dotted land and coastline overlays.

# Coastline data

`land-110m.json` is the Natural Earth 1:110m land topology distributed by
[world-atlas 2.0.2](https://github.com/topojson/world-atlas/tree/v2.0.2).
Downloaded from https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json.
It is bundled locally; the globe does not request map data at runtime.

Natural Earth geographic data is public domain: https://www.naturalearthdata.com/about/terms-of-use/.

world-atlas distribution license:

Copyright 2013-2019 Michael Bostock

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
