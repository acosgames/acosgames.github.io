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




