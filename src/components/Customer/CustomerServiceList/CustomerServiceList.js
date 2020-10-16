import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import ServiceShortList from '../ServiceShortList/ServiceShortList';

const CustomerServiceList = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(orders)
                setOrders(data)
            }
            );
    }, [])
    return (
        <div className="row">
            {
                orders.length > 0 ? orders.map(order => <ServiceShortList key={order._id} order={order} />)
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No orders found. Order now!</h4>
                    </div>
            }
        </div>
    );
};

export default CustomerServiceList;