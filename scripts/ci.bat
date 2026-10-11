@echo off
echo === Running CI on Windows ===
call npm install
call npm run build
if errorlevel 1 exit /b %errorlevel%
call npm test
if errorlevel 1 exit /b %errorlevel%
echo === CI script finished successfully ===
