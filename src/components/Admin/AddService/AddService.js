import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { useState } from 'react';

const AddService = () => {


    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', data.picture[0]);
        formData.append('title', data.title);
        formData.append('description', data.description);


        fetch('https://salty-stream-58398.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Service added successfully')
                }
            })
    }


    return (<div className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card px-2 py-2 mb-2">
                <div className="form-group row text-left">
                    <div className="col-md-6">
                        <div>
                            <label htmlFor="title"><b>Service Title</b></label>
                            <input ref={register} type="text" className="form-control" id="title" name="title" placeholder="Enter title" />
                        </div>
                        <div>
                            <label htmlFor="description"><b>Description</b></label>
                            <input ref={register} type="text" className="form-control" id="description" name="description" placeholder="Description" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p><b>Icon</b></p>
                        <div style={{ backgroundColor: "#55efc4", minWidth:"40px" }} className="d-inline-block btn btn-outline-success">
                            <FontAwesomeIcon icon={faCloudUploadAlt} />
                            <label htmlFor="photo">Upload Image</label>
                            <input ref={register} type="file" name="picture" className="form-control" id="photo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group text-right">
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
    </div>

    );
};

export default AddService;