import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import CustomerDashboard from '../../Customer/CustomerDashboard/CustomerDashboard';
import AdminDashboard from '../../Admin/AdminDashboard/AdminDashboard';

const Dashboard = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    
    return (
        <section>
            {
                isAdmin ? <AdminDashboard /> : <CustomerDashboard />
            }
        </section>
    );
};

export default Dashboard;