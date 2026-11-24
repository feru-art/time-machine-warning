// Funniest Time Machine Warning — make.fun entry.
// A safety label for a time machine where the punchline is the operator:
// the machine works fine; the person using it already broke it yesterday.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: The machine is perfectly safe. The hazard is the operator, who has already broken it. Yesterday.";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// The joke lives in the final word: the damage is already done, and it
// happened "Yesterday" — before the warning was even read. Keep the tone
// flat and procedural, like a real safety notice on factory equipment.
// Gate: exactly one line, 1-120 characters, no surrounding whitespace.
const entry = LABEL.replace(/\r?\n/g, " ").trim();
if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${entry.length}`);
}
if (/\n/.test(entry)) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, entry, "utf8");

// Read-back: confirm what landed on disk matches what we intended.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== entry) {
  throw new Error("read-back mismatch: /output/entry.txt does not match entry");
}
