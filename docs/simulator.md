## Simulator Preview

Development of the client and server is done offline using the [acosgames](https://github.com/acosgames/acosgames) simulator. This simulates the environment used on [acos.games](https://acos.games).

<style>
  .video-wrapper {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
}
.video-wrapper > iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/keGjP5ySqyg" frameborder="0" allowfullscreen></iframe>
</div>

You will write javascript code in `game-client` for the frontend and authorative code in `game-server` which is run through a virtual machine.  

Our examples use React and NodeJS respectively, with other frontend frameworks possible.

## How it works

The `game-client` peforms an **action** from user input and the `game-server` updates the state based on the action. The state is saved in the [Game State](#game-state) which is a JSON object. The simulator will synchronize the JSON between all connected clients and persist the game state for the next action.

!!! note "Note"

    It is recommended that your server code be deterministic.  Meaning the same sequence of actions should always return the same result!  If you need to randomize, we provide a global function that is deterministic.


## Features

The simulator gives users these features:

1. Adding fake players, which creates a game screen for each player.  
  - Players which are not joined to a game will automatically be in spectator mode.
2. Scoreboard and timer to see players by team or score
3. JSON Viewer which lets you scope the data to see from different perspectives.  This lets you see which JSON the Server, Players, or Spectators are seeing.
4. Replay controls to go back or forward on user or game actions.
5. Game Settings management, to specify screen type, screen size, player counts, team counts, and team configuration.






## Have a suggestion?

Talk to us on [Discord](https://discord.gg/ydHkCcNgHD)