const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const rendezvouspcaCtrl = require("../controllers/rendezvouspca");

router.get("/", authMiddleware, rendezvouspcaCtrl.getAllRendezvouspcas);
router.get("/:id", authMiddleware, rendezvouspcaCtrl.getOneRendezvouspca);
router.put("/:id", authMiddleware, rendezvouspcaCtrl.modifyRendezvouspca);
router.post("/", authMiddleware, rendezvouspcaCtrl.createRendezvouspca);
router.delete("/:id", authMiddleware, rendezvouspcaCtrl.deleteRendezvouspca);

module.exports = router;
