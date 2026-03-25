param(
    [switch]$Install
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if ($Install -or -not (Test-Path ".\node_modules")) {
    npm install --cache .npm-cache
}

npm run build
