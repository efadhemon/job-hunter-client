import React from "react";
import "./JobCard.css";
import employeeIcon from "../../images/icons/id-card.png";
import experienceIcon from "../../images/icons/skills.png";
import shiftIcon from "../../images/icons/shift.png";
import typeIcon from "../../images/icons/schedule.png";

const JobCard = ({ data, setActiveCard, activeCard }) => {
  const { icon, title, companyName, employe, experience, jobType, salary } = data;
  console.log(data, activeCard)
  return (
    <div
      className={
        activeCard === data ?
          'job_card active_card' : 'job_card'
      }
      onClick={() => setActiveCard(data)}

    >
      <div className="title_bar">
        <div className="intro">
          <img src={icon} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>
            {companyName}
          </p>
        </div>
      </div>
      <div>
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
            <p> {salary} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
