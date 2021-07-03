import express, {Request, Response} from 'express';
import { User, UserStore } from '../models/user';

const store = new UserStore;

const index = async (_req:Request, res:Response) => {
    const users = await store.index();
    res.json(users);
}

const show = async (req:Request, res:Response) => {
    const user = await store.show(req.body.id);
    res.json(user);
}

const create = async (req:Request, res:Response) => {
    try {
        const user: User = {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password_digest: req.body.password
        };

        const newUser = await store.create(user)
        res.json(newUser)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const userRoutes = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', create)
}

export default userRoutes