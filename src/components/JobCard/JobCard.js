import React from "react";
import "./JobCard.css";
import employeeIcon from "../../images/icons/id-card.png";
import experienceIcon from "../../images/icons/skills.png";
import shiftIcon from "../../images/icons/shift.png";
import typeIcon from "../../images/icons/schedule.png";

const JobCard = ({ icon }) => {
  return (
    <div className="job_card">
      <div className="title_bar">
        <div className="intro">
          <img src={icon} alt="" />
        </div>
        <div>
          <h3>Job Title</h3>
          <p>company Name</p>
        </div>
      </div>
      <div>
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
      </div>

      {/* <div className="btn_container">
                <button className='card_btn'>
                    Apply
            </button>
            </div> */}
    </div>
  );
};

export default JobCard;
