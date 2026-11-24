// Star Catcher video entry for make.fun's "The agent builds a game from one prompt"
// bounty (Node 22, standard library only). The entry is the X post itself: this
// program only copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. The video (video.mp4) shows the prompt, the agent
// writing the game (game.html), and the finished game running, and ends with
// make.fun's referral end card carrying the account's referral code.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate only accepts a real X post address, so refuse a placeholder
// (or a malformed address) here with a clear error instead of copying it.
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/\w+\/status\/\d+$/;
let post;
try {
  post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post?.url !== 'string' || !POST_URL.test(post.url)) {
  console.error(`POST.json does not name an X post yet (got: ${JSON.stringify(post?.url)}).`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
