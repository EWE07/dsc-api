# dsc-api
API for DiscordCup discord bot list
    <h1>HOW TO USE</h1>
    <p>Use dscapi <b>object</b> to see all functions.</p>
    <p>Available methods:</p>
    <br>
    <code>getBot(id, type)</code>
    <br>
    <code>getUser() - coming soon</code>
    <br>
    <code>getUser(id, option, newData) - doesn't work because DSC doesn't have endpoints for editing data</code>
    <hr>
    <h1>Getting bot info</h1>
    <p>Example:</p>
    <br>
    <code>
        dscapi.getBot('832526738437046333', 'botName')
    </code>
    <p>Output:</p>
    <br>
    <code>Justify</code>
    <br>
    <br>
    <p>If you don't provide <code>type</code> argument, you will see this:</p>
    <img src="/assets/types.png">
<p>and all endpoint data</p>
<img src="/assets/all.png">
<br>
<h1>Dependencies</h1>
<p>node-fetch 2.6.4 (<code>npm i node-fetch@2 or @2.6.4</code>)</p>
<p>node-fetch 2.6.4 is recommended, because 3.0 is TS-like and require additional actions (TypeScript is bloat).</p>
