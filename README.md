# HVAC Estimator

Reads commercial HVAC / sheet-metal construction PDFs and produces equipment
counts (and later, takeoffs and bids).

This repo is a **monorepo** with two parts:

```
backend/    FastAPI app — all PDF parsing and AI calls live here
frontend/   Next.js (React + TypeScript) app — upload + results UI
```

## Quick start (Windows)

You need **Python 3.11+** and **Node.js 18+** installed. See `SETUP.md` for the
full first-time setup (accounts, keys, installs).

**1. Start the backend** (in one terminal):

```powershell
run-backend.bat
```

**2. Start the frontend** (in a second terminal):

```powershell
run-frontend.bat
```

Then open <http://localhost:3000>. The page shows whether it can reach the
backend.

## Current status

**Phase 0 — skeleton.** Both apps start and talk to each other. No PDF logic
yet. See `SETUP.md` for what to do next.
