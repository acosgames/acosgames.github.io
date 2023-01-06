## **next** (object)

The next object is used to tell the system who is allowed to send an action.

```json
{
  "next": {
    "id": "*"
  }
}
```

## Definitions

#### **`id`** (string|array)

The only required key is the `id` key. The values can be either `*` for everyone, player's `id`, or team's `teamid`. 

##### Array of Strings

If you use an array of strings, all ids whether player id or team id listed in the array will be allowed to perform an action.

##### String

If string provided only the specific player id or team id will be allowed to perform an action.

#### **`action`** (string|array) 

This key is optional.

In the future, we may do something with bots/computers, so letting players know which actions can be performed may be helpful for AI.
