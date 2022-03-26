# ACOS Documentation

[<img src="img/acos-logo-combined.png" alt="checkers" width="400"/>](https://acos.games/)

Play or develop your own competitive online web game.  

The platform supports realtime Turn-based and Trivia style games.

You must first become a developer in the [acosgames](https://github.com/acosgames) GitHub Organization. Simply go to [Developer Zone](https://acos.games/dev) on [Acos](https://acos.games/) to start.

## Getting Started

1. Create a new game inside the [Developer Zone](https://acos.games/dev) on [Acos](https://acos.games/).
2. A public GitHub repository will be created at **https://github.com/acosgames/&lt;game_slug>** with the `Slug Name` you specified. You will be added as an admin to the repository.

### Start from an existing Game Template

When creating a game, you can choose from the available game templates

| Game Templates  |                                                           |                                                |                                                       |
| --------------- | --------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| **Tic Tac Toe** <br />`git clone git@github.com:acosgames/tictactoe.git` | <img src="img/tictactoe.png" alt="tictactoe" width="64"/> | [Play on Acos](https://acos.games/g/tictactoe) | [Github Repo](https://github.com/acosgames/tictactoe) |
| **Anime Trivia** <br />`git clone git@github.com:acosgames/anime-trivia-simple.git` | <img src="img/anime-trivia-simple.png" alt="anime-trivia-simple" width="64"/> | [Play on Acos](https://acos.games/g/anime-trivia-simple) | [Github Repo](https://github.com/acosgames/anime-trivia-simple) |
| **Checkers** <br />`git clone git@github.com:acosgames/checkers.git` | <img src="img/checkers.png" alt="checkers" width="64"/> | [Play on Acos](https://acos.games/g/checkers) | [Github Repo](https://github.com/acosgames/checkers) |


### After creating your game

A new repository matching the `Slug Name` you provided will be created with the game template code.  Simply clone your new repository to get started.

```bash
git clone git@github.com:acosgames/tictactoe.git
```

!!! note "Note"

    Note: You must create the game through [Developer Zone](https://acos.games/dev) to have repo created in acosgames organization.

## Running the game using simulator

First make sure to install all the packages

```bash
npm install
```

To concurrently start the Client, Server, and acosgames Simulator run:

```bash
npm start
```

This will run the following:

1. Game Client (ReactJS) with webpack watcher
    - Browser-Sync to restart browser on file changes for client
2. Game Server (NodeJS) with webpack watcher
3. acosgames Simulator
    - Includes Simulator Client + Simulator Server (NodeJS/Express/vm2)

Your Game Client will run inside an `<iframe>` and your Game Server will run inside the nodejs virtual machine.  



## Deploy Game

When you are ready to deploy the game, visit the [Developer Zone](https://acos.games/dev), and find your deployment command.

Example:

```bash
npm run deploy -- tictactoe.FBC4864251084B188F1A6E63F70C38D3
```

This will bundle the Client, Server, and Database (if exists), and upload them to acos.games.

## Publish Game

The game will be immediately available as an **experimental** version. If you think its ready for production, go to the [Developer Zone](https://acos.games/dev) and click **Push to Production**.
