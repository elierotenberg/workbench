In a non-admin shell:
```
node test-dir.js
> Error: EPERM: operation not permitted, symlink 'XXX\srcDir' -> 'XXX\destDir'

node test-file.js
> Error: EPERM: operation not permitted, symlink 'XXX\srcFile' -> 'XXX\destFile'

node test-junction.js
> (no error, link created)
```

All commands work fine in an admin shell.
