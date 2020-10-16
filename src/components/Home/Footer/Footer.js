import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
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

    return (
        <section id="contact" className="footer mt-5 py-5">
            <div className="container mt-5">
                <div style={{height:'auto'}} className="row d-flex">
                    <div className="col-12 col-md-5  text-left">
                        <h2 className='font-weight-bold text-dark'>Let us handle your <br/>project, professionaly.</h2>
                        <p className="my-4">With well written codes, we build amazing apps for all platforms, mobile and apps in general.</p>
                    </div>
                    <div className="col-12 col-md-6 offset-md-1">
                    <form action="">
                        <div className="form-group  mb-4">
                            <input style={{ height: '60px' }} type="text" className="form-control" placeholder="Your Email Address" />
                        </div>
                        <div className="form-group  mb-4">
                            <input style={{ height: '60px' }} type="text" className="form-control" placeholder="Your name / company's name" />
                        </div>
                        <div className="form-group  mb-4">
                            <textarea name="" className="form-control" id=""  rows="7" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-group text-left">
                            <button type="button" className="btn btn-dark btn-brand"> Send </button>
                        </div>
                    </form>
                    </div>
                </div>
               
                <div className="row mt-4 text-center">
                    <p className="col-12 lead">copyright Orange Labs {(new Date()).getFullYear()}</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;