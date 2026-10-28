# Reference destinations

`control-room.html` is a local adaptation of the supplied reference design, used for its six existing interactive screens. Its proprietary labels and identifiers were neutralized for this workspace.

The host lazily loads this document in an iframe via `src/reference-rooms.js`, connects its `showScreen` router to the title menu, provides a native Back control, and removes the frame on return to release its resources. The document's idle attract tour is disabled when embedded. Host-injected styles hide the reference's redundant Back controls/custom cursor; inactive screens are inert.

The adaptation retains the layout, illustrative figures and interactions, with neutral names. Fonts and optional map/3D-site imagery may still require external services. It is not rewritten as native globe-app components in this navigation change.
