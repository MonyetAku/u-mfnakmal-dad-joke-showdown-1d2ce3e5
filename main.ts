import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My daughter asked why I keep a ladder in the kitchen. I said it's for high tea.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`dad joke outside gate: ${JOKE.length} characters`);
}

writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} characters)`);
