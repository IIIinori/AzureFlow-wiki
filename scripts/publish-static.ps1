param(
    [Parameter(Mandatory = $true)]
    [string]$TargetDir,
    [switch]$Install,
    [switch]$CleanTarget
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if ($Install -or -not (Test-Path ".\node_modules")) {
    npm install --cache .npm-cache
}

npm run build

$resolvedTarget = Resolve-Path -LiteralPath (Split-Path -Parent $TargetDir) -ErrorAction SilentlyContinue
if (-not $resolvedTarget) {
    New-Item -ItemType Directory -Path (Split-Path -Parent $TargetDir) -Force | Out-Null
}

if ($CleanTarget -and (Test-Path $TargetDir)) {
    Get-ChildItem -Path $TargetDir -Force | Remove-Item -Recurse -Force
}

New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
Copy-Item -Path ".\build\*" -Destination $TargetDir -Recurse -Force

Write-Host "Published build to $TargetDir"
