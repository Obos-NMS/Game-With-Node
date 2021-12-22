const { User } = require("../models");
const sha256 = require("sha256")

class UserController {
  static login(req, res, next) {
    const { username, password } = req.body;
    const encrypt = sha256(password)
    const error = {
      name: `otherError`,
      statusCode: 400,
      message: `Invalid Username or Password, please check again!`,
    };

    User.findOne({ where: { username } })
      .then((result) => {
        if (result && encrypt === result.password) {
          res.status(200).json({ result });
        } else {
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  static changePassword(req, res, next) {
    const { id, password } = req.body;
    const encrypt = sha256(password)
    const payload = {
      id,
      password: encrypt
    }
    const error = {
      name: `otherError`,
      statusCode: 400,
      message: `Failed change password, please check again!`,
    };

    User.update(payload, { where: { id } })
      .then((result) => {
        if (result) {
          res.status(200).json({ result });
        } else {
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

<<<<<<< HEAD
  static readList(req, res, next) {
=======
  static listUser(req, res, next) {
>>>>>>> 13598bbc1eea0440eb17c8b90f19ecbbd24abe89
    const { id } = req.body;
    const error = {
      name: `otherError`,
      statusCode: 400,
      message: `Failed get data, please check again!`,
    };

    User.findAll({order: [['createdAt', 'ASC']]})
      .then((result) => {
        if (result) {
          const data = result.filter((obj) => obj.id !== id)
          res.status(200).json({ data });
        } else {
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }  
}

module.exports = UserController;
