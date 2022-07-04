const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create Historique
exports.createHistoriquedg = async (req, res, next) => {
  const historiquedgObject = JSON.parse(JSON.stringify(req.body));

  delete historiquedgObject.id;

  db.historiquedg.create({
    ...historiquedgObject,
  })
    .then((historiquedg) => {
      res.status(200).json(historiquedg.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single Historique
exports.getOneHistoriquedg = async (req, res, next) => {
  let historiquedg = await db.historiquedg.findOne({
    where: { id: req.params.id },
  });

  if (historiquedg) {
    res.status(200).json(historiquedg);
  } else {
    res.status(400).json({ message: "Error on getting historic" });
  }
};

// Endpoint to update historique
exports.modifyHistoriquedg = async (req, res, next) => {
  const historiquedgObject = JSON.parse(JSON.stringify(req.query));

  db.historiquedg.update(
    { ...historiquedgObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.historiquedg.findOne({ where: { id: req.params.id } })
        .then((historiquedg) => {
          res.status(200).json(historiquedg);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all Historics
exports.getAllHistoriquedgs = async (req, res, next) => {
  db.historiquedg.findAll()
    .then((historiquedgs) => {
      res.status(200).json(historiquedgs);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete Historic
exports.deleteHistoriquedg = async (req, res, next) => {
  db.historiquedg.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Historic deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
