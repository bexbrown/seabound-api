/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('leaderboard', function (table) {
        table.increments('id');
        table.integer('score').notNullable();
        table.string('name').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    // delete the leaderboard table
    return knex.schema.dropTable('leaderboard')
};

