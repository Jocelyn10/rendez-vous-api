const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const rendezvousdgCtrl = require("../controllers/rendezvousdg");

// router.post("/auth/", rendezvousdgCtrl.getAuthUser);
router.get("/", authMiddleware, rendezvousdgCtrl.getAllRendezvousdgs);
router.get("/:id", authMiddleware, rendezvousdgCtrl.getOneRendezvousdg);
router.put("/:id", rendezvousdgCtrl.modifyRendezvousdg);
router.post("/", authMiddleware, rendezvousdgCtrl.createRendezvousdg);
router.delete("/:id", authMiddleware, rendezvousdgCtrl.deleteRendezvousdg);

module.exports = router;
