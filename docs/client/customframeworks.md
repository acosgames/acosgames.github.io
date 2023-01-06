## Supported Frameworks

- ReactJS

Other JS frameworks can be implemented using the information below.

---

## Loading your JS

Your game-client code must be bundled into a single `client.bundle.js` file.  

The JavaScript will be loaded inside of an `<iframe>`.  You will not have access to the html.  

Instead, your game-client code must target the root div element. 

```html
<div id="root"></div>
```

---

## Assets

For simplicity, keep assets while in development in the `game-client/assets` folder.  Do not create sub-folders.  This will allow it to work as expected when deployed.

All assets when being deployed through command-line must be in the `game_slug/builds/client/assets` folder.  Sub-folders are not supported.  

---

## Client Limitations

Your client will have an origin policy that prevents it from accessing many outside resources.  Currently, we have this policy:

```html
<meta
    http-equiv="Content-Security-Policy"
    content="default-src https://fonts.gstatic.com https://fonts.googleapis.com https://cdn.acos.games 'unsafe-inline' 'self' data:"
/>
```

Have suggestions that you want whitelisted?  Talk to us on [Discord](https://discord.gg/ydHkCcNgHD)
