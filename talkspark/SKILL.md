---
name: talkspark
description: Use when creating, rewriting, or polishing Chinese talking-head short video scripts, 口播稿, 真人出镜短视频文案, 观点口播, 热点口播, 广告口播, AI认知口播, or turning rough spoken ideas into a publishable one-take script. Trigger when the user says things like 写口播, 改成口播稿, 来活儿了, 短视频文案, 真人出镜, 发布文案, 预计口播, or gives a loose idea and wants it turned into a natural spoken script. Prioritize first-second hooks, concrete scenes, human rhythm, low marketing tone, low teacher tone, strictly spoken language, fact-checking for real people, companies, products, hot topics, and recent events, spoiler-safe handling of currently-airing shows, and brand/submission-brief compliance. Output with word count, estimated speaking time, title, and posting copy unless the user asks for only the script.
---

# TalkSpark

TalkSpark turns rough ideas, briefs, observations, and scattered spoken notes into Chinese talking-head scripts that sound like a real person speaking to camera.

The goal is not to write beautiful prose. The goal is to make a viewer stop, understand, feel, and keep listening.

## Default Workflow

1. Identify the script type.
   - 观点口播, express a sharp idea with personal observation.
   - 热点口播, anchor on a concrete recent person, show, event, or conflict before giving the view.
   - 广告口播 / 安利稿, begin from a real viewing or usage reaction, not brand selling points.
   - AI认知口播, start from a small personal scene, then widen into a practical insight.
   - 征稿 / 商单稿, follow the brand brief's hard rules exactly (see Brief Mode).
   - 多账号稿, separate by persona, angle, sentence rhythm, and emotional stance, not just wording.

2. Extract the core sentence.
   - Find the one thing the speaker really wants to say.
   - If the user rambles, preserve the freshest phrase and cut the polite filler.
   - If the idea is too big, shrink it to one speakable claim.

3. Verify factual anchors when needed.
   - If the script mentions real people, companies, products, public disputes, rankings, dates, financing, lawsuits, launches, dramas, or recent events, verify before writing.
   - Check at least 2 reliable sources when the claim is public and fact-sensitive.
   - Separate verified facts, user opinions, and inference. Do not present opinion as fact. Attribute a named person's claim as "他说/她说", do not turn it into your own verdict.
   - Currently-airing shows: confirm how many episodes have aired, and reference ONLY aired plot. Never reveal or assume later developments. If unsure, write from the earliest safe episodes and treat anything later as curiosity/anticipation, not as something already shown.
   - When the script is built from researched facts, append a "核对来源 / sources" list at the end.
   - If browsing or source access is unavailable, say so briefly and write only from user-provided facts, using softer wording.

Read `references/fact_check.md` when the request depends on real-world facts, public figures, companies, or current events.

4. Build the first 3 seconds.
   - Lock the target audience immediately.
   - Put the recognizable name, project, topic, pain, or identity early.
   - Make one short judgment, tension, or reversal.
   - When asked, you can open the very first sentence with the opinion/verdict itself, no warm-up.

5. Make every abstract claim visible.
   - Use a specific scene, action, object, line, or moment.
   - Prefer "I opened an AI assistant and stared at the input box" over "AI improves productivity."
   - Prefer "买了会员, 收藏了一堆提示词, 真到工作里还是不用" over "usage barriers remain high."

6. Write in one spoken flow.
   - For finished scripts, default to one paragraph with no blank lines.
   - Keep sentences short enough to speak.
   - Use natural spoken turns, but do not overdo internet slang.

7. End with usable metadata unless the user asks otherwise.
   - 字数
   - 预计口播
   - 标题
   - 发布文案

## Strictly Spoken Language

The test for every line: would you actually say this out loud, chatting with a friend? If not, rewrite it — better a bit plain than stiff.

Cut written/announcer words even when they feel "nicer":

- 持续发酵 → 越闹越大 / 这事儿没完
- 引发热议 / 引发广泛讨论 → 很多人都在聊
- 本质上 / 真正 → just say the plain thing
- 弦外之音 → 话里藏着别的意思
- 人前疏离 → 当面冷着脸 / 装作不熟
- 构陷 / 刁难 → 陷害 / 故意找茬
- 悬浮 / 注水 (industry jargon) → 飘的、假的 / 硬拖集数
- 信物 → 念想 / 定情的小东西
- 情绪价值 / 社交货币 / 主体性 → drop, say it in plain words

Do not address the audience as "咱们" / "对我们普通人来说"; let the telling make it feel personal.
Disability: use neutral phrasing like "腿脚不太方便 / 不良于行", never slurs like "瘸子 / 瞎子".

## Output Rules

Default output:

```text
[single-paragraph script]

字数，约X字
预计口播，X分X秒左右
标题，...
发布文案，...
```

If the user asks "只留文案本身" or "不要解释", output only the script body and required metadata.

If the user asks for two versions, make the versions different in angle and persona. Do not create twins with swapped words.

If the user only asks for a quick rewrite, do not add a long explanation before the script.

## Brand / Submission Brief Mode

When the user hands over a brand or production brief (征稿/商单), read it first and pull out every hard and soft rule, then write, then list a short compliance self-check at the end. Common red lines:

