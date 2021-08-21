import { Router } from "express";
import { AppController } from "../controllers";
export const router = Router();

const appController = new AppController();

router.get("/express", appController.index);
router.post("/express", appController.store);
