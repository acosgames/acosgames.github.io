
## **state** (object)

Store all your game board or environment data here.  

##### scoped keys

Inside the `state` object, you can prefix keys with `_` underscore to make them private.  This is a special prefix character to keep data private to the server.

Example, that hides the deck from sending to clients:

```json
{
  "state": {
    "_deck": ["AS", "AH", "3D"]
  }
}
```
