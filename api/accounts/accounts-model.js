const db = require('../../data/dbConfig');

// Exports all helper functions for use in accounts-router.js
module.exports = {
	findAll,
	findById,
	findBy,
	add,
	update,
	remove
}

// Returns all account objects
async function findAll() {
	return db('accounts');
}

// Returns the account object with the specified id
async function findById(id) {
	// first() returns the first entry in the db matching the query
	return db('accounts').where({ id }).first();
}

// Returns an account that matches the filter
function findBy(filter) {
	return db('accounts').where(filter);
}

// Adds an account object to the database
async function add(account) {
	const [id] = await db('accounts').insert(account);

	return db('accounts').where({ id }).first();
}

// Updates a current account with the specified changes
async function update(id, changes) {
	await db('accounts').where({ id }).update(changes);

	return db('accounts').where({ id }).first();
}

// Removes the account object with the specified id
async function remove(id) {
	return await db('accounts').where({ id }).del();
}


