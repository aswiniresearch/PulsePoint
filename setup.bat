@echo off
echo Setting up OpenEMR Clinic Platform...
echo.

echo Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to install dependencies. Please check your Node.js and npm installation.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo Setup completed successfully!
echo.
echo Starting development server...
call npm run dev

if %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to start the development server.
    pause
    exit /b %ERRORLEVEL%
)

pause
