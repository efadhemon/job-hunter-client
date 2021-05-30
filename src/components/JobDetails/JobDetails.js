import React from "react";
import "./JobDetails.css";
import logo from "../../images/icons/tech-reactjs.svg";
import employeeIcon from "../../images/icons/id-card.png";
import experienceIcon from "../../images/icons/skills.png";
import shiftIcon from "../../images/icons/shift.png";
import typeIcon from "../../images/icons/schedule.png";

const JobDetails = ({ data }) => {
  const { icon, title, companyName, employe, experience, jobType, salary, about, role, skills } = data;
  return (
    <div className="job-details">
      <div className="details-container">
        <img src={icon} alt="" className="company-logo" />
        <div className="job-main">
          <h3>
            {title}
          </h3>
          <p>
            {companyName}
          </p>
          <div className="btn_div">
            <button className="apply-btn">Apply now</button>
            <button className="save-btn">save</button>
          </div>
        </div>
      </div>
      <hr className="hr-style" />
      <div className="job_summary">
        <div className="summary_card">
          <img src={employeeIcon} alt="" />
          <p>
            {employe}
          </p>
        </div>
        <div className="summary_card">
          <img src={experienceIcon} alt="" />
          <p>
            {experience}
          </p>
        </div>
        <div className="summary_card">
          <img src={typeIcon} alt="" />
          <p>
            {jobType}
          </p>
        </div>
        <div className="summary_card">
          <img src={shiftIcon} alt="" />
          <p>
            {salary}
          </p>
        </div>
      </div>
      <div className="job-content">
        <h6>About</h6>
        <p>
          {about}
        </p>
        <h6>The role</h6>
        <p>
          {
            role?.map((data, index) =>
              <li key={index}>{data.title}</li>
            )
          }
        </p>
        <h6>Skills</h6>
        <ul>
          {
            skills.map((data, index) =>
              <li key={index}> {data.title} </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
