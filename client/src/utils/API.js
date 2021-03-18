import axios from "axios";

export default {
    getAppointments: function() {
        return axios.get("api/appointments");
    },
    saveAppointment: function(apptData) {
        return axios.post("api/appointments", apptData);
    }
};