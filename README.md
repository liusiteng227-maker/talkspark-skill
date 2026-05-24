# TalkSpark

TalkSpark is an open AI skill for Chinese talking-head short video scripts.

It turns rough ideas, briefs, observations, and spoken notes into natural one-take scripts with strong first-second hooks, concrete scenes, low marketing tone, low teacher tone, and usable publishing metadata.

## What It Is For

- 观点口播
- 热点口播
- 广告口播
- AI认知口播
- 真人出镜短视频文案
- Turning scattered notes into a speakable script

## Use

You can use TalkSpark in any AI assistant that can follow a structured instruction file.

For skill-folder systems, copy the `talkspark` folder into your assistant's skills folder:

```bash
cp -R talkspark /path/to/your/skills/
```

For ChatGPT, Claude, Gemini, Kimi, or other LLMs, paste `talkspark/SKILL.md` first, then add the relevant reference files when needed.

Example:

```text
$talkspark

把这个观点改成一条真人出镜口播稿...
```

## Included Files

```text
talkspark/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── examples.md
│   ├── hook_patterns.md
│   ├── quality_check.md
│   ├── script_structures.md
│   └── voice_style.md
└── scripts/
    └── estimate_duration.js
```

## Philosophy

Most prompt collections only tell the model what to write.

TalkSpark tries to define a repeatable script production process:

- find the real claim
- sharpen the first sentence
- make abstract ideas visible
- remove teacher tone and marketing tone
- format the result for actual short video use

## License

Unlicense.

You can download, copy, modify, redistribute, and use this skill freely. Attribution is not required.
