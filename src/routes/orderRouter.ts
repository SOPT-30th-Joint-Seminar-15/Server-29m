import { Router } from "express";
import orderController from "../controllers/orderController";

const router: Router = Router();

router.get("/:order", orderController.getOrderedInfo);

export default router;
