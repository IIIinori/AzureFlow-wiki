$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if (-not (Test-Path ".\node_modules")) {
    npm install --cache .npm-cache
}

npm run serve
