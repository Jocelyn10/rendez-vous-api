const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const confirmationCtrl = require("../controllers/confirmationdga");

router.get("/", authMiddleware, confirmationCtrl.getAllConfirmationdga);
router.get("/:id", authMiddleware, confirmationCtrl.getOneConfirmationdga);
router.put("/:id", authMiddleware, confirmationCtrl.modifyConfirmationdga);
router.post("/", authMiddleware, confirmationCtrl.createConfirmationdga);
router.delete("/:id", authMiddleware, confirmationCtrl.deleteConfirmationdga);

module.exports = router;
