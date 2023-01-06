These actions are triggered automatically by the server based on users joining or game timer ending.

## Actions

#### `pregame`

Once the first player has joined the game, this action is triggered immediately.  A timer of 20 seconds will be activated, and if it reaches zero, it will call a `noshow` action.
```json
{
  "type": "pregame"
}
```

#### `noshow`

An internal action that notifies the platform the game failed to start because players never joined the room.  The room will be killed immediately.
```json
{
  "type": "noshow"
}
```

#### `starting`

After all players have joined and have sent a `ready` action, the `starting` action will be triggered.  Where a short 5 second timer will start, and when it reaches zero, will trigger the `gamestart` action.
```json
{
  "type": "starting"
}
```

#### `gamestart`

Triggered when the timer from the `starting` action reaches zero.  Any timers that reach zero after this will trigger the `skip` action.
```json
{
  "type": "gamestart"
}
```

#### `skip`

Triggered when a timer reaches zero.  You should handle this action to forfeit a player or do some other logic.
```json
{
  "type": "skip"
}
```
