const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create rendez vous
exports.createRendezvousdg = async (req, res, next) => {
  const rendezvousdgObject = JSON.parse(JSON.stringify(req.body));

  delete rendezvousdgObject.id;

  db.rendezvousdg.create({
    ...rendezvousdgObject,
  })
    .then((rendezvousdg) => {
      res.status(200).json(rendezvousdg.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single rendez vous
exports.getOneRendezvousdg = async (req, res, next) => {
  let rendezvousdg = await db.rendezvousdg.findOne({
    where: { id: req.params.id },
  });

  if (rendezvousdg) {
    res.status(200).json(rendezvousdg);
  } else {
    res.status(400).json({ message: "Error on getting rendez vous" });
  }
};

// Endpoint to update rendez vous
exports.modifyRendezvousdg = async ({ body, query, params }, res, next) => {
  const rendezvousdgObject = JSON.parse(JSON.stringify(body));

  db.rendezvousdg.update(
    { ...rendezvousdgObject },
    {
      where: { id: params.id },
    }
  )
    .then(async () => {
      await db.rendezvousdg.findOne({ where: { id: params.id } })
        .then((rendezvousdg) => {
          res.status(200).json(rendezvousdg);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all Rendez vous
exports.getAllRendezvousdgs = async (req, res, next) => {
  db.rendezvousdg.findAll()
    .then((rendezvousdgs) => {
      res.status(200).json(rendezvousdgs);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete rendez vous
exports.deleteRendezvousdg = async (req, res, next) => {
  db.rendezvousdg.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Rendez vous deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
