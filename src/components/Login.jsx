import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';

function Login(props) {

    const { message, loginUser, setMessage}= useContext(TodoContext);
    const [formData, setFormData]= useState(null);
    

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
       loginUser(formData);
    }

    useEffect(()=>{
        setMessage("");
    }, [])

    return (
        <form>
            <p className='fs-2'>Login</p>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="text" name='email' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange}/>
            </div>
            <p>{message}</p>
            <button className='btn btn-primary' onClick={onSubmit}>Login</button><br /> <br />
            <p>Forgot Username/Password ?  <br /> <a href='/Forgot'>Click here</a> to reset</p>
        </form>
    );
}

export default Login;