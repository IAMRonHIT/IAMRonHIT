import React, { useState } from 'react';

const AuthorizationRequest = () => {
    const [serviceType, setServiceType] = useState('');
    const [procedureCode, setProcedureCode] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call to backend API code here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Authorization Request</h2>
            <label>Service Type:</label>
            <input type="text" value={serviceType} onChange={(e) => setServiceType(e.target.value)} required />

            <label>Procedure Code:</label>
            <input type="text" value={procedureCode} onChange={(e) => setProcedureCode(e.target.value)} required />

            <button type="submit">Submit Request</button>
        </form>
    );
};

export default AuthorizationRequest;