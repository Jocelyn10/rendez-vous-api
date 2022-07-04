const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create Status
exports.createStatus = async (req, res, next) => {
const statusObject = JSON.parse(JSON.stringify(req.body));

delete statusObject.id;

db.Status.create({
    ...statusObject,
})
    .then((status) => {
    res.status(200).json(status.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single Status
exports.getOneStatus = async (req, res, next) => {
let status = await db.Status.findOne({
    where: { id: req.params.id },
});

if (status) {
    res.status(200).json(status);
  } else {
    res.status(400).json({ message: "Error on getting status" });
  }
};

// Endpoint to update status
exports.modifyStatus = async (req, res, next) => {
  const statusObject = JSON.parse(JSON.stringify(req.query));

  db.Status.update(
    { ...statusObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.Status.findOne({ where: { id: req.params.id } })
        .then((status) => {
          res.status(200).json(status);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all status
exports.getAllStatus = async (req, res, next) => {
  db.status.findAll()
    .then((status) => {
      res.status(200).json(status);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete status
exports.deleteStatus = async (req, res, next) => {
  db.Status.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Status deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};