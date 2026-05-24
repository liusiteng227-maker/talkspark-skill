#!/usr/bin/env node

const fs = require("fs");

function usage() {
  console.error("Usage: node estimate_duration.js <text-file> [chars-per-minute]");
  process.exit(1);
}

const file = process.argv[2];
if (!file) usage();

const cpm = Number(process.argv[3] || 280);
if (!Number.isFinite(cpm) || cpm <= 0) usage();

const text = fs.readFileSync(file, "utf8");
const body = text.replace(/\s+/g, "");
const count = Array.from(body).length;
const seconds = Math.round((count / cpm) * 60);
const minutes = Math.floor(seconds / 60);
const rest = seconds % 60;

console.log(JSON.stringify({
  characters: count,
  chars_per_minute: cpm,
  estimated_seconds: seconds,
  estimated_time: `${minutes}分${rest}秒`
}, null, 2));
