import React from 'react';
import slack from '../../../images/slack.png';
import google from '../../../images/google.png';
import uber from '../../../images/uber.png';
import netflix from '../../../images/netflix.png';
import airbnb from '../../../images/airbnb.png';

const Clients = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light my-5">
                
                    <img className="mx-auto" height="40" src={slack} alt="" />
                
                
                    <img className="mx-auto" height="45" src={google} alt="" />
                
                
                    <img className="mx-auto" height="55" src={uber} alt="" />
                
                
                    <img className="mx-auto" height="65" src={netflix} alt="" />
                
                
                    <img className="mx-auto" height="52" src={airbnb} alt="" />
                
            </nav>
        </div>
    );
};

export default Clients;