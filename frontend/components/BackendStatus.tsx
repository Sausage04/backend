"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

/**
 * Pings the backend /health endpoint so you can confirm the two halves of the
 * app are talking to each other. This is the main "did Phase 0 work?" signal.
 */
export default function BackendStatus() {
  const [state, setState] = useState<"checking" | "ok" | "down">("checking");

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/health`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(() => !cancelled && setState("ok"))
      .catch(() => !cancelled && setState("down"));
    return () => {
      cancelled = true;
    };
  }, []);

  const label =
    state === "checking"
      ? "Checking backend…"
      : state === "ok"
        ? "Backend connected"
        : `Backend not reachable at ${API_URL}`;

  return (
    <div className="status-pill">
      <span className={`dot ${state === "ok" ? "ok" : state === "down" ? "bad" : ""}`} />
      <span>{label}</span>
    </div>
  );
}
