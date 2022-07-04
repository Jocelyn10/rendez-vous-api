const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const rendezvousdgaCtrl = require("../controllers/rendezvousdga");

router.get("/", authMiddleware, rendezvousdgaCtrl.getAllRendezvousdgas);
router.get("/:id", authMiddleware, rendezvousdgaCtrl.getOneRendezvousdga);
router.put("/:id", authMiddleware, rendezvousdgaCtrl.modifyRendezvousdga);
router.post("/", authMiddleware, rendezvousdgaCtrl.createRendezvousdga);
router.delete("/:id", authMiddleware, rendezvousdgaCtrl.deleteRendezvousdga);

module.exports = router;
