const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    primaryInsurance: { type: String, required: true },
    // Other fields can be added as necessary
});

module.exports = mongoose.model('Patient', PatientSchema);