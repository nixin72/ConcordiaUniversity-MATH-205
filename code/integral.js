#!/usr/bin/env node
let parse = f =>
    f.split("")
        .map((v, k) => /^[a-z]/.test(v) && /^\d/.test(f[k - 1]) ? `*${v}` : v)
        .join("").replace("^", "**");

let f = new Function("x", "return " + parse(process.argv[2]));
let a = process.argv[3] || -Infinity;
let b = process.argv[3] || Infinity;

