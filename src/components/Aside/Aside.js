import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Aside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser, faBriefcase, faAddressCard, faList, faHeart } from '@fortawesome/free-solid-svg-icons';


const Aside = () => {

    const { pathname } = useLocation();
    let mainPath = pathname.split('/')[1];

    if (!mainPath) {
        mainPath = 'jobs'
    }

    const handleSidebar = () => {
        const navTogglerBtn = document.querySelector('.nav-toggler');
        const aside = document.querySelector('.aside');
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
    }

    return (
        <div className="aside">

            <div onClick={handleSidebar} className="nav-toggler">
                <span></span>
            </div>

            <div className="aside-inner">
                <div className="logo">
                    <Link to="/">
                        <img src='https://i.imgur.com/B2Ztq9w.png' alt="" />
                    </Link>
                </div>

                <ul id="nav" className="my-nav">
                    <li onClick={handleSidebar}><Link to="/" className={mainPath === 'jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faBriefcase} /> Jobs</Link></li>
                    <li onClick={handleSidebar}><Link to="/profile" className={mainPath === 'profile' ? 'active' : undefined}><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                    <li onClick={handleSidebar}><Link to="/post-jobs" className={mainPath === 'post-jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faAddressCard} /> Post a Jobs</Link></li>
                    <li onClick={handleSidebar}><Link to="/applied-jobs" className={mainPath === 'applied-jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faList} /> Applied Jobs</Link></li>
                    <li onClick={handleSidebar}><Link to="/favorite-jobs" className={mainPath === 'favorite-jobs' ? 'active' : undefined}><FontAwesomeIcon icon={faHeart} /> Favorite Jobs</Link></li>
                    <li onClick={handleSidebar}><Link to="/contact" className={mainPath === 'contact' ? 'active' : undefined}><FontAwesomeIcon icon={faComments} /> Contact</Link></li>
                </ul>


                <div className="copyright-text">
                    &copy; {new Date().getFullYear()} The Job Hunter Website
                 </div>
            </div>
        </div>
    );
};

export default Aside;