import React from 'react';
import PatientInformation from './components/PatientInformation';
import AuthorizationRequest from './components/AuthorizationRequest';
import ClaimSubmission from './components/ClaimSubmission';
import AppealManagement from './components/AppealManagement';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <div>
            <h1>Utilization Management System</h1>
            <Dashboard />
            <PatientInformation />
            <AuthorizationRequest />
            <ClaimSubmission />
            <AppealManagement />
            {/* Other components can follow */}
        </div>
    );
}

export default App;