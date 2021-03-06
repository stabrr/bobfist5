// Our Burger controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last week's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var count = 0;

var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");



// get route -> index
router.get("/", function(req, res) {
    // send us to the next get function instead.
    res.redirect("/fist5");
});

// get route, edited to match sequelize
router.get("/fist5", function(req, res) {
    // replace old function with sequelize function
    db.Fist5.findAll()
        // use promise method to pass the burgers...
        .then(function(dbFist5) {
            // console.log(dbFist5);
            //   count = dbFist5.f1 + 1;
            //   db.Fist5.update({
            //       count: count
            //   }, {
            //     where: {
            //         id: 1
            //     }
            // }).then(function(dbFist5) {
            //     res.redirect("/");
            // });

            // into the main index, updating the page
            var hbsObject = { topic: dbFist5 };
            return res.render("index", hbsObject);
        });
});

// post route to create burgers
router.post("/fist5/create", function(req, res) {
    // edited burger create to add in a burger_name
    db.Fist5.create({
            topic: req.body.topic,
            count: 0,
            f1: 0,
            f2: 0,
            f3: 0,
            f4: 0,
            f5: 0,
            ftotal: 0,
            favg: 0,
        })
        // pass the result of our call
        .then(function(dbFist5) {
            // log the result to our terminal/bash window
            console.log(dbFist5);
            // redirect
            res.redirect("/");
        });
});




// put route to devour a burger
router.get("/fist5/total", function(req, res) {
    // update one of the burgers
    // db.Fist5.findAll()
    console.log("what is going on?");
    db.Fist5.findAll({
            where: {
                id: 2
            }
        })
        // use promise method to pass the burgers...
        .then(function(dbFist5) {
            console.log(dbFist5.dataValues);
            // count = dbFist5.f1 + 1;
            // db.Fist5.update({
            //     count: count
            // }, {
            //     where: {
            //         id: 1
            //     }
            // }).then(function(dbFist5) {
            //     res.redirect("/");
            // });

            // into the main index, updating the page
            var hbsObject = { topic: dbFist5 };
            return res.render("index", hbsObject);
        });
});

module.exports = router;