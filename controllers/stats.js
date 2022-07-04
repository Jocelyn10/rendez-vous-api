const db = require("../models/index");
const { Op } = require("sequelize");
// const status = require("../models/rendezvousdg");
import status from '../models/rendezvousdg';
import Bouclé from  '../models/status';
import Reporté from '../models/status';

const rien = null;

// Endpoint to get all clients
exports.getAllStats = async (req, res, next) => {
  try {
    const clientStat = await db.User.count();
    const vesselStat = await db.rendezvousdg.count();
    const pcStat = await db.rendezvousdga.count();
    const agenceStat = await db.rendezvouspca.count();

    res.status(200).json({
      clientStat,
      vesselStat,
      pcStat,
      agenceStat,
    });
  } catch (e) {
    console.log("Error with datas stats : ", e.message);
  }
};
