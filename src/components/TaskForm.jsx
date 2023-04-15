import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';


function TaskForm(props) {
    const [formData, setFormData] = useState();
    const { message, setMessage, createTask, user } = useContext(TodoContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userId: user?.id

        }))
    }

    useEffect(() => {
        setMessage("")
    }, [])

    const onCreateTask = (e) => {
        e.preventDefault();
        createTask(formData);
    }

    const date = new Date();
    const showDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();


    return (
        <div className='p-3 w-75'>
            <h4 className='text-white'>Create Task</h4>
            <div className='card bg-white'>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className='form-label'>Title</label>
                            <input className='form-control' type="text" name='title' onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Description</label>
                            <textarea className='form-control' rows="6" name='description' onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Due Date</label>
                            <input className='form-control' type="datetime-local" name='dueDate' onChange={handleChange} />
                        </div>

                        <p>{message}</p>

                        <div className="mb-3">
                            <label className='form-label'> Current Time</label>
                            <div className='d-flex'>
                            <p className='form-control'  name='current-date' onChange={handleChange} >{showDate}</p>
                            </div>
                        </div>

                        <button className='btn btn-primary' onClick={onCreateTask} >Create Task</button>


                        
                    </form>
                </div>
            </div>
        </div>
    );
}
export default TaskForm;