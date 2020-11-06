const express = require('express');
const cors = require('cors');
const accountsRouter = require('./api/accounts/accounts-router');

const server = express();
const PORT = process.env.PORT || 8000;

server.use(cors());
server.use(express.json());

server.use('/accounts', accountsRouter);

server.get('/', (req, res) => {
	res.status(200).json({
		message: 'The API is running!'
	});
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

module.exports = server;