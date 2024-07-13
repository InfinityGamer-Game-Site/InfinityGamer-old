# Remove all files tracked by Git LFS
$lfsFiles = git lfs ls-files

foreach ($line in $lfsFiles.Split("`n")) {
    if ($line.Trim() -ne "") {
        $file = ($line -split '\s+')[2]
        Write-Output "Removing LFS tracking for $file"
        git lfs untrack "$file"
        git rm --cached "$file"
    }
}

# Remove LFS-related entries from .gitattributes
(Get-Content .gitattributes) | ForEach-Object {
    if ($_ -notmatch "filter=lfs") {
        $_
    }
} | Set-Content .gitattributes
