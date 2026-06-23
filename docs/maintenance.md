# Maintenance

TalkSpark is maintained as a small open-source skill bundle with a focus on practical script quality and factual safety.

## Maintainer Responsibilities

- Review issues for weak hooks, unnatural voice, factual risk, and off-brief outputs.
- Keep reference files concise enough for AI assistants to load.
- Add examples when a new rule is hard to understand without before/after contrast.
- Keep tests passing so the skill bundle remains complete.
- Avoid accepting private campaign material or personally sensitive data.

## Release Process

1. Update references, examples, scripts, or docs.
2. Run `npm test`.
3. Update `CHANGELOG.md`.
4. Publish a GitHub release when the skill behavior meaningfully changes.

## Review Criteria

A change should answer at least one question:

- Does this make the first three seconds stronger?
- Does this make the script more speakable?
- Does this reduce factual or spoiler risk?
- Does this help maintainers review output quality?
- Does this make installation or contribution easier?

## Open Source Program Notes

TalkSpark is a public project with clear maintainer work: issue triage, reference review, script-quality review, release management, and factual-safety improvement. Its impact is strongest for Chinese-speaking creators and AI assistant users who need reusable spoken-script workflows rather than private prompt snippets.
