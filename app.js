const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Routes
const userRoutes = require("./routes/user");
const roleRoutes = require("./routes/role");
const clientRoutes = require("./routes/client");
const masterfileRoutes = require("./routes/masterfile");
const statRoutes = require("./routes/stats");
const choixRoutes = require('./routes/choix');
const rendezvousdgRoutes = require('./routes/rendezvousdg');
const confirmationRoutes = require('./routes/confirmation');
const confirmationdgaRoutes = require('./routes/confirmationdga');
const confirmationpcaRoutes = require('./routes/confirmationpca');
const statusRoutes = require('./routes/status');
const rendezvousdgaRoutes = require('./routes/rendezvousdga');
const rendezvouspcaRoutes = require('./routes/rendezvouspca');
const historiquedgRoutes = require("./routes/historiquedg");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
});

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // This will help in encoding
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/masterfile", masterfileRoutes);
app.use("/api/stat", statRoutes);
app.use("/api/choix", choixRoutes);
app.use("/api/rendezvousdg", rendezvousdgRoutes);
app.use("/api/confirmation", confirmationRoutes);
app.use("/api/confirmationdga", confirmationdgaRoutes);
app.use("/api/confirmationpca", confirmationpcaRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/rendezvousdga", rendezvousdgaRoutes);
app.use("/api/rendezvouspca", rendezvouspcaRoutes);
app.use("/api/historiquedg", historiquedgRoutes);

module.exports = app;
