import express from "express";

import * as indexControllers from "../../controllers/index.controllers";

const router = express.Router();

router.get("/api", indexControllers.indexWelcome);
router.get("/api2", indexControllers.indexWelcome2);

export default router;
