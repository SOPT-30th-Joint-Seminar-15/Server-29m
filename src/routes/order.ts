import { Router } from "express";

import orderController from "../controllers/order";

const router: Router = Router();

router.get("/:orderNum", orderController.getOrderInfo);

export default router;
