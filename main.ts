// Green Tests, Nothing Works: The Excuse Contest.
// Writes the entry line to /output/entry.txt and nothing else.
// Only an absolute-path write is used: the grader sandbox runs with a
// read-only working directory, so no relative write is attempted at all.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I confused passing with running; the suite is now undefeated at not running.";

// Gate: the entry must be 1-140 characters, a single line.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`Entry line must be 1-140 characters on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
