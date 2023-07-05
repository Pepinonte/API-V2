import { Router } from "express";

import * as deleteControllers from "../../controllers/user/delete.cotrollers";

const router = Router();

router.delete("/deleteUserById/:id", deleteControllers.deleteById);

export default router;
