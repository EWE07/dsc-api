# dsc-api
API for DiscordCup discord bot list
  <h1>HOW TO USE</h1>
    <p>Use dscapi <b>object</b> to see all functions.</p>
    <p>Available methods:</p>
    <br>
    <code>getBot(id, type)</code>
    <br>
    <code>getUser()</code><span>- coming soon</span>
    <br>
    <code>getUser(id, option, newData)</code><span> - doesn't work because DSC doesn't have endpoints for editing data</span>
    <hr>
    <h1>Getting bot info</h1>
    <p>Example:</p>
    <code>
        dscapi.getBot('832526738437046333', 'botName')
    </code>
    <br>
    <p>Output:</p>
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
<h1>License</h1>
<p>MIT</p>
<h1>Author</h1>
<p>M4r5ha11 (https://m4r5ha11.com or https://github.com/M4r5ha11)</p>
