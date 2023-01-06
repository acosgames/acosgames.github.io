## Overview

The client is responsible for displaying the game state that is synchronized to your browser frontend. There is a helper file called [acosg.js](https://github.com/acosgames/tictactoe/blob/main/game-client/acosg.js) that listens for incoming messages from parent window. 

Everytime there is a message update, you will receive the full game state. The TicTacToe example uses ReactJS, but any JS framework can be used, as long as you can receive updates and send actions by re-creating what the [acosg.js](https://github.com/acosgames/tictactoe/blob/main/game-client/acosg.js) file does.

!!! note "Note"

    [Click here](/gamestate/example/#example-game-state-tictactoe) to view an example Game State from Tic Tac Toe.
