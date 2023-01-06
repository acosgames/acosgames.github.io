## Overview

The client is responsible for displaying the game state that is synchronized to your browser frontend. There is a helper file called [acosg.js](https://github.com/acosgames/tictactoe/blob/main/game-client/acosg.js) that listens for incoming messages from parent window. 

Everytime there is a message update, you will receive the full game state. The TicTacToe example uses ReactJS, but any JS framework can be used, as long as you can receive updates and send actions by re-creating what the [acosg.js](https://github.com/acosgames/tictactoe/blob/main/game-client/acosg.js) file does.

!!! note "Note"

    [Click here](/gamestate/#example-game-state) to view an example Game State from Tic Tac Toe.

---

### Attaching to message listener

To receive game state updates, the client code must call
```javascript
window.addEventListener('message', onMessage, false);

const onMessage = (evt) => {
  let gamestate = evt.data;
  let origin = evt.origin;
  let source = evt.source;
  if (!gamestate)
    return;
}
```

---

### Sending action

To send an action, you must call the `window.parent.postMessage` method.

```javascript
let action = {
  type: "move",
  payload: 3
}
window.parent.postMessage(action, '*');
```

Client's can also send actions in the following format using the [acosg.js](https://github.com/acosgames/tictactoe/blob/main/game-client/acosg.js#L134) `send` function:

```js
send("pick", 3);
```

The first parameter is always a string, second parameter can be any primitive, array, or object type.

---

### Custom JS Frontend Frameworks

Client code must be bundled into a `client.bundle.js` file.  You will not have access to the index.html file.  Instead, your client code must target the root element. 

```html
<div id="root"></div>
```

---

### Assets

For simplicity, keep assets while in development in the `game-client/assets` folder.  This will allow it to work as expected when deployed.

All assets when being deployed must be in the `game_slug/builds/client/assets` folder.  Sub-folders are not supported.  

---

### Client Limitations

Your client will have an origin policy that prevents it from accessing many outside resources.  Currently, we have this policy:

```html
<meta
    http-equiv="Content-Security-Policy"
    content="default-src https://fonts.gstatic.com https://fonts.googleapis.com https://cdn.acos.games 'unsafe-inline' 'self' data:"
/>
```

Have suggestions that you want whitelisted?  Talk to us on [Discord](https://discord.gg/ydHkCcNgHD)


## Client relevant game state

The gamestate object received from [message listener](/client/#attaching-to-message-listener) will have all these objects from [Game State](/gamestate/#example-game-state-tictactoe)

```json
{
  "local": {},
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

### **local** (object)

This game state object is client-side only.  The platform will automatically add the `local` player object which is identical to the [players](#players) game state for the local player.

```js
"local": {
    "name": "joe",
    "rank": 1,
    "score": 100,
    "id": "8CCkf",
    "ready": true,
    "type": "X"
}
```

---

### **next** (object)

```js
 "next": { "id": "manC6" },
```

The next object shows which player id is allowed to make the next action.  You should avoid sending if the local player is not in the `id` field.

When the `id` is `'*'`, all players are allowed to submit an action.

---

### **timer** (object)

```js
"timer": {
    "end": 1641441249109,
    "seconds": 10,
    "sequence": 5
}
```
[Timers](/gamestate/#timer-object) are very important to keep games fast-paced.  

In order to ensure that players with high latency (400+ms) can play, all clients automatically have the [timer.end](/gamestate/#end-int) adjusted based on their latency to match server time.

For timeleft display on UI, you can use the `seconds` value which you can calculate the original time with:

```javascript
let startTime = gamestate.timer.end - gamestate.timer.seconds * 1000;
```



