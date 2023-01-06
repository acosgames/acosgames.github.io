## **events** (object)

Events are used to notify of a specific type of state change for your client code to trigger UI update.  They are cleared on every game state update.

---

### required event

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

---

### custom events

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
