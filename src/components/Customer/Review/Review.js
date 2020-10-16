import React, { useRef, useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Review = () => {

    const { register, handleSubmit } = useForm();
    const currentform = useRef(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        currentform.current.reset()
        data.image = loggedInUser.photo

        fetch('https://salty-stream-58398.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review added successfully.');
                }
            })
    }
    return (
        <div className="col-md-6 customer-form">
            <form className="p-5" ref={currentform} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} defaultValue={loggedInUser.name} name="name" placeholder="Your Name" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="jobTitle" placeholder="Company's name, Designation" className="form-control" />
                </div>
                <div className="form-group">
                    <textarea type="text" ref={register({ required: true })} name="review" placeholder="Description" col="10" row="4" className="form-control" />
                </div>
                <div className="form-group text-left">
                    <button type="submit" className="btn btn-dark btn-brand">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default Review;