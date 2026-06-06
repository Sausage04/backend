"use client";

import { useState } from "react";

/**
 * Phase 0: a visual upload box. It accepts a PDF selection and shows the file
 * name, but does NOT send anything to the backend yet — that gets wired in
 * Phase 1 along with the real counting pipeline.
 */
export default function Uploader() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div>
      <label className="dropzone" style={{ display: "block", cursor: "pointer" }}>
        <input
          type="file"
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        {fileName ? (
          <span>
            Selected: <strong>{fileName}</strong>
          </span>
        ) : (
          <span>Click to choose a mechanical PDF</span>
        )}
      </label>
    </div>
  );
}
