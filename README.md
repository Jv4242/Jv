# ⭐ Star Rescue — Learn & Play (Ages 3–8)

A kid-friendly educational browser game. Zuzu's space friends are trapped in
bubbles — answer questions to pop the bubbles and rescue them all!

## The hook

- **Rescue & collect**: every correct answer frees an animal friend that joins
  your crew bar. Kids see the crew fill up in real time.
- **Level up**: rescue 5 friends to complete a level and unlock a celebration
  with a brand-new friend, confetti, and a fanfare.
- **No losing**: a wrong answer just wobbles and grays out — kids try again
  until they get it. Stars only go up.
- **Brain Challenges**: every 3rd bubble is golden and holds a problem-solving
  puzzle worth 2 stars — reasoning, not recall.
- **Voice narration**: every question is read aloud (Web Speech API), so
  pre-readers always know what to do. A 🔊 button on the card repeats the
  question; a HUD toggle mutes the voice (remembered between visits).
  The game auto-selects the warmest voice installed on the device (neural
  "Natural" and "Enhanced" voices beat the robotic defaults) and speaks at a
  gentle teacher pace; a 🗣️ picker on the start screen cycles through the
  best available voices — each introduces itself — and the choice sticks.
- **Gets harder as you play**: each level bumps the difficulty — bigger
  numbers, more answer choices, and new question forms unlock (subtraction,
  division, lowercase letters, two-step word problems, countdown patterns).
  Question types are dealt from a shuffled deck so the same type never streaks.
- **Credits & Trophy Room**: every rescue pays credits (10 normal, 25 for a
  Brain Challenge, +5 streak bonus at 3-in-a-row on the first try). Twelve
  named awards — First Rescue, On Fire, Puzzle Genius, Perfect Level, Credit
  Champion, Level 10 Legend and more — pop in with a banner, fanfare, and
  voice announcement when earned. Credits, awards, best streak, and top level
  persist between visits (localStorage), viewable in the 🏆 Trophy Room from
  the start screen or the in-game HUD.

## Learning content by age

| Age band | Knowledge questions | Brain Challenges (problem solving) |
|---|---|---|
| 🐣 3–4 | colors, shapes, counting 1–5, animal recognition, big vs. small | odd-one-out, what-goes-together, size comparison |
| 🦊 5–6 | letter recognition, counting to 10, addition to 10, patterns, beginning letter sounds | category sorting, AAB patterns, riddles, story math, analogies |
| 🦁 7–8 | addition/subtraction to 20+, intro multiplication, spelling, skip counting (2s, 5s, 10s) | missing-number puzzles, word problems, logic deduction, doubling/growing sequences, classic riddles |

Questions are generated randomly, so no two rounds are the same.

## Run it

Open `index.html` in any browser — no install, no build, no network needed.
Works on phones and tablets (big tap targets, sound plays after first tap).

## Test

```
node test.js
```

Generates 54,000 random questions across all three age bands, both generator
sets (knowledge and Brain Challenge), and all three difficulty tiers — and
verifies each one contains its correct answer, has no duplicate options, and
has at least two choices.
