# Executive control-room experience

## Analysis

The globe and cover-flow KPI gallery already establish a useful spatial hierarchy. The missing piece was a narrative bridge from a customer's delivery to the executive network view. Depth should clarify selection, rather than make all dashboard surfaces compete.

### Depth hierarchy

- **Background:** quiet environment and geographic context.
- **Middle:** globe, regional nodes, and routes. Route motion communicates network activity.
- **Screen plane:** stable headings, controls, and network-health telemetry for readability at a distance.
- **Foreground:** active KPI and selected regional detail. Edge lighting, occlusion, perspective, and cast shadows reinforce selection.

These are monocular depth cues, not calibrated stereoscopic planes. Native spatial-display support needs the monitor model, rendering interface/SDK, viewing distance, and disparity limits. DOM overlays are not automatically stereo-rendered alongside the Three.js scene.

## Opening storyboard (~8 seconds)

1. **0–1.5s — Last mile:** a parcel settles onto a stylized doorstep with a contact shadow.
2. **1.5–2.8s — Promise kept:** a warm confirmation ring and “Delivered” message.
3. **2.8–6.8s — Pullback:** the doorstep is anchored to the calculated, data-dense overview direction. The same camera pulls back from that spot to the globe without a cross-region turn. Local scenery fades; network overlays appear only after the close-up.
4. **6.8–8.2s — Reveal:** heading and telemetry arrive before the foreground KPI gallery. Interaction unlocks with focus on the active card.

Skip is available immediately; Enter activates it, and Escape also skips. Replay is in the header. Reduced-motion preference bypasses the opening and disables automatic rotation, packet animation, and UI transitions.

## Interaction

- Arrow keys navigate visible, enabled controls; left/right on KPI cards rotates the gallery.
- Enter uses native button activation, avoiding duplicate remote-key actions.
- Escape dismisses analytics or regional detail and restores focus.
- The globe control in the map toolbar cycles through regions for keyboard/remote access.
- Selection ignores far-side nodes and distinguishes a drag from a click or tap. Persistent city labels identify nodes without hover tooltips. A white ring marks the selection without obscuring the data with ×; tapping the marker again or using the detail panel's close button closes the view.
- Full Report and regional command buttons share the same warm-yellow action styling, independent of the current layer color.
- Gallery arrows share the globe controls' circular shape, border, background, and click-highlight animation. Gallery arrows, globe controls, report buttons, and Reload have no hover effects. Keyboard focus indicators remain available.
- Hidden panels and inaccessible carousel cards are inert.

## Title navigation

Click/tap **Global Network Pulse** to open a green navigation picker anchored in the title's position. It shows a vertical, scroll-snapping carousel for Create new product, Global Operations, Customer Journey, Big Bets, Threat Radar, and Scenario Cockpit. Native touch scrolling supplies inertia; mouse drag and keyboard arrows/Home/End are also supported. Tap a neighbouring item to center it, then tap the centered item to open it. Escape, outside tap, and the close button dismiss the picker and restore focus. The globe does not auto-rotate while the menu is open.

Destinations use locally adapted screens from the supplied reference HTML, lazy-loaded in an isolated iframe rather than placeholder pages. The layout and interactions remain, with neutral labels and identifiers. The host supplies a Back-to-globe control and the same navigation picker in the destination toolbar. Returning removes the iframe and its animation loops. The reference's embedded idle tour is disabled; optional map services still require network access.

## Globe layers

The header replaces Network Status with six click/tap-only layer buttons centered on the full viewport, adapted from the reference HTML:

- **Revenue** (default): warm-yellow radial country bars for annual net sales ($B), matching the report-button accent.
- **Market Share:** muted-rose country pies for Network, competitors, and other share. The full circles render above Earth, fade toward the perspective horizon, and disappear on the far side. Visible portions remain clickable without being blocked by the sphere.
- **AWS Usage:** country bars for the reference's demo usage index.
- **People & Sites:** employee bars and blue diamond stacks for AWS regions.
- **Goods Flows:** the existing city network with animated gold transit packets.
- **Network Leo:** three illustrative satellite shells and highlighted coverage markets, not live tracking.

The reference's 14-country dataset is kept separate from the 11 operational city hubs; country totals are never presented as city totals. Layer changes preserve camera zoom, framing, region focus, and any in-flight camera transition. The focused details update for the new layer; Goods Flows explicitly reports city-level data rather than implying a country aggregate. Selecting a chart or its visible map label opens mode-specific country details. While focused, that region's radial bar is hidden so its end cap cannot cover the marker; it returns after zoom-out. Switching layers closes an existing selection and restores the overview. Startup and Reload always open Revenue, whose data-dense orientation also anchors the parcel scene. Reduced motion settles bar heights immediately and freezes moving packets/satellites. Layer buttons support native keyboard activation and do not switch on hover.

## Prototype limitations / next iteration

- Metrics, exception lists, and delivery events are illustrative, not live Network telemetry.
- Geography uses the existing approximate land mask; replace it with real geographic geometry for executive presentation.
- Analytics and regional drill-through still lead to the existing shared demonstration report, not metric-specific data.
- The doorstep uses procedural, low-poly geometry. Final art direction could replace it with a production parcel/porch asset while retaining the camera sequence.
- Validate text sizes, focus visibility, frame rate, and comfortable depth on the actual display at the intended viewing distance.

## Validation performed

Production build and Chrome browser smoke checks: complete intro/reveal, carousel navigation, native Enter activation, analytics open/close, regional selection, Escape, replay, skip, and reduced-motion startup. Screenshots reviewed at 1920×1080 and 1280×720; a 3840×2160 capture was also generated. No browser runtime errors during these checks. Hardware-specific stereo output and performance were not tested.
