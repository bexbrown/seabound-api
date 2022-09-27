// require("dotenv").config();
const knex = require("knex")(require('./knexfile'));
const express = require('express')
const app = express();
const PORT = 8080;
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.get("/leaderboard", async (req, res) => {
    knex
        .select("*")
        .from("leaderboard")
        .orderBy("score", "desc")
        .limit("10")

        .then(leaderboardData => {
            res.json(leaderboardData);
        })
        .catch(error => {
            res.status(500).json({ message: `Error getting leaderboard data` });
            console.log(error);
        })
});

app.post('/leaderboard', async (req, res) => {
    knex('leaderboard')
        .insert(req.body)
        .then((newLeaderboardData) => {
            res.status(201).json(newLeaderboardData);
        })
        .catch(error => {
            res.status(400).json({ message: `Error creating leaderboard rank for ${req.body.name}` });
        }
        )
});

app.listen(PORT, function () {
    console.log('App is now running at http://localhost:' + PORT);
});