const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "srcFile");
const dest = path.resolve(__dirname, "destFile");

fs.symlinkSync(src, dest);
