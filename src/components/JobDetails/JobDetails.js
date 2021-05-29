import React from "react";
import "./JobDetails.css";
import logo from "../../images/icons/tech-reactjs.svg";
import employeeIcon from "../../images/icons/id-card.png";
import experienceIcon from "../../images/icons/skills.png";
import shiftIcon from "../../images/icons/shift.png";
import typeIcon from "../../images/icons/schedule.png";

const JobDetails = () => {
  return (
    <div className="job-details">
      <div className="details-container">
        <img src={logo} alt="" className="company-logo" />
        <div className="job-main">
          <h3>Job Title</h3>
          <p>company Name</p>
          <button className="apply-btn">Apply now</button>
          <button className="save-btn">save</button>
        </div>
      </div>
      <hr />
      <div className="job_summary">
        <div className="summary_card">
          <img src={employeeIcon} alt="" />
          <p>Employee</p>
        </div>
        <div className="summary_card">
          <img src={experienceIcon} alt="" />
          <p>Experience</p>
        </div>
        <div className="summary_card">
          <img src={typeIcon} alt="" />
          <p> Job Type </p>
        </div>
        <div className="summary_card">
          <img src={shiftIcon} alt="" />
          <p> Salary: 45k-50k </p>
        </div>
      </div>
      <div className="job-content">
        <h6>About</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos autem
          rerum repellat, porro expedita quisquam! Eaque quos quibusdam
          obcaecati hic.
        </p>
        <h6>The role</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus id
          in illum officia dolore temporibus, iste doloribus nam? Eaque nihil
          voluptatibus ab quo exercitationem deleniti tempore beatae quod.
          Possimus, magnam.
        </p>
        <h6>Skills</h6>
        <ul>
          <li>React Js</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
