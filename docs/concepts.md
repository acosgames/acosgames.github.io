# Dev Concepts

Overview of the concepts that make games work on the Acos platform.

## Projects

### Game Client

The client is responsible for displaying the game state that is forwarded to your game's front end. There is a helper file called `acosg.js` that listens for incoming state updates. Everytime there is an update, you will receive the full state. The TicTacToe example uses ReactJS, but any JS framework can be used, as long as you can receive updates and send actions by re-creating what the `acosg.js` file does.

#### Send Action

Client's can send actions in the following format using the acosg.js `send` function:

```js
send("pick", 3);
```

The first parameter is always a string, second parameter can be any primitive, array, or object type.

## Game Server

The server is responsible for building the **game state** that is automatically synchronized to all clients.

Your server code will be run inside a JS virtual machine, and you will have access to the **globals** object.

```js
//log a message, only available in simulator
globals.log(msg);

//log an error, only available in simulator
globals.error(msg);

//get the array of actions sent by users or system
globals.actions();

//get the last gameState object, copy this to a variable and make changes directly to it
globals.game();

//get the database JSON
globals.database();

//when finished updating, call this to "commit" the state
globals.finish(gameState);

//kill the game immediately
globals.killGame();

//if you detect a bad action, tell system you want it ignored.
globals.ignore();
```
