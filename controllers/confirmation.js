const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create Choix
exports.createConfirmation = async (req, res, next) => {
const confirmationObject = JSON.parse(JSON.stringify(req.body));

delete confirmationObject.id;

db.Confirmation.create({
    ...confirmationObject,
})
    .then((confirmation) => {
    res.status(200).json(confirmation.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single choix
exports.getOneConfirmation = async (req, res, next) => {
let confirmation = await db.Confirmation.findOne({
    where: { id: req.params.id },
});

if (confirmation) {
    res.status(200).json(confirmation);
  } else {
    res.status(400).json({ message: "Error on getting confirmation" });
  }
};

// Endpoint to update choix
exports.modifyConfirmation = async (req, res, next) => {
  const confirmationObject = JSON.parse(JSON.stringify(req.query));

  db.Confirmation.update(
    { ...confirmationObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.Confirmation.findOne({ where: { id: req.params.id } })
        .then((confirmation) => {
          res.status(200).json(confirmation);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all choix
exports.getAllConfirmation = async (req, res, next) => {
  db.confirmation.findAll()
    .then((confirmation) => {
      res.status(200).json(confirmation);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete choix
exports.deleteConfirmation = async (req, res, next) => {
  db.Confirmation.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Confirmation deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};