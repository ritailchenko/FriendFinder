var friends = require("../data/friends.js");
var express = require("express");
var router = express.Router();


    router.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    router.post("/api/friends", function(req, res) {
      var user = req.body;
      var minDifference = 1000;
      var bestMatch = null;

      for ( var i = 0; i < friends.length; i++) {
           var oldFriend = friends[i];
           var totalDifference = 0;
           for ( var j = 0; j < oldFriend.scores.length; j++) {
             totalDifference += Math.sqrt(Math.pow(user.scores[j] - oldFriend.scores[j],2));
           }

           if ( totalDifference < minDifference) {
             bestMatch = oldFriend;
             minDifference = totalDifference;
           }
      }
        friends.push(user);
      res.json(bestMatch);
    });

    router.post("/api/clear", function() {
        surveyData = [];
    });
module.exports = router;