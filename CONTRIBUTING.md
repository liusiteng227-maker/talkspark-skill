# Contributing

TalkSpark welcomes practical improvements to Chinese talking-head scriptwriting workflows.

## Good Contributions

- Stronger first-sentence hook patterns.
- More natural spoken-language replacements.
- Safer fact-checking rules for hot topics, public figures, companies, products, and currently-airing shows.
- Better brief-compliance rules for ads and submission campaigns.
- Realistic examples with rough input and improved output.
- Small validation scripts that keep the skill bundle easy to review.

## Contribution Style

Keep changes specific and testable. A good reference update should show the problem, the replacement pattern, and an example.

Avoid adding generic writing advice unless it directly improves spoken Chinese short-video scripts.

## Local Checks

Run:

```bash
npm test
```

The validation script checks required files and key sections in `talkspark/SKILL.md`.

## Pull Request Checklist

- The change improves script quality, factual safety, or maintainer usability.
- New examples are not copied from private briefs or copyrighted scripts.
- No private client, creator, or platform data is included.
- `npm test` passes.
