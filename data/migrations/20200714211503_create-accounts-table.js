
exports.up = async function(knex) {
	await knex.schema.createTable('accounts', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable().unique();
        tbl.text('owner', 128).notNullable();
        tbl.decimal('balance').notNullable();
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('accounts');
}