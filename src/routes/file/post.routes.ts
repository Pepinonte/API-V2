import { Router } from "express";
import * as postControllers from "../../controllers/file/post.controllers";

const router = Router();

router.post("/createOne/file", postControllers.createOne);

export default router;