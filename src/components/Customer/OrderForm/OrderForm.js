import React, { useRef, useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderForm = ({ id }) => {

    const { register, handleSubmit } = useForm();
    const currentform = useRef(null);
    const [selectedService, setSelectedService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        currentform.current.reset()
        const formData = new FormData()
        formData.append('file', data.picture[0]);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('title', data.title);
        formData.append('projectDetails', data.projectDetails);
        formData.append('price', data.price);
        formData.append('serviceId', id);

        fetch('https://salty-stream-58398.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('Order placed successfully')
                }
            })
    }
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/getServiceById?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setSelectedService(data);
            })
    }, [id])
    return (
        <div className=" row text-left p-3">
            <div className="col-md-6 customer-form">
                <form ref={currentform} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input
                            required
                            ref={register}
                            type="text"
                            defaultValue={loggedInUser.name}
                            name="name"
                            placeholder="Your name / company's name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            type="email"
                            ref={register}
                            defaultValue={loggedInUser.email}
                            name="email"
                            placeholder="Your email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            type="text"
                            ref={register}
                            defaultValue={selectedService.title}
                            name="title"
                            placeholder="Graphic Design"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            required
                            type="text"
                            ref={register}
                            row="5"
                            col="30"
                            name="projectDetails"
                            placeholder="Project Details"
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <input
                                required
                                type="text"
                                ref={register}
                                name="price"
                                placeholder="Price" />
                        </div>
                        <div className="offset-3 col-5 mt-0">
                            <div style={{ backgroundColor: "#55efc4", minWidth:"35px" }} className="d-flex btn btn-outline-success">
                                <FontAwesomeIcon icon={faCloudUploadAlt} />
                                <label htmlFor="photo">Upload Image</label>
                                <input
                                    type="file"
                                    name="picture"
                                    ref={register}
                                    id="photo"
                                    placeholder="Upload project file"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark btn-brand">Send</button>
                </form>
            </div>

        </div>
    );
};

export default OrderForm;