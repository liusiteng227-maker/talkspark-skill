#!/usr/bin/env node

const fs = require("fs");

function estimateDuration(text, charsPerMinute = 280) {
  const cpm = Number(charsPerMinute);
  if (!Number.isFinite(cpm) || cpm <= 0) {
    throw new Error("charsPerMinute must be a positive number");
  }

  const body = String(text).replace(/\s+/g, "");
  const count = Array.from(body).length;
  const seconds = Math.round((count / cpm) * 60);
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;

  return {
    characters: count,
    chars_per_minute: cpm,
    estimated_seconds: seconds,
    estimated_time: `${minutes}分${rest}秒`
  };
}

function usage() {
  console.error("Usage: node estimate_duration.js <text-file> [chars-per-minute]");
  process.exit(1);
}

function main() {
  const file = process.argv[2];
  if (!file) usage();

  const text = fs.readFileSync(file, "utf8");
  const result = estimateDuration(text, process.argv[3] || 280);
  console.log(JSON.stringify(result, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = { estimateDuration };
