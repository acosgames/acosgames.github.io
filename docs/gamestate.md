## Overview

Server code will mostly focus on updating `state`, `players`, and `teams`.  Use the helper code to set the timer and events.  

Client code may only create an `action`.

---

## Game State

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

---

### **state** (object)

Store all your game board or environment data here.  

##### scoped keys

Inside the `state` object, you can prefix keys with `_` underscore to make them private.  This is a special prefix character to keep data private to the server.

Example, that hides the deck from sending to clients:

```json
{
  "state": {
    "_deck": ["AS", "AH", "3D"]
  }
}
```

---

### **players** (object)

Player data is stored here.  There are a few system reserved keys outlined below, but you should store all your custom player data in here.

All players have a `shortid` that references a user in ACOS platform.

```json
{
    "players": {
        "iobYl": {
            "name": "Player2326",
            "rank": 0,
            "score": 0,
            "rating": 2636,
            "teamid": "team_o",
            "ready": true,
            "type": "X",
            "id": "iobYl"
        },
        "DjTS3": {
            "name": "Player7145",
            "rank": 0,
            "score": 0,
            "rating": 2364,
            "teamid": "team_x",
            "ready": true,
            "type": "O",
            "id": "DjTS3"
        }
    }
}
```

---

##### scoped keys

Inside the `players` object, you can prefix keys with `_` underscore to make them private for the player only.

Example that hides the user's cards from sharing with other players:

```json
{
  "player": {
    "ABCDEF": {
      "name": "JoeOfTexas",
      "rank": 1,
      "_cards": ["2S", "3S", "4S", "5S", "6S"],
      ...
    }
  }
}
```

---

#### `name` (string)

name is the user's name that was setup when user first logged in.


#### `rank` (int)

rank is set by you to determine who is in 1st, 2nd, 3rd, ..., nth place for the room. On gameover, the system will update the global player ratings based on this value. Lower is better.

#### `score` (int)

score is set by you to determine how many points the users have earned. This has no purpose unless rank is removed, where scores will then be used to calculate new player ratings. Higher is better.

#### `rating` (int)

rating is automatically calculated based on the final `rank` or `score` value of all the players when the game status reaches gameover.

#### `ready` (boolean)

Your client must trigger an action `send('ready', true)` when your client frontend is loaded. This is persisted into the player's object, and let's the platform know when to trigger a **gamestart** event.

#### `id` (string)

The id of the player, which is the parent key used in the `players` object.

#### `teamid` (string)

The teamid of the player, which maps to the `teams` object.


---

### **teams** (object)

If your game supports teams configured in the game-settings.json.  Players will be automatically added into the `teams`.`players` object along with the name, color, and order you configured. 

Rank and score of a team will be used instead of player's rank and score if teams are defined.

```json
{
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

#### **`team_slug`** (string key)

This will be the teamid added into the player's data.

#### **`name`** (string)

The display name of this team

#### **`color`** (string hex)

The color that represents the team.  Use CSS colors in hex format `#FFFFFF`. 

#### **`order`** (uint)

the order to display on the ACOS scoreboard

#### **`players`** (array of strings)

list of players who belong to this team, may be modififed after players have joined

#### **`rank`** (int)
 
the overall rank of this team, sometimes teams can win with lower score than opponents.  If they win the game, they need to have rank 1, while others have 2 or higher rank.

#### **`score`** (int)

the points scored by this team, higher is better


---

### **room** (object)

Stores room metadata that is updated by ACOS platform only.  

```json
{
  "room": {
    "room_slug": "HCTJM8",
    "sequence": 10,
    "status": "gameover",
    "starttime": 1672290983803,
    "endtime": 0,
    "updated": 1672290991462
    }
}
```

#### **`room_slug`** (string)

The room id used by ACOS platform to target the specific room.

#### **`sequence`** (int)

Every time the Game State is updated, this sequence will be incremented by 1.  This is different from [timer.sequence](/gamestate/#sequence-int_1) that only updates when timer is updated.

#### **`status`** (string)

The possible values are:

1. pregame - as soon as first player joins
2. starting - as soon as all players have "ready" == true
3. gamestart - after the starting countdown finishes
4. gameover - after server code triggers gameover 

Room status is used internally by the platform to trigger the next room status. Exception is when status == "gamestart", the timers will cause a "skip" action for the current player(s) who are next.

#### **`starttime`** (int)

the unix epoch in milliseconds since the room was started

#### **`endtime`** (int)

the unix epoch in milliseconds when the room was closed

#### **`updated`** (int)

the unix epoch in milliseconds when the game state was last updated

--- 

### **events** (object)

Events are used to notify of a specific type of state change for your client code to trigger UI update.  They are cleared on every game state update.

#### required event

##### `gameover` event

gameover event is required to officially finish a game. This includes forfeits, wins or loss.  The only important requirement is the "key" must be called `gameover` like the following example:

```json
{
  "events": {
    "gameover": true
  }
}
```

Or your can add metadata for your client UI to update:

```json
{
  "events": {
    "gameover": {
        "winner": "ABCDEF"
    }
  }
}
```

#### custom events

You can create your own events by defining any key, here we used `pick`:

```json
{
  "events": {
    "pick": {
      "user": "ABCDEF",
      "picked": 3
    }
  }
}
```

Or you could do even simpler if you track the history of "next" from game state.

```json
{
  "events": {
    "pick": 3
  }
}
```

### **timer** (object)

The timer helps control the flow of the game. It is important that you always set a timer. Rooms will be destroyed if they do not complete within 1 hour.

To set a timer, make sure you finish the game state update with `set` key:

```json
{
  "timer": {
    "set": 15
  }
}
```

The example above sets a timer for 15 seconds.

#### **`set`** (float)

Value in seconds (float)

The platform will detect the seconds set, and create `end` and `seconds` values, and update the sequence counter:

```json
{
  "timer": {
    "end": 1641439171453,
    "seconds": 15,
    "sequence": 5
  }
}
```

#### **`end`** (int)

end is the unix epoch time in milliseconds when the timer should reach zero.

On the client-side, `end` is adjusted for latency automatically, and can be used to calculate near perfect timeleft with the following:

```js
let now = (new Date()).getTime();
let timeleft = timer.end - now;
```

#### **`seconds`** (int)

`seconds` shows the original time in seconds set by the server, so you can calculate elapsed percentages as needed.

#### **`sequence`** (int)

the current sequence for timers, which is incremented by 1 every time a new timer is created with `set`.

---

### **next** (object)

The next object is used to tell the system who is allowed to send an action.

```json
{
  "next": {
    "id": "*"
  }
}
```

#### **`id`** (string|array)

The only required key is the `id` key. The values can be either `*` for everyone, player's `id`, or team's `teamid`. 

##### Array of Strings

If you use an array of strings, all ids whether player id or team id listed in the array will be allowed to perform an action.

##### String

If string provided only the specific player id or team id will be allowed to perform an action.

#### **`action`** (string|array) 

This key is optional.

In the future, we may do something with bots/computers, so letting players know which actions can be performed may be helpful for AI.

---

## **Example Game State (TicTacToe)**

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
