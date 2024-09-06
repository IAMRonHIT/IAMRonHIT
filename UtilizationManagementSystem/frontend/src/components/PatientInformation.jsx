import React, { useState } from 'react';

const PatientInformation = () => {
    const [patientName, setPatientName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [primaryInsurance, setPrimaryInsurance] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call API to save patient info
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Patient Information</h2>
            <label>Patient Name:</label>
            <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />

            <label>Date of Birth:</label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label>Primary Insurance:</label>
            <input type="text" value={primaryInsurance} onChange={(e) => setPrimaryInsurance(e.target.value)} required />

            <button type="submit">Save Patient Information</button>
        </form>
    );
}

export default PatientInformation;