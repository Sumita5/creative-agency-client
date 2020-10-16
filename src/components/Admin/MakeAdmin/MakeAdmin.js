import React, {useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const currentform = useRef(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        currentform.current.reset()
        fetch('https://salty-stream-58398.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('admin added')
                }
            })
    }
    return (
        <div className="card row text-left border-0 rounded p-3">
                            <div className="col-md-6">
                                <form ref={currentform} onSubmit={handleSubmit(onSubmit)}>
                                    <p>Email</p>
                                    <input
                                        ref={register}
                                        type="email"
                                        name="email"
                                        placeholder="jon@gmail.com"
                                    />
                                    <button type="submit" className="btn btn-success mx-2">Submit</button>
                                </form>
                            </div>
                        </div>
        // <div>
        //     <section className="container-fluid">
        //         <div className="container">
        //             <div className="row py-3">
        //                 <div className="col-md-1">
        //                     <Link to="/">
        //                         <img height="60" src={logo} alt="" />
        //                     </Link>
        //                 </div>
        //                 <div className="col-md-2  offset-md-1">
        //                     <h5 className="font-weight-bold">Make Admin</h5>
        //                 </div>
        //                 <div className="col-md-1 offset-md-5">
        //                     <img
        //                         src={loggedInUser.photo}
        //                         style={{ height: '50px', width: '50px', borderRadius: '50%' }}
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div className="col-md-2 m-0">
        //                     <h6>{loggedInUser.name}</h6>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-md-2 pt-4 pl-5 fullHeight">
        //                
        //             </div>
        //             <div className="col-md-10 fullHeight p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
        //                 <div className="card row text-left border-0 rounded p-3">
        //                     <div className="col-md-6">
        //                         <form ref={currentform} onSubmit={handleSubmit(onSubmit)}>
        //                             <p>Email</p>
        //                             <input
        //                                 ref={register}
        //                                 type="email"
        //                                 name="email"
        //                                 placeholder="jon@gmail.com"
        //                             />
        //                             <button type="submit" className="btn btn-success mx-2">Submit</button>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        // </div>
    );
};

export default MakeAdmin;