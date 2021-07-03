import express, { Request, Response } from "express";
import { DashboardQueries } from "../services/dashboard";

const dashboard = new DashboardQueries();

const topFiveProduct = async (_req: Request, res: Response) => {
  const products = await dashboard.topFiveProduct();
  res.send(products);
};

const productFromCategory = async (req: Request, res: Response) => {
  const products = await dashboard.productFromCategory(req.body.category);
  res.send(products);
};

const currentOrder = async (req: Request, res: Response) => {
  const order = await dashboard.currentOrder(req.body.user_id);
  res.send(order);
};

const completeOrder = async (req: Request, res: Response) => {
  const orders = await dashboard.completeOrder(req.body.user_id);
  res.send(orders);
};

const dashboardRoutes = (app: express.Application) => {
  app.get("/dashboard/top-five-products", topFiveProduct);
  app.get("/dashboard/products/:category", productFromCategory);
  app.get("/dashboard/orders/current/:user_id", currentOrder);
  app.get("/dashboard/orders/complete/:user_id", completeOrder);
};

export default dashboardRoutes;
