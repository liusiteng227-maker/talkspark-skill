# TalkSpark

TalkSpark is a Codex skill for Chinese talking-head short video scripts.

It turns rough ideas, briefs, observations, and spoken notes into natural one-take scripts with strong first-second hooks, concrete scenes, low marketing tone, low teacher tone, and usable publishing metadata.

## What It Is For

- 观点口播
- 热点口播
- 广告口播
- AI认知口播
- 真人出镜短视频文案
- Turning scattered notes into a speakable script

## Install

Copy the `talkspark` folder into your Codex skills folder:

```bash
cp -R talkspark ~/.codex/skills/
```

Then ask Codex for tasks like:

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

MIT