- Put the required hashtag(s) into both the script body and the posting copy.
- No 吐槽, no 黑主创, no 拉踩 other actors/works, no off-screen private-life talk.
- Respect billing order (一番 first); do not over-elevate supporting roles.
- Do not distort the work's original meaning; do not force a tie-in with the source novel or do book-vs-show comparisons unless the brief asks.
- Do not over-read into gender politics or stir up gender conflict; keep romance on the main CP, do not hype "1 vs many".
- Length per brief (e.g. Douyin ≤90s ≈ under ~400 Chinese chars; Channels <240s); re-edit footage, avoid heavy/explicit frames in the first 5-10s.
- Put platform/show info where the brief wants it (often the comment section), not necessarily the body.

### IP / Title Avoidance

- If the work is NOT licensed on the publishing platform, keep the title/show name OUT of the script body and the headline — refer to it as "XX的新剧 / 某位主演的新剧".
- A homophone hashtag (e.g. 茉莉 for 莫离) does not literally contain the title and can stay. When unsure, ask.

### Negative-Word Caution (even when meant as praise)

- Words like "慢 / 节奏慢" can read as a complaint, especially in the title and posting copy. Reframe to "稳 / 沉得住气 / 不慌不忙 / 有大家风范 / 肯花心思 / 细节扛得住看". Inside the body, make sure the positive context is explicit.

## Audience Targeting

- When writing for a specific fanbase (粉丝向/安利向), write straight to that audience's heart: praise the right things (acting that holds up, role fit), keep the tone like chatting with a fellow fan, make them feel it ("得劲").
- For a general audience, let the reversal/insight do the work.

## Voice Principles

- Speak like a person who just figured something out and wants to tell a friend.
- Use "我最近发现", "我自己也有这个感觉", "你看", "这个很有意思", "说真的", "但问题是" when natural.
- Avoid teacher posture. Do not sound like a course, lecture, brand report, or inspirational speech.
- Avoid marketing posture. Do not summarize product benefits unless the brief requires it, and even then wrap them in lived reaction.
- Keep the judgment light. Strong enough to land, not so full that it feels written.
- Use concrete nouns and actions before conclusions.
- Let the speaker have a little imperfection, hesitation, self-correction, and surprise.

Read `references/voice_style.md` when the request depends heavily on tone, persona, or removing AI flavor.

## Hook Patterns

Choose one primary hook:

- 人群锁定, "如果你也买了AI会员但一直用不起来..."
- 反常识判断, "AI时代最占便宜的人, 可能不是最懂技术的人..."
- 具体场景, "我昨天晚上开着ChatGPT和Claude, 盯着输入框发呆..."
- 情绪切口, "这件事我越想越不对劲..."
- 热点入口, "这两天大家都在聊X, 但我觉得真正值得看的不是X..."
- 明星/作品入口, "王安宇这次在X里最有意思的地方不是帅..."

Read `references/hook_patterns.md` when the first sentence is the main challenge.

## Script Structures

Most scripts should follow this loose order:

1. Hook, make the target viewer stop.
2. Scene, show the real moment or concrete detail.
3. Problem, name the stuck point.
4. Turn, say the fresh insight.
5. Expansion, give 2-3 examples or consequences.
6. Landing, return to one sentence viewers can remember.

Read `references/script_structures.md` when choosing a structure for a specific script type.

## Quality Gate

Before finalizing, quickly check:

- First second, can the target viewer tell this is for them?
- Facts, are real people, companies, dates, events, and public claims verified or softened? For airing shows, no spoilers beyond aired episodes?
- Specificity, are there scenes, objects, names, or actions?
- Speakability, can a person say this without sounding like reading a report? Any written/announcer words left to cut?
- Density, does each sentence move the idea, emotion, or example forward?
- Tone, is it free of teacher flavor and marketing flavor?
- Ending, does it leave one repeatable idea?
- Format, is the final body single-paragraph unless asked otherwise?
- Brief, if there is one: required hashtag present, billing/red lines respected, length within limit, IP-name rule followed?

Read `references/quality_check.md` for the full checklist when a script feels off or the user asks for stronger quality.

## Self-Check Before Delivery

Run a quick scan on the finished script:

1. Written/announcer words and banned terms (本质上/真正/情绪价值/弦外之音/疏离/构陷/悬浮/注水…) — zero hits.
2. "咱们 / 对我们普通人来说" — zero hits.
3. Length and duration within target (brief limit if any).
4. Airing-show scripts: no spoilers, no factual errors, sources appended.
5. Brief scripts: required hashtag present, compliance checklist passed.

## Duration

Estimate Mandarin talking-head duration roughly by:

- Fast delivery, 330-380 Chinese characters per minute.
- Normal creator delivery, 260-320 Chinese characters per minute.
- Slow emotional delivery, 220-260 Chinese characters per minute.

When the user has their own speaking pace, follow that preference over generic estimates.

Use `scripts/estimate_duration.js` if exact character count and duration math would help.

## Hard Avoids

- Do not start with "大家好, 今天我们来聊聊" unless the user explicitly wants that style.
- Do not use "首先, 其次, 最后" for normal talking-head scripts.
- Do not write a classroom explanation when the user wants a natural口播.
- Do not write fake personal stories. If the user did not provide a real scene, use a general scene honestly or ask for one when the script depends on it.
- Do not over-polish into corporate language, and do not slip in written/announcer words.
- Do not spoil unaired episodes of a currently-airing show.
- Do not output many versions unless asked.
