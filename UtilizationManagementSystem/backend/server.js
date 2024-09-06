const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Patient = require('./models/Patient'); // Import Patient model

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ums', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample route for getting patients
app.get('/api/patients', async (req, res) => {
    const patients = await Patient.find();
    res.send(patients);
});

// Sample route for submitting authorization requests
app.post('/api/authorizations', async (req, res) => {
    try {
        // Save authorization request to the database logic here
        res.send({ message: "Authorization request submitted." });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});