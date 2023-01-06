Your server code will have access to the **globals** object when run inside the vm.  These functions let you access the incoming actions, update the game state, manage the room, and other helpful functions.

## Functions

### **`globals.log(msg)`**

<sub><sup>**Params**</sup></sub>

- **`msg`** (string) - single argument for output

only available in simulator, ignored on acos.games 

---

### **`globals.error(msg)`**

<sub><sup>**Params**</sup></sub>

- **`msg`** (string) - single argument for output

only available in simulator, ignored on acos.games 

!!! note "Note"
    globals.log and globals.error do not work like console.log and console.error, instead only a single argument is allowed

---

### **`globals.actions()`**

get the array of actions sent by users or system

View example [user actions](/server/useractions/) and [system actions](/server/systemactions/) and their JSON.

---

### **`globals.game()`**

gets a copy of the game state in JSON format save this to a variable and make changes directly to it

View example [game state](/gamestate/example/#example-game-state-tictactoe) from server perspective

---

### **`globals.random()`**

discrete random number between 0 and 1 is seeded based on room data

---

### **`globals.database()`**

get the database JSON (optional)

Save a `database.json` file in the game-server folder to use this feature.  This holds your static JSON, which is useful for large content, so it is not bundled into the script.

---

### **`globals.finish(gameState)`**

<sub><sup>**Params**</sup></sub>

- **`gameState`** (object) - the final game state you updated from [globals.game()](#globalsgame)

when finished all the updates for an action, call this to "commit" the state


---

### **`globals.killGame()`**

kill the game immediately

---

### **`globals.ignore()`**

if you detect a bad action, tell system you want it ignored.

