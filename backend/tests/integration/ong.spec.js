const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Non-profit', () => {
    beforeEach(async() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('should be able to create a new non-profit in our database', async () => {
        const response = await request(app).post('/ongs').send({
            name: "TEST",
            email: "TEST@TEST.com",
            whatsapp: "4499999999",
            city: "umuarama",
            uf: "PR"
        });

     expect(response.body).toHaveProperty('id');
     expect(response.body.id).toHaveLength(8);
    });
});