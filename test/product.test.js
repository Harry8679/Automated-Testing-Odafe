const supertest = require('supertest');
const host = 'http://localhost:4500';
const request = supertest(host);

describe('Get All Products', () => {
    it('should get all products', async () => {
        const response = await request.get('/api/products');
        console.log(response);
        expect(response.statusCode).toBe(200);
        expect((await response).body).not.toBeNull();
        expect(response.body).toEqual(expect.arrayContaining(response.body));
    });
});
