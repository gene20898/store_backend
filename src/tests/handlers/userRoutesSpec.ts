import supertest from 'supertest'
import app from '../../server'
import { User } from '../../models/user'; 
const request = supertest(app);

describe('Test user endpoints response', () => {
    it('gets index api endpoint', async () => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
    });
    it('gets show api endpoint', async () => {
        const response = await request.get('/users/1');
        expect(response.status).toBe(200);
    });
    it('gets create api endpoint', async () => {
        const response = await request.post('/users').send({
        username: 'Steve007',
        firstName: 'Steve',
        lastName: 'Lee',
        password: 'testuser'
        });
        expect(response.status).toBe(200);
    });
});