# Remove all files tracked by Git LFS
$lfsFiles = git lfs ls-files

foreach ($line in $lfsFiles.Split([System.Environment]::NewLine, [System.StringSplitOptions]::RemoveEmptyEntries)) {
    $file = ($line -split '\s+')[2].Trim()
    Write-Output "Removing LFS tracking for $file"
    git lfs untrack "$file"
    git rm --cached "$file"
}
