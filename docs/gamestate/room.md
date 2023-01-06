## **room** (object)

Stores room metadata that is read-only and updated by ACOS platform.  

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

## Definitions

#### **`room_slug`** (string)

The room id used by ACOS platform to target the specific room.

#### **`sequence`** (int)

Every time the Game State is updated, this sequence will be incremented by 1.  This is different from [timer.sequence](/gamestate/timer/#sequence-int) that only updates when timer is updated.

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
