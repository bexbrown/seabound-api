const leaderboardData = [
    {
        id: 1,
        score: 2,
        name: "Bob Loblaw"
    },
    {
        id: 2,
        score: 5,
        name: "Ali Ball"
    },
    {
        id: 3,
        score: 4,
        name: "Chris Topher"
    },
    {
        id: 4,
        score: 5,
        name: "Monica Parrot"
    },
    {
        id: 5,
        score: 1,
        name: "Oliver Moves"
    },
    {
        id: 6,
        score: 2,
        name: "Harry Smith"
    },
    {
        id: 7,
        score: 3,
        name: "Eloise Malleroy"
    },
    {
        id: 8,
        score: 2,
        name: "Constantine Gerladude"
    },
    {
        id: 9,
        score: 1,
        name: "James Bond"
    },
    {
        id: 10,
        score: 4,
        name: "Holden Spots"
    }
]

/**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// exports.seed = async function (knex) {
//     // Deletes ALL existing entries
//     await knex('leaderboard').del();
//     await knex('leaderboard').insert(leaderboardData);
// };

exports.seed = function (knex) {
    return knex("leaderboard")
        .del()
        .then(() => {
            return knex("leaderboard").insert(leaderboardData);
        });
}
