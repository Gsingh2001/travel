import React, { useContext } from "react";
import {useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";


function Profile(props) {
    const { user, setUser } = useContext(TodoContext);
    const navigate = useNavigate();
    
    return (
        <div className='container'><br /> <br /> <br /><br />
            <div className='container d-flex bg-primary p-4'>
                <div className='col-lg-5 ms-5 ps-5'><img src="Assets/Ellipse-1.png" alt="profile"/></div>
                <div className='col-lg-5 text-white'><br /><br /><br />
                    <div className='fs-4 '>{user?.username}</div>
                    <div className='fs-4'>07/07/2001</div>
                    <div className='fs-4'>Female</div>
                    <div className='fs-4'>+91-8054004124</div>
                    <div className='fs-4'>Web Developer</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;