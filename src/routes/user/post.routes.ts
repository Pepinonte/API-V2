import { Router } from "express";

import * as postControllers from "../../controllers/user/post.controllers";

const router = Router();

router.post("/signup", postControllers.signup);
router.post("/login", postControllers.login);

export default router;
