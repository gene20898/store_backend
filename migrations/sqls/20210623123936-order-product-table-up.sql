CREATE TABLE order_product (
    id SERIAL PRIMARY KEY,
    order_id bigint REFERENCES orders(id),
    prodict_id bigint REFERENCES products(id),
    quantity integer NOT NULL
);