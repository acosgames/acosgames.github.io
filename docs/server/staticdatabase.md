## Database (json)

A static `database.json` file that allows you to store large datasets.  This is useful to avoid having large data added into the runtime script.  The json file will be loaded and accessible by the [globals.database()](/server/globals/#globalsdatabase) method.

#### File location

The database.json file should be stored at `project/game-server/database.json`.  

#### Format

The format must be either `array` or `object` in JSON format.
