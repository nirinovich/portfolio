# Build Sequence — no deadline, architectural order

**Status:** Accepted

There is no external deadline (no hackathon/event date) driving this overhaul, so work proceeds in sound architectural order rather than being optimized for a demo date. Sequence: (1) freeze the existing hero verbatim into a shared `Hero.astro` (used by both FR and EN index); (2) extract the design-system components (`Section`, `Container`, `Card`, `Badge`, `Button`) and keep `BottomBar`; (3) build every overhauled page in both FR and EN; (4) wire real content into the `blog` and `projects` Content Layer collections; (5) deploy to Firebase Hosting. Scope is trimmed only for quality, never to hit a date.
