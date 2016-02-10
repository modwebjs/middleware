# modweb-middleware

Resolves request url, renders page and outputs it.

## Example

```javascript
var Modweb = require("modweb-middleware");
var http = require("http");

// load site.json
var site = require("./site");
var modweb = new Modweb(site);

// create webserver
var app = http.createServer(modweb);

// listen for connections
app.listen(8080);
```

## License

MIT
