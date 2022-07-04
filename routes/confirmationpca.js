const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const confirmationCtrl = require("../controllers/confirmationpca");

router.get("/", authMiddleware, confirmationCtrl.getAllConfirmationpca);
router.get("/:id", authMiddleware, confirmationCtrl.getOneConfirmationpca);
router.put("/:id", authMiddleware, confirmationCtrl.modifyConfirmationpca);
router.post("/", authMiddleware, confirmationCtrl.createConfirmationpca);
router.delete("/:id", authMiddleware, confirmationCtrl.deleteConfirmationpca);

module.exports = router;
