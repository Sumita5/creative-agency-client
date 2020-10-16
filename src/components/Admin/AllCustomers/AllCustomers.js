import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const AllCustomers = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isUpdated]);

    const handleChange = (id, e) => {
        const status = e.target.value;
        const updatedOrder = { id, status };

        fetch(`https://salty-stream-58398.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setIsUpdated(true)
                    alert('Status Updated Successfully')
                }
            })

    }

    return (
        <table className="table table-borderless">
            <thead style={{ backgroundColor: '#dfe6e9', color: '#636e72' }}>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    allOrders.map((order) =>
                        <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.title}</td>
                            <td>{order.projectDetails}</td>
                            <td >
                                <select className={(order.status === "Done" && "btn text-success") ||
                                    (order.status === "Pending" && "btn text-danger") ||
                                    (order.status === "On Going" && "btn text-warning")}
                                    name="status" value={order.status}
                                    onChange={(e) => handleChange(order._id, e)} >
                                    <option className="dropdown-item" value="Done">Done</option>
                                    <option className="dropdown-item" value="Pending">Pending</option>
                                    <option className="dropdown-item" value="On Going">On Going</option>
                                </select>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllCustomers;