const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const confirmationCtrl = require("../controllers/confirmation");

router.get("/", authMiddleware, confirmationCtrl.getAllConfirmation);
router.get("/:id", authMiddleware, confirmationCtrl.getOneConfirmation);
router.put("/:id", authMiddleware, confirmationCtrl.modifyConfirmation);
router.post("/", authMiddleware, confirmationCtrl.createConfirmation);
router.delete("/:id", authMiddleware, confirmationCtrl.deleteConfirmation);

module.exports = router;
