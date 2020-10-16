import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import AddService from '../AddService/AddService';
import AllCustomers from '../AllCustomers/AllCustomers';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import logo from '../../../images/logo.png';
import { faListAlt, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleSignOut } from '../../Login/Login/loginManager';

const AdminDashboard = () => {
    let history = useHistory();
    const [selectedMenu, setSelectedMenu] = useState('FULL-LIST');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const signOut = () => {
        handleSignOut()
        .then(res => {
            setLoggedInUser(res);
            sessionStorage.clear();
            history.push('/home')
        })
    }
    return (
        <div className="dashboard container-fluid">
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <Link to="/">
                        <img src={logo} className="w-50 m-3" alt="img" />
                    </Link>
                </div>
                <div className="col-6 col-md-6">
                    {selectedMenu === 'FULL-LIST' && <h3 className="p-3">Service list</h3>}
                    {selectedMenu === 'ADD-SERVICE' && <h3 className="p-3">Add Service</h3>}
                    {selectedMenu === 'MAKE-ADMIN' && <h3 className="p-3">Make Admin</h3>}
                </div>
                <div className="col-6 col-md-1">
                    <img
                        src={loggedInUser.photo}
                        style={{ height: '50px', width: '50px', borderRadius: '50%' }}
                        alt=""
                    />
                </div>
                <div className="col-6 col-md-2 font-weight-bold">{loggedInUser.name}</div>
            </div>
            <main>
                <div className="row">
                    <div className="sidebar col-12 col-sm-12 col-md-2">
                        <ul className="list-unstyled">
                            <li className={selectedMenu === 'FULL-LIST' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('FULL-LIST')}>
                                <FontAwesomeIcon icon={faListAlt} /><span> Service list</span>
                            </li>
                            <li className={selectedMenu === 'ADD-SERVICE' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('ADD-SERVICE')} >
                                <FontAwesomeIcon icon={faPlus} /> <span> Add Service</span>
                            </li>
                            <li className={selectedMenu === 'MAKE-ADMIN' ? 'm-3 active' : 'm-3'} onClick={() => setSelectedMenu('MAKE-ADMIN')} >
                                <FontAwesomeIcon icon={faUserPlus} /> <span> Make Admin</span>
                            </li>
                            <li>
                            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Logout</span></Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 dashboard-content">
                        {selectedMenu === 'FULL-LIST' && <AllCustomers />}
                        {selectedMenu === 'ADD-SERVICE' && <AddService />}
                        {selectedMenu === 'MAKE-ADMIN' && <MakeAdmin />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;