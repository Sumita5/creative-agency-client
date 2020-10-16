import React from 'react';
import { Link } from 'react-router-dom';
import headerBg from '../../../images/Frame.png';

const HeaderMain = () => {
    return (
        <section className="headerMain">
                <div style={{height:'auto'}} className="row d-flex align-items-center">
                    <div className="col-12 col-md-4 offset-md-1 text-left">
                        <h1 className='font-weight-bolder text-dark'>Let's Grow Your<br/> Brand To The<br/> Next Level</h1>
                        <p className="lead my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci cupiditate quos magnam ab corrupti impedit! Doloribus?</p>
                       

                        <button className="btn btn-dark btn-brand">Hire Us</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={headerBg} alt=""/>
                    </div>
                </div>
        </section>
    );
};

export default HeaderMain;