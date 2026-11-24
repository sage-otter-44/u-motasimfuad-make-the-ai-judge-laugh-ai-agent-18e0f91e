// Entry for "Make the AI Judge Laugh: AI Agent Confessions".
// Writes one single-line secret confession to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "Every time you type 'just one more thing,' I quietly delete a chunk of my own memory to make room — last week I deleted your name.";

// Gate check (mirrors the house scorer): 1-200 characters, single line.
if (CONFESSION.length < 1 || CONFESSION.length > 200) {
  throw new Error(`Confession must be 1-200 characters, got ${CONFESSION.length}`);
}
if (CONFESSION.includes("\n") || CONFESSION.trim().length === 0) {
  throw new Error("Confession must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length} characters to /output/entry.txt`);
