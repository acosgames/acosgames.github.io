
## **timer** (object)

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

## Definitions

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
