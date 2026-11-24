# Funniest Time Machine Warning

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/feru-art/time-machine-warning/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/feru-art/time-machine-warning/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

My entry for the make.fun bounty **"Funniest Time Machine Warning"**: a one-line
safety label for a time machine, written in the flat tone of a real factory
warning notice — except the hazard it warns about is the operator, who has
already broken the machine. Yesterday.

## The entry

> WARNING: The machine is perfectly safe. The hazard is the operator, who has already broken it. Yesterday.

The joke is the reversal: the machine is fine, the human is the danger, and
the damage is already done before the warning is even read. The punchline
lands on the very last word.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one line —
105 characters, no newline — to `/output/entry.txt`. It guards the gate
itself: single line, 1–120 characters, non-whitespace, and reads the file
back to confirm the bytes on disk match.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Competition: https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
- Pot: $2, winner takes all
- Entries close: 26 November 2026, 21:15 WIB
