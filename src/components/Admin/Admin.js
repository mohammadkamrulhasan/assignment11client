import React from 'react';
import { useHistory, useParams } from 'react-router';
import AddService from '../Contact/AddService/AddService';
import Dashboard from '../Dashboard/Dashboard';

const Admin = () => {
    const { userType } = useParams();

    const history = useHistory();
    const onNavigateTravel = () => {
        history.push("/Admin");
    }
    return (
        <div>
            <Dashboard></Dashboard>
            {/* <AddService></AddService> */}
        </div>
    );
};

export default Admin;