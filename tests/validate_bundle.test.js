const test = require("node:test");
const { execFileSync } = require("node:child_process");

test("skill bundle passes repository validation", () => {
  execFileSync("node", ["scripts/validate_bundle.js"], {
    cwd: process.cwd(),
    stdio: "pipe"
  });
});
