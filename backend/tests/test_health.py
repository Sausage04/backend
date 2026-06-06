"""Phase 0 test: proves the app boots and the health endpoint responds.

If this passes, the test runner and the FastAPI app are both wired correctly.
"""

from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


def test_health_ok():
    resp = client.get("/health")
    assert resp.status_code == 200
    body = resp.json()
    assert body["status"] == "ok"
    assert body["service"] == "hvac-estimator-api"
