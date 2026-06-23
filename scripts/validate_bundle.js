#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredFiles = [
  "README.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "ROADMAP.md",
  "CHANGELOG.md",
  "talkspark/SKILL.md",
  "talkspark/agents/openai.yaml",
  "talkspark/references/examples.md",
  "talkspark/references/fact_check.md",
  "talkspark/references/hook_patterns.md",
  "talkspark/references/quality_check.md",
  "talkspark/references/script_structures.md",
  "talkspark/references/voice_style.md",
  "talkspark/scripts/estimate_duration.js",
  "docs/installation.md",
  "docs/maintenance.md",
  "docs/project-scope.md"
];

const requiredSkillSnippets = [
  "Verify factual anchors",
  "references/fact_check.md",
  "Quality Gate",
  "Strictly Spoken Language",
  "Brand / Submission Brief Mode",
  "Self-Check Before Delivery"
];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
}

const skill = read("talkspark/SKILL.md");
for (const snippet of requiredSkillSnippets) {
  assert(skill.includes(snippet), `SKILL.md missing section: ${snippet}`);
}

const readme = read("README.md");
assert(readme.includes("npm test"), "README should explain how to run checks");
assert(readme.includes("fact-checking"), "README should mention fact-checking");

const unresolvedTodoFiles = requiredFiles.filter((file) => /\bTODO\b|TBD/.test(read(file)));
assert(unresolvedTodoFiles.length === 0, `Unresolved placeholders found: ${unresolvedTodoFiles.join(", ")}`);

console.log(`Validated ${requiredFiles.length} TalkSpark files.`);
