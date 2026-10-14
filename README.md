# The Meridian
An in-progress interactive archival mystery, *The Unreliable Narrator*.

## Project structure

```text
index.html              Page structure, archive UI and Level 6 developer-preview markup
src/
  css/
    site.css            Site-wide styles, Levels 1–5, and evidence pinning
    level6.css          Blood-dark presentation and the Level 6 interruption
  js/
    core.js             Story navigation, Levels 1–3, save/restore, developer preview
    level4.js           Map/photo reconstruction and final page initialization
    level5.js           1997 case desk, evidence pinning, final audiovisual cutscene
    level6.js           Developer-only editorial proof placeholder and interruption
*.jpg, *.png, *.svg     Archival images, scans, and survey map
```

Scripts are currently **separate classic browser scripts**, loaded in order with `defer`; they share existing top-level lexical state. This is an incremental modularization, not a full ES-module rewrite or a bundler migration. When editing shared state, check dependencies before changing script order.

## Preview and release

- Public: [themeridian-zeta.vercel.app](https://themeridian-zeta.vercel.app) — Levels 1–5 and the demo ending.
- Development preview: [themeridian-zeta.vercel.app/?dev=1](https://themeridian-zeta.vercel.app/?dev=1) — additional Level 6 and its aftermath, reachable from the DEV PREVIEW navigation.
- Level 6 prose is intentionally placeholder content pending the author’s **A Life in Three Acts** article. The 1996 manuscript investigation remains for a later level.

**Security note:** `?dev=1` is not authorization. Any browser can download public JavaScript/CSS and inspect puzzle rules, regardless of how the repository is organized. To keep future unpublished content or scoring secrets truly private, protect a separate preview deployment and move answer checking and branch evaluation to a server-side endpoint. Do not place passwords, API keys or spoilers intended to be secret in client bundles.

## Level 5 evidence workflow

Players choose a factual hypothesis, then pin supporting material directly from the physical desk’s notebook paragraphs and loose slips. One source is needed for the location, estimated time of death and medical cause. Identification requires both the newsroom note and the enquiry slip; this reflects that the identification remains a best-supported inference, not a confirmed police identification. A choice alone does not validate the finding.

## Level 6 prototype

The current development-only chapter is a five-error proofreading placeholder, followed by a sudden “STOP. HELP ME. FIND THE MISSING FILE” interruption and an archive-index handoff. The more demanding editorial excerpt-selection task, branching consequences and ending mechanics are under design; they are **not yet implemented**.
