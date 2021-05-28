
import { faComments, faUser, faBriefcase, faEnvelope, faHome, faList, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Aside.css';

const Aside = () => {

    const { pathname } = useLocation();
    let mainPath = pathname.split('/')[1];

    if (!mainPath) {
        mainPath = 'home'
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
                    <Link to="/">LOGO</Link>
                </div>

                <ul id="nav" className="nav">
                    <li onClick={handleSidebar}><Link to="/home" className={mainPath === 'home' ? 'active' : undefined}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li onClick={handleSidebar}><Link to="/about" className={mainPath === 'about' ? 'active' : undefined}><FontAwesomeIcon icon={faUser} /> About</Link></li>
                    <li onClick={handleSidebar}><Link to="/projects" className={mainPath === 'projects' ? 'active' : undefined}><FontAwesomeIcon icon={faBriefcase} /> Projects</Link></li>
                    <li onClick={handleSidebar}><Link to="/service" className={mainPath === 'service' ? 'active' : undefined}><FontAwesomeIcon icon={faList} /> Services</Link></li>
                    <li onClick={handleSidebar}><Link to="/blog" className={mainPath === 'blog' ? 'active' : undefined}><FontAwesomeIcon icon={faEnvelope} /> Blog</Link></li>
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