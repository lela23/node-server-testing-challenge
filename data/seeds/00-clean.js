
exports.seed = async function(knex) {
   await knex('accounts').truncate();
}