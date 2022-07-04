const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const statusCtrl = require("../controllers/status");

router.get("/", authMiddleware, statusCtrl.getAllStatus);
router.get("/:id", authMiddleware, statusCtrl.getOneStatus);
router.put("/:id", authMiddleware, statusCtrl.modifyStatus);
router.post("/", authMiddleware, statusCtrl.createStatus);
router.delete("/:id", authMiddleware, statusCtrl.deleteStatus);

module.exports = router;