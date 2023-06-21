import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";
import Hero from "./Hero";


function Profile(props) {
    const { user, setUser,formData } = useContext(TodoContext);
    

    return (
        <div>
            <Hero />
            <div className='container'><br /> <br /> <br /><br />
                <div className='container d-flex  p-4'>
                    <div className='col-lg-5 ms-5 ps-5'><img src="Assets/img/team-1.jpg" style={{height:"300px"}} alt="profile" /></div>
                    <div className='col-lg-5 '><br /><br /><br />
                        <div className='fs-4'>{user?.username}</div>
                        <div className='fs-4'>{formData?.DateofBirth}</div>
                        <div className='fs-4'>{formData?.Gender}</div>
                        <div className='fs-4'>{formData?.Contact}</div>
                        <div className='fs-4'>{formData?.Designation}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;