import React, { useState, useEffect, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TaskList(props) {
    const { allTasks, setAllTasks } = useContext(TodoContext);


    return (
        <div className=' container '>
            <br /><br />
            <div className='bg-primary container '><br />
                <div className='d-flex '>
                    <div className='text-white col-lg-6 fs-4'>My Task List</div>
                    <div className='col-lg-6 text-end pe-5'> <button className='btn btn-primary ' >Create Task</button></div>
                </div><br /><br />

                <table className='text-white table table-bordered border-info'>
                    <thead>
                        <tr>
                            <th className='col-lg-1 text-center'>Sr. No.</th>
                            <th className='col-lg-2 text-center'>Title</th>
                            <th className='col-lg-4 text-center'>Description</th>
                            <th className='col-lg-1 text-center'>Notify</th>
                            <th className='col-lg-1 text-center'>Actions</th>
                        </tr>
                    </thead>
                </table>

                <div className='text-white'>
                    {allTasks?.map(task => (
                        <table className='text-white table table-bordered border-info'>
                            <tbody>
                            <tr>
                                <th className='col-lg-1 text-center' key={task.id}>{task.id}</th>
                                <th className='col-lg-2 text-center' key={task.id}>{task.title}</th>
                                <th className='col-lg-4 text-center' key={task.id}>{task.description}</th>
                                <th className='col-lg-1 text-center' key={task.id}>Notice</th>
                                <th className='col-lg-1 text-center' key={task.id}>notice2</th>
                            </tr>
                            </tbody>
                        </table>
                    ))}

                </div>


            </div>
        </div >
    );
}

export default TaskList;