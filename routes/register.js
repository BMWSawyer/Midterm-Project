/*
 * All routes for Register are defined here
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const { addUser } = require('../database');

module.exports = (db) => {
  router.get("/", (req, res) => {
    req.session.user_id = req.params.id;
    res.render("register");
  });

  router.post("/", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    addUser(user, db)
    .then(user => {
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.user_id = user.id;
      res.send("🤗");
    })
    .catch(error => res.send(error));
  });

  return router;
};
