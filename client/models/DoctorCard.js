const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    task: [{
        date: {
            month: {
                type: Number
            },
            day: {
                type: Number
            },
            year: {
                type: Number
            }
        },
        time: {
            start: {
                type: Number,
                required: true
            }, 
            end: {
                type: Number,
                required: true
            }
        }
    // create unique id
    }]
});

const DoctorCard = mongoose.model("DoctorCard", doctorSchema);

module.exports = DoctorCard;