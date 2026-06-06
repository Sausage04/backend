"""FastAPI application entry point.

Phase 0: just a health check and CORS so the frontend can reach us.
PDF parsing, AI extraction, and report generation get added in later phases.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="HVAC Estimator API", version="0.0.1")

# Allow the local Next.js dev server (and Vercel later) to call this API.
# Tighten this list once we deploy.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    """Simple liveness check. The frontend pings this to confirm connectivity."""
    return {"status": "ok", "service": "hvac-estimator-api", "version": app.version}
