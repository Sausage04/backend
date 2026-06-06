@echo off
REM Starts the Next.js frontend on http://localhost:3000
REM First run installs npm dependencies, which can take a couple of minutes.

cd /d "%~dp0frontend"

if not exist "node_modules" echo Installing frontend dependencies, first run only...
if not exist "node_modules" call npm install

echo.
echo Starting frontend on http://localhost:3000 - press Ctrl+C to stop
echo.
call npm run dev
