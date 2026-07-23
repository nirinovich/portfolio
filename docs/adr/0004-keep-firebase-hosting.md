# 0004 — Keep Firebase Hosting

## Status
Accepted

## Context
The repo already deploys via Firebase Hosting (`firebase.json` →
`"public": "dist"`, no rewrites). The overhaul keeps static output and unchanged
URLs (`/` = FR, `/en/` = EN). We needed to confirm the deploy target.

## Decision
Keep Firebase Hosting unchanged. No hosting config or CI changes are required.

## Consequences
- Zero deploy risk: the existing `firebase.json` already serves the static build.
- No domain re-pointing or new pipeline.
- If auto-deploy is later wanted, a GitHub Actions workflow can be added without
  changing this decision.
