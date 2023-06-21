import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import Hero from '../components/Hero';

function UpdateProfile(props) {
  const init = {
    title: "",
    description: "",
    dueDate: "",
  };
  const { isUpdate, data, changeUpdate } = props;
  const [formData, setFormData] = useState(init);
  const { createTask, user, updateTask } = useContext(TodoContext);

  useEffect(()=>{   
    if(isUpdate){
        setFormData(data);
    }
  }, [data, isUpdate])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      userId: user?.id,
    createdOn: new Date()
    }));
  };

  const onCreateTask = (e) => {
    e.preventDefault();
    createTask(formData);
  };

  const onUpdateTask = (e) => {
    e.preventDefault();
    updateTask(formData);
  };

  const onCancel = (e) => {
    e.preventDefault();
    changeUpdate();
    setFormData(init);
  };

  return (
    <>
    <Hero />
    <div className="p-3 w-75">
      
      <div className="card bg-white">
        <div className="card-body">
          <form>
          <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    name="username"
                    className="form-control"
                    onChange={handleChange}
                    value={user?.username}
                />
            </div>
            <div className="mb-3">
              <label className="form-label">Date Of Birth</label>
              <input
                className="form-control"
                type="datetime-local"
                name="DateofBirth"
                onChange={handleChange}
                value={formData?.DateofBirth}
              />
            </div>


            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select class="form-select" aria-label="Default select example" name="Gender" onChange={handleChange}
                value={formData?.Gender}>

                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Prefer not Say</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input
                className="form-control"
                type="number"
                name="Contact"
                onChange={handleChange}
                value={formData?.Contact}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                className="form-control"
                type="text"
                name="Designation"
                onChange={handleChange}
                value={formData?.Designation}
              />
            </div>

            <button className="btn btn-primary me-2" onClick={onCreateTask}>Create Task</button>
            <button className="btn btn-primary me-2" onClick={onUpdateTask}>Update Task</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default UpdateProfile;