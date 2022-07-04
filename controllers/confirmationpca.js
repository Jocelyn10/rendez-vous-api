const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create Choix
exports.createConfirmationpca = async (req, res, next) => {
const confirmationpcaObject = JSON.parse(JSON.stringify(req.body));

delete confirmationpcaObject.id;

db.Confirmationpca.create({
    ...confirmationpcaObject,
})
    .then((confirmationpca) => {
    res.status(200).json(confirmationpca.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single choix
exports.getOneConfirmationpca = async (req, res, next) => {
let confirmationpca = await db.Confirmationpca.findOne({
    where: { id: req.params.id },
});

if (confirmationpca) {
    res.status(200).json(confirmationpca);
  } else {
    res.status(400).json({ message: "Error on getting confirmationpca" });
  }
};

// Endpoint to update 
exports.modifyConfirmationpca = async (req, res, next) => {
  const confirmationpcaObject = JSON.parse(JSON.stringify(req.query));

  db.Confirmationpca.update(
    { ...confirmationpcaObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.Confirmationpca.findOne({ where: { id: req.params.id } })
        .then((confirmationpca) => {
          res.status(200).json(confirmationpca);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all choix
exports.getAllConfirmationpca = async (req, res, next) => {
  db.confirmationpca.findAll()
    .then((confirmationpca) => {
      res.status(200).json(confirmationpca);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete choix
exports.deleteConfirmationpca = async (req, res, next) => {
  db.Confirmationpca.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Confirmation deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};