import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJob } from "../Redux/Admin/action";


const Admin = () => {

    const [text, setText] = useState("");
    
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Admin Page</h1>
      <input
        type="text"
        value={text}
        placeholder="Company Name"
        name="name"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job title"
        name="title"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Salary Range"
        name="salary"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="JOB description"
        name="jobdes"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Location"
        name="location"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Job Type"
        name="jobtype"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addJob({
              title: text,
              status: false,
            })
          );
          setText("");
        }}
      >
        Add job
      </button>
      <p>Use /users to go to user page</p>
    </div>
  );
};

export default Admin;
