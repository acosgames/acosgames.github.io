## Overview

Your server code in `game-server` folder is responsible for building the **state** that is automatically synchronized to all clients.  Your script will be executed once for every action received.

Our game examples use a helper file in the game-server folder called [acosg.js](https://github.com/acosgames/tictactoe/blob/main/game-server/acosg.js). Its a wrapper for the globals below to help simplify usage.

See example usage in [index.js](https://github.com/acosgames/tictactoe/blob/main/game-server/index.js) and [game.js](https://github.com/acosgames/tictactoe/blob/main/game-server/game.js) which use the helper file to keep things organized.

!!! note "Note"
    Only pure JavaScript code is allowed from `npm` packages.  The server code will be bundled into a single `server.bundle.dev.js` for local development and `server.bundle.js` for production deployment.

## How it works

Your server code will run inside [vm2](https://github.com/patriksimek/vm2).  

This prevents using code like `async`, `await`, `eval`, `wasm`, and many NodeJS standard packages like `fs` and `request`.

You are also limited to **100ms** computation time for game-server code execution.  This means that your game rooms will be killed if you exceed the 100ms limitation.  Please take care to optimize as needed. 

Only pure JavaScript code is allowed from `npm` packages.  The server code will be bundled into a single `server.bundle.dev.js` for local development and `server.bundle.js` for production deployment.

In deployment, the bundle filename will be tagged automatically by ACOS with a version number.  This allows the ACOS platform to let you choose a version number to make active on production.  This also helps optimize caching on our servers.    

---

## Database (json)

A static `database.json` file that allows you to store large datasets.  This is useful to avoid having large data added into the runtime script.  The json file will be loaded and accessible by the [globals.database()](/server/#globalsdatabase) method.

#### File location

The database.json file should be stored at `project/game-server/database.json`.  

#### Format

The format must be either `array` or `object` in JSON format.

---

## Globals

Your server code will have access to the **globals** object when run inside the vm.


### **`globals.log(msg)`**

- **`msg`** - single argument for output

only available in simulator, ignored on acos.games 

### **`globals.error(msg)`**

- **`msg`** - single argument for output

only available in simulator, ignored on acos.games 

!!! note "Note"
    globals.log and globals.error do not work like console.log and console.error, instead only a single argument is allowed

### **`globals.actions()`**

get the array of actions sent by users or system

View example [action](#action-json-server-perspective) from server perspective

### **`globals.game()`**

gets a copy of the game state in JSON format save this to a variable and make changes directly to it

View example [game state](/gamestate/#server-perspective-tictactoe) from server perspective

### **`globals.random()`**

discrete random number between 0 and 1 is seeded based on room data

### **`globals.database()`**

get the database JSON (optional)

Save a `database.json` file in the game-server folder to use this feature.  This holds your static JSON, which is useful for large content, so it is not bundled into the script.

### **`globals.finish(gameState)`**

- **`gameState`** - the final game state you updated from [globals.game()](#globalsgame)

when finished all the updates for an action, call this to "commit" the state




### **`globals.killGame()`**

kill the game immediately

### **`globals.ignore()`**

if you detect a bad action, tell system you want it ignored.


---

## Action JSON (Server Perspective)

All player actions will contain metadata generated by the platform, that identify a user and more.  

```json
{
  "type": "pick",
  "payload": 1,
  "timeseq": 3,
  "timeleft": 29000,
  "room_slug": "HCTJM8",
  "user": { 
    "id": "iobYl", 
    "teamid": "VAD3R3" 
  }
}
```

#### `type`

The type must always be a string.  This string value is provided by the client that you can process in your server code.

#### `payload`

The payload can be any primitive (boolean, int, float, string), array, or object.  It is best to keep these as simple as possible.  Only your server code will look at this value.

#### `timeseq`

Every time a new timer is set, the sequence is incremented by 1.  This helps ensure actions are only processed for the correct sequences.


#### `timeleft`

If there is a timer, this will be how much timeleft in milliseconds before timer hits zero.  It's a convenience so you don't have to calculate yourself. 

To convert to seconds divide by `1000`.

#### `room_slug`

This is the ID of the game room.  It's used mostly by the platform to target the correct room. 


#### `user`.`id`

The user object holds the `id` of the user.  This is a shortid that can be used inside the "[players](/development/#players)" object in the Game State.

#### `user`.`teamid`

If game has teams configured, the teamid will be stored here.

---


## System actions

These actions are triggered automatically by the server

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

