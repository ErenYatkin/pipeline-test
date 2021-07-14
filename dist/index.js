"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var Express = require("express");
dotenv.config();
var app = Express();
app.get('/test', function (req, res, next) {
    console.log(process.env.TEST_KEY_FOR_PIPELINE);
    res.json({
        hello: 'world'
    });
});
var port = parseInt(process.env.PORT);
app.listen(port, function () {
    console.log('App started', port);
});
//# sourceMappingURL=index.js.map