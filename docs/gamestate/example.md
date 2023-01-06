Your **game-server** code will mostly focus on updating `state`, `players`, and `teams`.  Use the [helper code](https://github.com/acosgames/tictactoe/blob/main/game-server/acosg.js#L213) to set the timer and events.  

Your **game-client** code may only create an `action`, but will be able to read most of the Game State.

The Game State consists of several objects:

```json
{
  "state": {},
  "players": {},
  "teams": {},
  "next": {},
  "events": {},
  "timer": {},
  "room": {}
}
```

Use left-navigation to read up on each object.

---

## **Example Game State (TicTacToe)**

This example shows what the game state looks like in the middle of a Tic Tac Toe game.  To see detailed information about each object, please navigate through the Game State objects in left navigation.

```json
{
  "room": {
    "room_slug": "8HKDWM",
    "sequence": 8,
    "status": "gamestart",
    "starttime": 1672290602570,
    "endtime": 0,
    "updated": 1672290609197
  },
  "state": {
    "cells": [
      "O",
      "X",
      "",
      "O",
      "",
      "",
      "",
      "",
      ""
    ],
    "sx": "DjTS3"
  },
  "next": {
    "id": "iobYl",
    "action": "pick"
  },
  "events": {},
  "timer": {
    "end": 1672300609197,
    "seconds": 10000,
    "sequence": 5
  },
  "players": {
    "iobYl": {
      "name": "Player2326",
      "rank": 0,
      "score": 0,
      "rating": 2636,
      "teamid": "team_o",
      "ready": true,
      "type": "X"
    },
    "DjTS3": {
      "name": "Player7145",
      "rank": 0,
      "score": 0,
      "rating": 2364,
      "teamid": "team_x",
      "ready": true,
      "type": "O"
    }
  },
  "teams": {
    "team_o": {
      "name": "Team O",
      "color": "#a2abdd",
      "order": 0,
      "players": [
        "iobYl"
      ],
      "rank": 2,
      "score": 0
    },
    "team_x": {
      "name": "Team X",
      "color": "#dd7575",
      "order": 1,
      "players": [
        "DjTS3"
      ],
      "rank": 2,
      "score": 0
    }
  }
}
```
