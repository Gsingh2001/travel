import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TodoContext from '../context/TodoContext';
import { Link } from 'react-router-dom';

function CreateTask(props) {
    const { latestTask, recentTask } = useContext(TodoContext);

    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 bg-primary d-flex flex-column align-items-center justify-content-center h-100'>
                    <TaskForm />
                </div>
                <div className='col-lg-6 h-100  d-flex flex-column justify-content-center align-items-center'>
                    <div className='card  col-lg-8'>
                        <div className='card-header p-4 bg-dark text-white d-flex'>
                            <h4>New Task</h4>
                            <button className='btn btn-info ms-auto'>Edit</button>
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h4><u>{latestTask?.title}</u></h4>
                            <p>{latestTask?.description}</p>
                        </div>
                        <div className="card-footer d-flex bg-dark text-warning ">
                            <p>Created On: 23/03/23</p>
                            <p className='ms-auto'>Due On: {latestTask?.dueDate}</p>
                        </div>
                    </div><br />
                    <div className='card col-lg-8 '>
                        <div className='card-header bg-dark text-white d-flex'>
                            <h4>Recently Added</h4>
                            <button className='btn btn-info ms-auto'>Edit</button>
                        </div>
                        <div className="p-4 bg-dark ">

                            <p>
                                {recentTask?.map(task => (
                                    <div className='col-lg-12 d-flex p-2 border border-info ' key={task.id}>
                                        <div className='col-lg-6 text-white'>{task.title}</div>
                                        <div className='col-lg-6 text-end text-warning'>{task.dueDate}</div>
                                    </div>
                                ))}
                            </p>
                            <div className='col-lg-12 text-start'> <Link className="nav-link text-white" to="/task-list" >View All</Link></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;