
## **players** (object)

Player data is stored here.  There are a few system reserved keys outlined below, but you should store all your custom player data in here.

All players have an `id` that references them in ACOS platform.

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
      "_cards": ["2S", "3S", "4S", "5S", "6S"],
      ...
    }
  }
}
```

---

## Definitions

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

