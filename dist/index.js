"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var app = Express();
app.get('/test', function (req, res, next) {
    res.json({
        hello: 'world'
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map