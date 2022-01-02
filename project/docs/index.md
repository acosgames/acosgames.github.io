# (Acos) A cup of skill

Play or develop your own competitive online web game.

You must first become a developer in the [acosgames](https://github.com/acosgames) GitHub Organization. Simply go to [Developer Zone](https://acos.games/dev) on [Acos](https://acos.games/) to start.

## Getting Started

1. Create a new game inside the [Developer Zone](https://acos.games/dev) on [Acos](https://acos.games/).
2. A public GitHub repository will be created at **https://github.com/acosgames/&lt;game_slug>** with the `Slug Name` you specified. You will be added as an admin to the repository.

### Start from an existing Game Template

Choose from the available game templates below:

| Game Templates  |                                                           |                                                |                                                       |
| --------------- | --------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| **Tic Tac Toe** | <img src="img/tictactoe.png" alt="tictactoe" width="64"/> | [Play on Acos](https://acos.games/g/tictactoe) | [Github Repo](https://github.com/acosgames/tictactoe) |

### Copy Game Template

Clone the repository of game template you selected. Here we will use the **Tic Tac Toe** as an example:

`git clone git@github.com:acosgames/tictactoe.git`

### Push to your repository

Change the remote url to a new repository. If you want the project to be open source, use the organization repository. If you want to keep it private, create a repository where you want.

This example will put it in `my-new-game` repository in the [acosgames](https://github.com/acosgames) organization.

`git remote set-url origin git@github.com:acosgames/my-new-game`

Finally, push a mirror copy to your new repository.

`git push -u origin --mirror`

!!! note "Note"

    Note: You must create the game through [Developer Zone](https://acos.games/dev) to have repo created in acosgames organization.

## Deploy Game

When you are ready to deploy the game, visit the [Developer Zone](https://acos.games/dev), and find your deployment command.

Example:

`npm run deploy -- tictactoe.FBC4864251084B188F1A6E63F70C38D3`

This will bundle the Client, Server, and Database (if exists), and upload them to acos.games.

## Publish Game

The game will be immediately available as an **experimental** version. If you think its ready for production, go to the [Developer Zone](https://acos.games/dev) and click **Push to Production**.
