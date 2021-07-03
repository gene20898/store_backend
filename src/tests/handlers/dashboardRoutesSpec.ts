import supertest from 'supertest'
import app from '../../server'

const request = supertest(app);

describe('Test dashboard endpoints response', () => {
    it('gets top-five-products api endpoint', async () => {
        const response = await request.get('/dashboard/top-five-products');
        expect(response.status).toBe(200);
    });
    it('gets productFromCategory api endpoint', async () => {
        const response = await request.get('/dashboard/products/tool');
        expect(response.status).toBe(200);
    });
    it('gets current order api endpoint', async () => {
        const response = await request.get('/dashboard/orders/current/1');
        expect(response.status).toBe(200);
    });
    it('gets complete order api endpoint', async () => {
        const response = await request.get('/dashboard/orders/complete/1');
        expect(response.status).toBe(200);
    });    
});


