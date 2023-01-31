const axios = require("axios");
const config = require('../../config');

exports.dashboard = (req, res) => {
  //make a get request to /api/user
  axios
    .get(`${config._LINK}/api/user`)
    .then(function (bunch) {
      res.render("dashboard", { users: bunch.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  //make a get request to update /api/user
  axios
    .get(`${config._LINK}/api/user`, { params: { id: req.query.id } })
    .then((bunch) => {
      res.render("update_user", { user: bunch.data });
    })
    .catch((err) => res.send(err));
};
