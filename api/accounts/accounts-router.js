const express = require('express');
const Accounts = require('./accounts-model');
const router = express.Router();

// Retrieve all accounts
router.get('/', async (req, res, next) => {
	try {
		const accounts  = await Accounts.findAll();
		res.json(accounts);
	} catch (err) {
		next(err);
	}
})

// Retrieves an account with the specified id
router.get('/:id', async (req, res, next) => {
	try {
		const account  = await Accounts.findById(req.params.id);
		res.json(account);
	} catch (err) {
		next(err);
	}
});

// Creates an account
router.post('/', async (req, res, next) => {
	try {
		const { name, owner, balance } = req.body;
		const account = await Accounts.findBy({ name }).first();

		if (account) {
			return res.status(409).json({
				message: 'The account name is already taken',
			});
		}

		const newAccount = await Accounts.add({
			name,
			owner,
			balance
		})

		res.status(201).json(newAccount);
	} catch (err) {
		next(err);
	}
})

// Updates a current account with the specified id
router.put('/:id', async (req, res, next) => {
	try {
		const account = await Accounts.update(req.params.id, req.body);

		res.json(account);
	} catch (err) {
		next(err);
	}
});


// Deletes an account and returns the updated list of accounts
router.delete('/:id', async (req, res, next) => {
	try {
		await Accounts.remove(req.params.id);
		const accounts  = await Accounts.findAll();
		res.json(accounts);
	} catch (err) {
		next(err)
	}
})

module.exports = router;