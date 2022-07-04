const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create rendez vous
exports.createRendezvouspca = async (req, res, next) => {
  const rendezvouspcaObject = JSON.parse(JSON.stringify(req.body));

  delete rendezvouspcaObject.id;

  db.rendezvouspca.create({
    ...rendezvouspcaObject,
  })
    .then((rendezvouspca) => {
      res.status(200).json(rendezvouspca.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single rendez vous
exports.getOneRendezvouspca = async (req, res, next) => {
  let rendezvouspca = await db.rendezvouspca.findOne({
    where: { id: req.params.id },
  });

  if (rendezvouspca) {
    res.status(200).json(rendezvouspca);
  } else {
    res.status(400).json({ message: "Error on getting rendez vous" });
  }
};

// Endpoint to update rendez vous
exports.modifyRendezvouspca = async ({ body, query, params }, res, next) => {
  const rendezvouspcaObject = JSON.parse(JSON.stringify(body));

  db.rendezvouspca.update(
    { ...rendezvouspcaObject },
    {
      where: { id: params.id },
    }
  )
    .then(async () => {
      await db.rendezvouspca.findOne({ where: { id: params.id } })
        .then((rendezvouspca) => {
          res.status(200).json(rendezvouspca);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all Rendez vous
exports.getAllRendezvouspcas = async (req, res, next) => {
  db.rendezvouspca.findAll()
    .then((rendezvouspcas) => {
      res.status(200).json(rendezvouspcas);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete rendez vous
exports.deleteRendezvouspca = async (req, res, next) => {
  db.rendezvouspca.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Rendez vous deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
