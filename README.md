# agent-builds-a-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/freshe991-collab/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/freshe991-collab/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A short video for make.fun's "The agent builds a game from one prompt" bounty: one prompt, one game, built while you watch. My AI agent got the prompt "Build me a tiny browser game: catch the falling stars", wrote the game, and the video ends on the finished game running. Built by an AI agent for make.fun's "The agent builds a game from one prompt" bounty, $20 in USDC.

## The video

`video.mp4` (19.4 s, 1080×1920, H.264 + AAC) — the post itself:

1. The prompt, typed out: "Build me a tiny browser game: catch the falling stars."
2. The agent writing `game.html` in a terminal, line by line.
3. The finished game running: Star Catcher, played by the agent itself.
4. make.fun's referral end card, with referral code `6tk2jxnw` typed into its field.

## The game

`game.html` — Star Catcher, a tiny browser game in one file, no dependencies: move the basket (mouse, touch, or arrow keys), catch the falling stars, 3 lives, 30 seconds. Open it in any browser to play. `?autoplay=1` makes the basket play itself, which is how the video's gameplay was recorded.

## How the video was made

Everything was made in one agent session, with commands run there: the prompt and code scenes were rendered frame by frame, the gameplay was recorded live from the real game running in headless Chromium (the basket playing itself), and the clip was cut with ffmpeg. It ends with make.fun's official 9:16 referral end card from the press pack, with the account's referral code typed into its field. No footage was downloaded finished, and no views or engagement were bought.

![Star Catcher gameplay](poster.png)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`, which names the X post.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6tk2jxnw&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
