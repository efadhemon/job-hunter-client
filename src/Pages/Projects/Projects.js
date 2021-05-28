import React from 'react';
import './Projects.css';


const Projects = () => {

    const handleProjectFilter = (e) => {
        const filterContainer = document.querySelector('.projects-filter');
        const projectsItems = document.querySelectorAll('.projects-box');
        const totalProjectsItem = projectsItems.length;
        filterContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('project-filter');
        for (let k = 0; k < totalProjectsItem; k++) {
            if (filterValue === projectsItems[k].getAttribute('project-category')) {
                projectsItems[k].classList.remove('hide');
                projectsItems[k].classList.add('show');
            }
            else {
                projectsItems[k].classList.remove('show');
                projectsItems[k].classList.add('hide');
            }
            if (filterValue === 'all') {
                projectsItems[k].classList.remove('hide');
                projectsItems[k].classList.add('show');
            }

        }
    };


    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="projects-filter padd-15">
                        <button onClick={handleProjectFilter} type="button" className="active" project-filter="all">All</button>
                        <button onClick={handleProjectFilter} type="button" project-filter="react">React</button>
                        <button onClick={handleProjectFilter} type="button" project-filter="full-stack">Full Stack</button>
                        <button onClick={handleProjectFilter} type="button" project-filter="mern full-stack">MERN</button>
                    </div>
                </div>
                <div className="row">
 

                </div>
            </div>
        </section>
    );
};

export default Projects;