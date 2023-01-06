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

Jump to the [Client relevant game state](#client-relevant-game-state) to see what the object holds.

---

### Sending an action

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


## Client relevant game state

The gamestate object received from [message listener](#attaching-to-message-listener) will have all these objects from [Game State](/gamestate/example/)

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

This game state object is client-side only.  The platform will automatically add the `local` player object which is identical to the [players](/gamestate/players/) game state for the local player.

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
[Timers](/gamestate/timer/) are very important to keep games fast-paced.  

In order to ensure that players with high latency (400+ms) can play, all clients automatically have the [timer.end](/gamestate/timer/#end-int) adjusted based on their latency to match server time.

For timeleft display on UI, you can use the `seconds` value which you can calculate the original time with:

```javascript
let startTime = gamestate.timer.end - gamestate.timer.seconds * 1000;
```



