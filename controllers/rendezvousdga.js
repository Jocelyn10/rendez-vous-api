const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create rendez vous
exports.createRendezvousdga = async (req, res, next) => {
  const rendezvousdgaObject = JSON.parse(JSON.stringify(req.body));

  delete rendezvousdgaObject.id;

  db.rendezvousdga.create({
    ...rendezvousdgaObject,
  })
    .then((rendezvousdga) => {
      res.status(200).json(rendezvousdga.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single rendez vous
exports.getOneRendezvousdga = async (req, res, next) => {
  let rendezvousdga = await db.rendezvousdga.findOne({
    where: { id: req.params.id },
  });

  if (rendezvousdga) {
    res.status(200).json(rendezvousdga);
  } else {
    res.status(400).json({ message: "Error on getting rendez vous" });
  }
};

// Endpoint to update rendez vous
exports.modifyRendezvousdga = async ({ body, query, params }, res, next) => {
  const rendezvousdgaObject = JSON.parse(JSON.stringify(body));

  db.rendezvousdga.update(
    { ...rendezvousdgaObject },
    {
      where: { id: params.id },
    }
  )
    .then(async () => {
      await db.rendezvousdga.findOne({ where: { id: params.id } })
        .then((rendezvousdga) => {
          res.status(200).json(rendezvousdga);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all Rendez vous
exports.getAllRendezvousdgas = async (req, res, next) => {
  db.rendezvousdga.findAll()
    .then((rendezvousdgas) => {
      res.status(200).json(rendezvousdgas);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete rendez vous
exports.deleteRendezvousdga = async (req, res, next) => {
  db.rendezvousdga.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Appointement deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
