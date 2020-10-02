const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "srcDir");
const dest = path.resolve(__dirname, "destDir");

fs.symlinkSync(src, dest, "junction");
