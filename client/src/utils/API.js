import axios from "axios";

export default {
    getAppointments: function() {
        return axios.get("api/appointments");
    },
    saveAppointment: function(apptData) {
        return axios.post("api/appointments", apptData);
    },
    deleteAppt: function(id) {
        return axios.delete("api/appointments/" + id)
    },
    updateAppt: function(id) {
        return axios.put("api/appointments/" + id)
    },
    getAppt: function(id) {
        return axios.get("api/appointments/" + id)
    }
};