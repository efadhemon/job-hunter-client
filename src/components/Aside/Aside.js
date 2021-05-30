import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Aside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faAddressCard, faList, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const Aside = () => {
  const { pathname } = useLocation();
  let mainPath = pathname.split("/")[1];

  if (!mainPath) {
    mainPath = "jobs";
  }

  const handleSidebar = () => {
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
  };


    const appliedJobs =  useSelector((state) => {
        return state.jobs.applyList;
    })

    const favoriteJobs =  useSelector((state) => {
        return state.jobs.favoriteList;
    })

    return (
        <div className="aside">

            <div onClick={handleSidebar} className="nav-toggler">
                <span></span>
            </div>

            <div className="aside-inner">
                <div className="logo">
                    <Link to="/">LOGO</Link>
                </div>

                <ul id="nav" className="my-nav">
                    <li onClick={handleSidebar}><Link to="/" className={mainPath === 'jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faBriefcase} /> Jobs</Link></li>
                    <li onClick={handleSidebar}><Link to="/profile" className={mainPath === 'profile' ? 'active' : undefined}><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                    <li onClick={handleSidebar}><Link to="/post-jobs" className={mainPath === 'post-jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faAddressCard} /> Post a Jobs</Link></li>
                    <li onClick={handleSidebar}><Link to="/applied-jobs" className={mainPath === 'applied-jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faList} /> Applied Jobs { appliedJobs.length > 0 && <span>{appliedJobs.length}</span>}</Link></li>
                    <li onClick={handleSidebar}><Link to="/favorite-jobs" className={mainPath === 'favorite-jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faHeart} /> Favorite Jobs {favoriteJobs.length > 0 && <span>{favoriteJobs.length}</span>}</Link></li>
                    <li onClick={handleSidebar}><Link to="/contributor" className={mainPath === 'contributor' ? 'active' : undefined}><FontAwesomeIcon icon={faUsers} /> Contributor</Link></li>
                </ul>

                <div className="copyright-text">
                    &copy; {new Date().getFullYear()} The Job Hunter Website
                 </div>
            </div>
      </div>
  );
};

export default Aside;
