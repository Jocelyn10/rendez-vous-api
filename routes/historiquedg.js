const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const historiquedgCtrl = require("../controllers/historiquedg");

router.get("/", authMiddleware, historiquedgCtrl.getAllHistoriquedgs);
router.get("/:id", authMiddleware, historiquedgCtrl.getOneHistoriquedg);
router.put("/:id", authMiddleware, historiquedgCtrl.modifyHistoriquedg);
router.post("/", authMiddleware, historiquedgCtrl.createHistoriquedg);
router.delete("/:id", authMiddleware, historiquedgCtrl.deleteHistoriquedg);

module.exports = router;
