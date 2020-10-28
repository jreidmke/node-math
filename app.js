const express = require("express");
const app = express();

app.use(express.json());

//Make sure to import error here.

//Here you'll put in your routes

//404 Handler

app.use(function(req, res, next) {
    const error = new ExpressError("Resource Not Found", 404);
    return next(error);
});

//General Error Handler

app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});