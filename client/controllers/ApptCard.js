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
    },
    findById: function(req, res) {
        db.DoctorCard.findById(req.params.id)
        .then((dbModel) => {
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.DoctorCard.findOneAndUpdate({ _id: req.params.id },
            { 
                $push: {
                    task: req.body
                } 
            })
        .then((dbModel) => {
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.DoctorCard.findById({ _id: req.params.id })
        .then((dbModel) => {
            dbModel.remove()
        })
        .then((dbModel) => {
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
};