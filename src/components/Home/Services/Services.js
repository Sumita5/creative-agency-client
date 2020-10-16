import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
    
    const location = useLocation();
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
}, [location,])
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <section id="services" className="services my-5">
            <div className="container my-5">
                <h2 className="text-center font-weight-bold mb-5">Provide awesome <span className="text-brand">services</span></h2>
                <div className="card-deck mt-5">

                    {
                        services.map(service =>

                            <div key={service._id} className="card border-0 px-2 py-4">
                                <a style={{ textDecoration: "none" }} href={"/placeOrder/"+service._id}>
                                <div className="card-header">
                                    <img style={{ height: '100px', width: '100px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                                </div>
                                
                                    <div className="card-body">
                                        <h5 className="text-dark font-weight-bold">{service.title}</h5>
                                        <p className='text-secondary mt-3'>{service.description}</p>
                                    </div>
                                </a>
                            </div>

                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;