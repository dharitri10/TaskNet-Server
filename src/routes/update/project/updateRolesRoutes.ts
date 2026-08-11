import { Router } from "express";
import { verifyJWTForProfile } from "../../../middleware/verifyJWTForProfile.js";
import updateMemberRole from "../../../controller/update/project/updateRoles.controller.js";

const router = Router();

router.post("/update-role", verifyJWTForProfile, updateMemberRole);

export default router;