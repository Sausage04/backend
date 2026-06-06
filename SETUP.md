# First-time setup (Windows)

This walks you from a fresh Windows machine to a running app. Do it once.
Takes ~20–30 minutes, most of it waiting on installs and account creation.

---

## 1. Install the tools you need

You need two things installed. Open them after installing to confirm.

### Python 3.11+

1. Go to <https://www.python.org/downloads/windows/> and download the latest
   **Python 3.12** Windows installer (64-bit).
2. Run it. **Important:** on the first screen, check
   **"Add python.exe to PATH"**, then click *Install Now*.
3. Confirm: open **PowerShell** and run `python --version`. You should see
   `Python 3.12.x`.

### Node.js 18+ (LTS)

1. Go to <https://nodejs.org/> and download the **LTS** Windows installer.
2. Run it, accept the defaults.
3. Confirm: in PowerShell run `node --version` (expect `v20.x` or `v22.x`) and
   `npm --version`.

### Git (to pull this code)

1. Download from <https://git-scm.com/download/win>, install with defaults.
2. Confirm: `git --version`.

---

## 2. Get the code

In PowerShell, in a folder where you keep projects:

```powershell
git clone https://github.com/sausage04/backend.git hvac-estimator
cd hvac-estimator
git checkout claude/hvac-estimator-kickoff-ZXxkb
```

---

## 3. Create your free accounts and keys

You don't strictly need these for **Phase 0** (the skeleton runs without them),
but you'll need them for Phase 1 (real PDF counting). Set them up now so you're
ready.

### A. Google Gemini API key (for reading schedule tables)

1. Go to <https://aistudio.google.com/> and sign in with a Google account.
2. Click **Get API key** (left sidebar) → **Create API key**.
3. Copy the key. You'll paste it into `backend\.env` in the next step.

> The free tier is generous and fine for development. We keep the model choice
> behind one file (`ai.py`) so it's easy to swap later.

### B. Supabase project (database / login / file storage)

1. Go to <https://supabase.com/> and sign up (GitHub login is easiest).
2. Click **New project**. Pick a name (e.g. `hvac-estimator`), set a database
   password (save it somewhere), choose a region near you, create it.
3. Wait ~2 minutes for it to provision.
4. Go to **Project Settings → API**. You'll need three values:
   - **Project URL** (looks like `https://abcd1234.supabase.co`)
   - **anon public** key
   - **service_role** key (keep this one secret — backend only)

> We won't actually wire Supabase in until after the counting works, but having
> the project ready means no interruption later.

---

## 4. Add your keys (without committing them)

In the `backend` folder, copy the example env file and fill in your real values:

```powershell
copy backend\.env.example backend\.env
```

Open `backend\.env` in VS Code and paste in the keys from step 3. This file is
**gitignored** — it will never be committed. (You can leave it with the
placeholder values for Phase 0; nothing reads it yet.)

Optionally do the same for the frontend (only needed if your backend ever runs
on a different port/host):

```powershell
copy frontend\.env.local.example frontend\.env.local
```

---

## 5. Run it

Open **two** PowerShell windows in the project folder.

**Window 1 — backend:**

```powershell
.\run-backend.bat
```

The first run creates a Python virtual environment and installs packages, then
starts the API on <http://localhost:8000>. Leave it running. You can test it
directly at <http://localhost:8000/health> — you should see
`{"status":"ok",...}`.

**Window 2 — frontend:**

```powershell
.\run-frontend.bat
```

The first run installs npm packages (a couple of minutes), then starts the site
on <http://localhost:3000>. Leave it running.

---

## 6. Confirm Phase 0 works

Open <http://localhost:3000>. You should see:

- The **HVAC Estimator** heading.
- A green dot saying **"Backend connected"** (this proves the frontend reached
  the backend's `/health` endpoint).
- An upload box you can click to select a PDF (it just shows the file name for
  now — counting comes in Phase 1).

If the dot is red ("Backend not reachable"), make sure Window 1 (the backend)
is still running on port 8000.

---

## 7. Run the test (optional but nice)

In a PowerShell window:

```powershell
cd backend
.venv\Scripts\activate
pytest
```

You should see `1 passed`. That confirms the backend and test runner are wired
up correctly.

---

That's Phase 0. When this all works, tell me and we'll start Phase 1: real
VAV/RTU counting from a PDF.
