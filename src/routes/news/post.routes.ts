import { Router } from "express";
import * as postControllers from "../../controllers/news/post.controllers";

const router = Router();

router.post("/createOne/news", postControllers.createOne);

export default router;
