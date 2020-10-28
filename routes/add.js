const express = require("express");
const router = new express.Router();

router.get("/", async(req, res, next) => {
    let x = "PIZZA"
    return res.json({x});
})

module.exports = router;