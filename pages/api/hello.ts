// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

let orders: any[] = [];

orders = [
  ...new Array(2).keys()
].map((x) => ({
  id: x,
  name: `ABC ${x+1}`,
  barraca: ["Japones", "Pastel", "Burguer"][x%3]
}));

let newOrders: any[] = [];

let nextId = 1000;
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { newOrder } = req.query;
    if (typeof newOrder !== "string") {
      res.status(500);
      return ;
    }
    if (newOrder === "all") { 
      res.status(200).json([...newOrders, ...orders]);
    } else if (+newOrder) {
      res.status(200).json(newOrders);
    } else {
      res.status(200).json(orders);
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    if (typeof id !== "string") {
      res.status(500);
      return ;
    }
    orders = orders.filter(order => order.id !== +id);
    res.status(200).json({});
  } else if (req.method === "POST") {
    const { name, barraca } = JSON.parse(req.body);
    newOrders.push(
      { id: ++nextId, name, barraca }
    );
    res.status(200).json({});
  } else if (req.method === "PUT") {
    const { id } = req.query;
    if (typeof id !== "string") {
      res.status(500).json({});
      return ;
    }
    const order = newOrders.find(ord => ord.id === +id);
    if (!order) {
      res.status(500).json({});
      return;
    }
    newOrders = newOrders.filter(ord => ord.id !== order.id);
    orders = [
      order,
      ...orders
    ];
    res.status(200).json({});
  }
}
