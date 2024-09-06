const mongoose = require('mongoose');

const AuthorizationSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    procedureCode: { type: String, required: true },
    // Other fields as defined necessary
});

module.exports = mongoose.model('Authorization', AuthorizationSchema);