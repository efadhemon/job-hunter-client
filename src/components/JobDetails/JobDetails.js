import React, { useState } from "react";
import "./JobDetails.css";
import employeeIcon from "../../images/icons/id-card.png";
import experienceIcon from "../../images/icons/skills.png";
import shiftIcon from "../../images/icons/shift.png";
import typeIcon from "../../images/icons/schedule.png";
import ApplyJobForm from "../ApplyJobForm/ApplyJobForm";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteList, removeToFavoriteList } from "../../Redux/Slices/jobSlice";
import swal from 'sweetalert';
import { useLocation } from "react-router";



const JobDetails = ({ job }) => {

  const { icon, title, companyName, employe, experience, jobType, salary, about, role, skills } = job;

  const appliedJobs = useSelector((state) => {
    return state.jobs.applyList;
  })

  const favoriteJobs = useSelector((state) => {
    return state.jobs.favoriteList;
  })

  const [appliedJob, setAppliedJob] = useState({});

  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleApplyJob = (job) => {
    const alreadyApplied = appliedJobs.find(item => item.id === job.id);
    if (!alreadyApplied) {
      setAppliedJob(job)
      openModal()
    } else {
      swal("Hey", 'This job is alreadyApplied', 'error')
    }
  };

  const handleSaveJob = (job) => {
    const remainJobs = favoriteJobs.find(item => item.id === job.id);
    if (!remainJobs) {
      dispatch(addToFavoriteList(job))
    } else {
      swal("Hey", 'This is already added to favorites', 'error')
    }
  }

  const handleRemoveFavoriteJob = (id) => {
    swal({
      title: "Warning?",
      text: "Are You sure to remove this jobs",
      icon: "warning",
      buttons: true,
      dangerMode: true,
  })
      .then((willRemove) => {
          if (willRemove) {
            dispatch(removeToFavoriteList(id))
          }
      });
  }

  const { pathname } = useLocation();
  const mainPath = pathname.split('/')[1];

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
            <button onClick={() => handleApplyJob(job)} className="apply-btn">Apply now</button>
            {
              mainPath === '' ?
               <button onClick={() => handleSaveJob(job)} className="save-btn">save</button>
               :
               <button onClick={() => handleRemoveFavoriteJob(job.id)} className="save-btn">Remove</button>
            }
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
      <ApplyJobForm modalIsOpen={modalIsOpen} closeModal={closeModal} job={appliedJob}></ApplyJobForm>
    </div>
  );
};

export default JobDetails;
