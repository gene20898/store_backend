import supertest from 'supertest'
import app from '../../server'

const request = supertest(app);

describe('Test products endpoints response', () => {
    it('gets index api endpoint', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });
    it('gets show api endpoint', async () => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
    });
    it('gets create api endpoint', async () => {
        const response = await request.post('/products').send({
        name: 'knife',
        price: 199,
        category: 'tool'});
        expect(response.status).toBe(200);
    });
});