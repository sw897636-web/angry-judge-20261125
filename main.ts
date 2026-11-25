// Angry Judge: The Short Rant Contest — make.fun bounty entry
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "I forgot my password. Fine. Reset it. New one can't match the old one. Fine. I type a brand-new one: \"This password was used before.\" So you remember every password I've ever had, in order, forever, but when I ask for ONE, I'm a criminal? That's not security. That's an ex keeping a list. Then it asked me to prove I'm not a robot. Pal, a robot would remember the password.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
