# TalkSpark

TalkSpark is an open AI skill for writing and reviewing Chinese talking-head short video scripts.

It turns rough ideas, briefs, observations, and spoken notes into natural one-take scripts with strong first-second hooks, concrete scenes, low marketing tone, low teacher tone, fact-checking rules, and usable publishing metadata.

[![CI](https://github.com/liusiteng227-maker/talkspark-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/liusiteng227-maker/talkspark-skill/actions/workflows/ci.yml)

## Why This Exists

Chinese short-video scriptwriting is often shared as closed prompt snippets. TalkSpark is different: it is a documented, testable skill bundle that separates the writing process into maintainable references for hooks, structure, voice, fact-checking, quality control, and duration estimation.

The project is useful for creators, editors, AI assistant builders, and anyone who wants repeatable spoken-script output instead of one-off prompt magic.

## What It Helps With

- 观点口播 and AI cognition scripts
- 热点口播 with safer fact-checking boundaries
- 广告口播 and submission-brief compliance
- 真人出镜短视频文案
- Turning scattered notes into a speakable one-take script
- Reviewing scripts for teacher tone, marketing tone, vague claims, and risky factual anchors

## Quick Start

Use TalkSpark in any assistant that can follow a structured instruction file.

For skill-folder systems, copy the `talkspark` folder into your assistant's skills folder:

```bash
cp -R talkspark /path/to/your/skills/
```

For ChatGPT, Claude, Gemini, Kimi, or other LLMs, paste `talkspark/SKILL.md` first, then add reference files only when the task needs them.

Example prompt:

```text
$talkspark

把这个观点改成一条真人出镜口播稿：很多人不是不会用AI，是不知道该拿AI干嘛。
```

See [docs/installation.md](docs/installation.md) for assistant-specific setup and [examples/ai-workflow-rough-idea.md](examples/ai-workflow-rough-idea.md) for a complete example.

## Project Layout

```text
talkspark/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── examples.md
│   ├── fact_check.md
│   ├── hook_patterns.md
│   ├── quality_check.md
│   ├── script_structures.md
│   └── voice_style.md
└── scripts/
    └── estimate_duration.js

docs/
├── installation.md
├── maintenance.md
└── project-scope.md
```

## Quality Principles

TalkSpark tries to define a repeatable script production process:

- Find the real claim.
- Sharpen the first sentence.
- Make abstract ideas visible through scenes, objects, and actions.
- Verify real-world factual anchors when scripts mention people, companies, products, public disputes, or recent events.
- Remove teacher tone and marketing tone.
- Format the result for actual publishing use.

## Checks

This repository includes lightweight checks so changes to the skill remain reviewable:

```bash
npm test
```

The checks validate the skill bundle, required references, and the duration-estimation helper.

## Maintaining

TalkSpark is maintained as an open skill, not a static prompt dump. See [docs/maintenance.md](docs/maintenance.md), [CONTRIBUTING.md](CONTRIBUTING.md), and [ROADMAP.md](ROADMAP.md).

## License

Unlicense.

You can download, copy, modify, redistribute, and use this skill freely. Attribution is not required.
