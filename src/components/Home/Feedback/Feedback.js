import React, { useState, useEffect } from 'react';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://salty-stream-58398.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section className="reviews my-5">
            <div className="container my-5">
                <h2 className="text-center font-weight-bold mt-5">Clients <span className="text-brand">Feedback</span></h2>
                <div className="row my-5">

                    {
                        reviews.map(review =>

                            <div key={review._id} className="col-12 col-sm-12 col-md-6 col-lg-4 border-1 p-2 my-5">
                                <div className="card-body feedback">
                                    <div className="p-0 d-flex">
                                        <img style={{ height: '50px', width: '50px' }} src={review.image} alt="" />
                                        <div className="ml-2">
                                            <p className="font-weight-bolder m-0">{review.name}</p>
                                            <h6 className="font-weight-bold m-0">{review.jobTitle}</h6>
                                        </div>
                                    </div>
                                    <p className='text-secondary text-justify mt-3'>{review.review}</p>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Feedback;