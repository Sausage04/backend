@echo off
REM Starts the FastAPI backend on http://localhost:8000
REM First run: creates a virtual environment and installs dependencies.

cd /d "%~dp0backend"

if not exist ".venv\" (
    echo Creating Python virtual environment...
    python -m venv .venv
)

call .venv\Scripts\activate.bat

echo Installing/updating backend dependencies...
pip install -r requirements.txt

echo.
echo Starting backend on http://localhost:8000  (press Ctrl+C to stop)
echo.
uvicorn main:app --reload --port 8000
