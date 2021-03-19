const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.DoctorCard.find(req.query)
        .sort()
        .then((dbModel) => {
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req.body)
        db.DoctorCard.create(req.body)
        .then((dbModel) => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err))
    }
};