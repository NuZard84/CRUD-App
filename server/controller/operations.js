const userDB = require("../model/UserData");

//create new user...
exports.create = (req, res) => {
  //validate req..
  const bodyparser = req.body;
  if (!bodyparser) {
    res.status(400).send({ message: "content can not be empty !" });
    return;
  }

  //new user...
  var user = new userDB({
    name: bodyparser.name,
    email: bodyparser.email,
    phoneNo: bodyparser.phonenumber,
    gender: bodyparser.gender,
  });

  user
    .save(user)
    .then((data) => res.redirect('/add-user'))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while creating user !",
      });
    });
};

//update user detail by user id...
exports.find = (req, res) => {
  if (req.query.id) {
    const ID = req.query.id;

    userDB
      .findById(ID)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: "Not found user with id " + ID,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({message: "there is some error to find user please cheack your ID"})
       });
    
  } else {
    userDB
      .find()
      .then((user) => res.send(user))
      .catch((err) => {
        res.status(500).send({
          message: err.message || "some error occured while finding user !",
        });
      });
  }
};
//retrive and return all users or single user..
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "date to update can not be empty !" });
  }

  const ID = req.params.id;
  userDB
    .findByIdAndUpdate(ID, req.body, {})
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot update user with ${ID}. Maybe user not not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error update user information !" });
    });
};

//delete user detail by user id..
exports.delete = (req, res) => {
  const ID = req.params.id;

  userDB
    .findByIdAndDelete(ID)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot delete user with ${ID}. maybe ID is wrong`,
        });
      } else {
        res.send({
          message: "User was delete successfully !",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "could not delete user with id" + ID });
    });
};
