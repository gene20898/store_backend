import { Order, OrderStore } from "../../models/orders";
import { Product, ProductStore } from "../../models/products";
import { User, UserStore } from "../../models/user";

const orderStore = new OrderStore;
const productStore = new ProductStore;
const userStore = new UserStore;

describe('Order Model', () => {
    it('should have an index method', () => {
        expect(orderStore.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(orderStore.show).toBeDefined();
      });
    
      it('should have a create method', () => {
        expect(orderStore.create).toBeDefined();
      });

      it('should have a delete method', () => {
        expect(orderStore.delete).toBeDefined();
      });

      it('should have a add product to order method', () => {
        expect(orderStore.addProduct).toBeDefined();
      });

      it('create method should add a order', async () => {
        await userStore.create({
            username: 'Steve007',
            firstName: 'Steve',
            lastName: 'Lee',
            password_digest: 'testuser'
          })
        const result = await orderStore.create({
          status: "incomplete",
          user_id: 1
        })
         expect(result).toEqual({
          id: 1,
          status: "incomplete",
          user_id: 1
        });
      });
    
      it('index method should return a list of order', async () => {
        const result = await orderStore.index();
        expect(result).toEqual([{
          id: 1,
          status: "incomplete",
          user_id: 1
        }]);
      });
    
      it('show method should return the correct order', async () => {
        const result = await orderStore.show("1");
        expect(result).toEqual({
          id: 1,
          status: "incomplete",
          user_id: 1
        });
      });

      it('should add product to order', async () => {
        await productStore.create({
          name: 'knife',
          price: 199,
          category: 'tool'
        });
        const result = await orderStore.addProduct({
          order_id: 1,
          product_id : 1,
          quantity: 20
        });
        expect(result).toEqual({
          id: 1,
          order_id: 1,
          product_id : 1,
          quantity: 20
        });
      });
});