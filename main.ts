// Angry Judge: The Short Rant Contest — make.fun bounty entry
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "I forgot my password, so the website made me reset it. My new password cannot be my old password. Fine. I invent a new one, and the site replies: \"This password was used before.\" So it remembers my old password perfectly — it just won't let ME use it. The system knows my password better than I do and still treats me like a burglar breaking into my own account.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
