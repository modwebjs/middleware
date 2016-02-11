var Processor = require("modweb-processor");
var Router = require("modweb-router");
var Url = require("url");

function Middleware(site) {
	this.processor = new Processor(site);
	this.router = new Router(site.pages);

	return this.handle.bind(this);
}

Middleware.prototype.handle = function(req, res, next) {
	if (typeof req.url.pathname == "undefined") {
		req.url = Url.parse(req.url);
	}

	var path = req.url.pathname;
	var page = router.resolve(path);

	if (!page) {
		typeof next != "function" || next();
		return;
	}

	var output = this.processor.render(page, req);

	res.writeHead(output.status, output.headers);
	res.end(output.content);
};

module.exports = Middleware;
