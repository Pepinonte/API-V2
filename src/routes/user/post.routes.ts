import { Router } from "express";

import * as postControllers from "../../controllers/user/post.controllers";

const router = Router();

router.post("/createOneUser", postControllers.createOne);

export default router;
