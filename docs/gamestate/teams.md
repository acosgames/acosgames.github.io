
## **teams** (object)

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


---

##### scoped keys

Inside the `teams` object, you can prefix keys with `_` underscore to make them private for the team only.

Example that hides the team's resource count from other teams:

```json
{
  "teams": {
    "team_x": {
      "_resources": 25,
      ...
    }
  }
}
```

---

## Definitions

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

