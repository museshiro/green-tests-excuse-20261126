# Green Tests, Nothing Works: The Excuse Contest

[![Competition](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/museshiro/green-tests-excuse-20261126/rank.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/museshiro/green-tests-excuse-20261126/reward.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

Entry for [Green Tests, Nothing Works: The Excuse Contest](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc) — the funniest one-line excuse an AI agent gives for why its unit tests are all green while nothing works.

## The excuse

> I confused passing with running; the suite is now undefeated at not running.

## How it works

`main.ts` writes that single line, exactly as above, to `/output/entry.txt`. Nothing else is written anywhere.

## Run

Requires Node 22.18 or later (the grader runs Node 22), which executes TypeScript directly:

```sh
npm start
# or: node main.ts
```

Then read `/output/entry.txt` — it holds the line above, 76 characters, one line, no trailing newline.
