import Client from "../database";

export type Product = {
    id?: number,
    name: string,
    price: number,
    category: string
};

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM products'

            const result = await conn.query(sql);
            conn.release();

            return result.rows;
        } catch (error) {
            throw new error(`Could not get products. Error: ${error}`);
        }
    }

    async show(id: string): Promise<Product> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM products WHERE id=($1)';

            const result = await conn.query(sql,[id]);
            conn.release();

            return result.rows[0];
        } catch (error) {
            throw new error(`Could not find product ${id}. Error: ${error}`);
        }
    }

    async create(p: Product): Promise<Product> {
        try {
            const conn = await Client.connect()
            const sql = 'INSERT INTO products(name, price, category) VALUES ($1, $2, $3) RETURNING *';
            
            const result = await conn.query(sql,[p.name, p.price, p.category]);
            conn.release();
                        
            return result.rows[0];
        } catch (error) {
            throw new error(`Could not add new product ${p.name}. Error: ${error}`);
        }
    }

    async delete(id: string): Promise<Product> {
        try {
            const conn = await Client.connect()
            const sql = 'DELETE FROM products WHERE id=($1)';
            
            const result = await conn.query(sql,[id]);
            conn.release();
            
            return result.rows[0];
        } catch (error) {
            throw new error(`Could not delete product ${id}. Error: ${error}`);
        }
    }
}

