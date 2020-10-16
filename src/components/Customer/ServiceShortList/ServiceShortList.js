import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ServiceShortList = ({ order }) => {
    const [serviceImage, setServiceImage] = useState([]);
    const [serviceDescription, setServiceDescription] = useState([]);
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/getServiceById?id=' + order.serviceId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setServiceDescription(data.description);
                setServiceImage(data.image);
            })
    }, [order])
    return (       
            <div style={{borderRadius: "10px"}} className="col-md-5 card border-0 p-3 m-3">
                <div className="card-header bg-white border-0 p-0 d-flex  justify-content-between">
                    <div>
                        <img style={{ height: '100px', width: '100px' }} src={`data:image/png;base64,${serviceImage.img}`} alt="" />
                    </div>
                    <div style={{ height: '50px' }} className="my-2">
                        {order.status === 'Pending' && <button className="btn btn-danger">{order.status}</button>}
                        {order.status === 'On Going' && <button className="btn btn-warning">{order.status}</button>}
                        {order.status === 'Done' && <button className="btn btn-success">{order.status}</button>}
                    </div>
                </div>
                <div className="card-body text-justify">
                    <h5 className="text-dark font-weight-bold">{order.title}</h5>
                    <p className='text-secondary mt-3'>{serviceDescription}</p>
                </div>
            </div>
    );
};

export default ServiceShortList;