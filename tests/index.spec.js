
const request = require('supertest');
const server = require('../index.js');
const db = require('../data/dbConfig');

beforeEach(async () => {
	await db.seed.run();
})

afterAll(async () => {
	await db.destroy();
})

describe('tests for index.js', () => {
	// GET '/' tests
	describe("GET '/' tests", () => {
		it('it has process.env.DB_ENV as "testing"', async () => {
			expect(process.env.DB_ENV).toBe('testing');
		})

		it("GET '/' should return a status code of 200", async () => {
			const expectedStatusCode = 200;

			const res = await request(server).get('/');

			expect(res.status).toEqual(expectedStatusCode);

		});

		it("GET '/' should return the following message", async () => {
			const res = await request(server).get('/');

			expect(res.body.message).toBe('The API is running!');
		});

		it("GET '/' should return a JSON object", async () => {
			const res = await request(server).get('/');

			expect(res.type).toEqual('application/json');
		});
	});
	// GET all accounts endpoint tests
	describe("GET '/accounts' tests", () => {
		it("GET '/accounts' should return a status code of 200", async () => {
			const expectedStatusCode = 200;

			const res = await request(server).get('/accounts');

			expect(res.status).toEqual(expectedStatusCode);

		});

		it("GET '/accounts' should return a JSON object", async () => {
			const res = await request(server).get('/accounts');

			expect(res.type).toEqual('application/json');
		});
	});

	// GET account by id endpoint tests
	describe("GET '/accounts/:id' tests", () => {
		it("GET '/accounts/:id' should return a status code of 200", async () => {
			const expectedStatusCode = 200;

			const testId = 2;

			const res = await request(server).get(`/accounts/${testId}`);

			expect(res.status).toEqual(expectedStatusCode);

		});

		it("GET '/accounts/:id' should return a JSON object", async () => {
			const testId = 5;

			const res = await request(server).get(`/accounts/${testId}`);

			expect(res.type).toEqual('application/json');
		});
	});

	// Create account endpoint tests
	describe("POST '/accounts' tests", () => {
		it("POST '/accounts' should return a status code of 201", async () => {
			const expectedStatusCode = 201;

			const res = await request(server).post('/accounts').send({
				name: 'test-account-11',
				owner: 'test-owner-11',
				balance: 2599.99
			});

			expect(res.status).toEqual(expectedStatusCode);

		});

		it("POST '/accounts' should return a JSON object", async () => {
			const res = await request(server).post('/accounts').send({
				name: 'test-account-12',
				owner: 'test-owner-12',
				balance: 1799.99
			});

			expect(res.type).toEqual('application/json');
		});
	});

	// Update account endpoint tests
	describe("PUT '/accounts/:id' tests", () => {
		it("PUT '/accounts/:id' should return a status code of 200", async () => {
			const expectedStatusCode = 200;

			const testId = 8;

			const res = await request(server).put(`/accounts/${testId}`).send({
				name: 'updated-account-8',
				owner: 'owner-08',
				balance: 899.99
			});

			expect(res.status).toEqual(expectedStatusCode);

		});

		it("PUT '/accounts/:id' should return a JSON object", async () => {
			const testId = 5;

			const res = await request(server).put(`/accounts/${testId}`).send({
				name: 'updated-account-05',
				owner: 'owner-05',
				balance: 129.99
			});

			expect(res.type).toEqual('application/json');

		});
	});

	// Delete account endpoint tests
	describe("DELETE '/accounts/:id' tests", () => {
		it("DELETE '/accounts/:id' should return a status code of 200", async () => {
			const expectedStatusCode = 200;

			const testId = 4;

			const res = await request(server).delete(`/accounts/${testId}`);

			expect(res.status).toEqual(expectedStatusCode);

		});

		it("DELETE '/accounts/:id' should return a JSON object", async () => {
			const testId = 6;

			const res = await request(server).delete(`/accounts/${testId}`);

			expect(res.type).toEqual('application/json');

		});
	});
});