# Installation

TalkSpark works anywhere an AI assistant can follow a structured instruction file.

## Skill Folder

Copy the folder:

```bash
cp -R talkspark /path/to/your/skills/
```

Then invoke the skill by name if your assistant supports skill routing:

```text
$talkspark
把这个观点改成一条真人出镜口播稿...
```

## Paste-Based Use

For assistants without skill folders:

1. Paste `talkspark/SKILL.md`.
2. Add only the reference file needed for the task.
3. Add the user brief, rough idea, or draft script.

Recommended references:

- Use `references/hook_patterns.md` when the opening line is weak.
- Use `references/voice_style.md` when the script sounds like AI or a lecture.
- Use `references/fact_check.md` for real people, companies, products, recent events, public disputes, and currently-airing shows.
- Use `references/quality_check.md` before final publishing.

## Duration Helper

Estimate spoken duration:

```bash
node talkspark/scripts/estimate_duration.js examples/ai-workflow-rough-idea.md 280
```

The second number is characters per minute. For Mandarin talking-head videos, normal delivery is usually around 260-320 Chinese characters per minute.
