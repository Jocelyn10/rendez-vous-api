const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create Choix
exports.createConfirmationdga = async (req, res, next) => {
const confirmationdgaObject = JSON.parse(JSON.stringify(req.body));

delete confirmationdgaObject.id;

db.Confirmationdga.create({
    ...confirmationdgaObject,
})
    .then((confirmationdga) => {
    res.status(200).json(confirmationdga.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single choix
exports.getOneConfirmationdga = async (req, res, next) => {
let confirmationdga = await db.Confirmationdga.findOne({
    where: { id: req.params.id },
});

if (confirmationdga) {
    res.status(200).json(confirmationdga);
  } else {
    res.status(400).json({ message: "Error on getting confirmationdga" });
  }
};

// Endpoint to update choix
exports.modifyConfirmationdga = async (req, res, next) => {
  const confirmationdgaObject = JSON.parse(JSON.stringify(req.query));

  db.Confirmationdga.update(
    { ...confirmationdgaObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.Confirmationdga.findOne({ where: { id: req.params.id } })
        .then((confirmationdga) => {
          res.status(200).json(confirmationdga);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all choix
exports.getAllConfirmationdga = async (req, res, next) => {
  db.confirmationdga.findAll()
    .then((confirmationdga) => {
      res.status(200).json(confirmationdga);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete choix
exports.deleteConfirmationdga = async (req, res, next) => {
  db.Confirmationdga.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Confirmationdga deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};