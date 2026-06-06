import Uploader from "@/components/Uploader";
import BackendStatus from "@/components/BackendStatus";

export default function Home() {
  return (
    <main>
      <h1>HVAC Estimator</h1>
      <p className="subtitle">
        Upload a mechanical PDF to count equipment. (Phase 0 — counting not
        wired up yet.)
      </p>

      <div className="panel">
        <BackendStatus />
      </div>

      <div className="panel">
        <Uploader />
      </div>
    </main>
  );
}
