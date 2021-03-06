const express = require("express");
const app = express();

app.use(express.json());

//Make sure to import error here.
const ExpressError = require("./ExpressError");
//Here you'll put in your routes
const addRoutes = require("./routes/add");
app.use("/add", addRoutes);

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

module.exports = app;