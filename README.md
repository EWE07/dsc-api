# dsc-api
Api for DiscordCup discord bot list

## How to use
Use dscapi object to see all functions.

## Available methods:

```js
getBot(id, type)
getUser() // Coming soon!
getUser(id, option, newData) // Dooesn't work because DSC doesn't have endpoints for editing data
```

## Getting bot info
Example:

```js
dscapi.getBot('832526738437046333', 'botName')
```
Output:
```Justify```

If you don't provide **type** argument, you will see this:

<img src="/assets/types.png">

and all endpoint data

<img src="/assets/all.png">

## Dependencies
**node-fetch 2.6.4** (<code>npm i node-fetch@2 or @2.6.4</code>)

**node-fetch 2.6.4** is recommended, because 3.0 is TS-like and require additional actions (TypeScript is bloat).</p>

## License
**MIT**

### Author
M4r5ha11: [Website](https://m4r5ha11.com) or [GitHub](https://github.com/M4r5ha11)
