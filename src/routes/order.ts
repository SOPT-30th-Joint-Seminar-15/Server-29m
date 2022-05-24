import { Router } from "express";

import orderController from "../controllers/order";

const router: Router = Router();

router.get("/:order", orderController.getOrderInfo);

export default router;
