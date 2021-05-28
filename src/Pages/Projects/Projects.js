import React from 'react';
import './Projects.css';
import project1 from '../../images/projects/project1.png';
import project2 from '../../images/projects/project2.png';
import project3 from '../../images/projects/project3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
    {
        id: 1,
        name: 'Diligent Detectives',
        description: 'A single page  private investigation app where people are able to take services from this site.',
        banner: project1,
        technologyUsed: ['React.js', 'Node.js', 'MongoDB', 'Stripe.js', 'Express.js', 'Firebase'],
        github: 'https://github.com/mohammademon551/diligent-detectives-client',
        website: 'https://diligent-detectives.web.app/',
        projectCategory: 'full-stack'
    }, {
        id: 2,
        name: 'The Daily Shop',
        description: 'A single page  super shop app where people are able to buy daily groceries. Like as a online super shop',
        banner: project2,
        technologyUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Bootstrap'],
        github: 'https://github.com/mohammademon551/the-daily-shop-client',
        website: 'https://the-daily-shop-10443.web.app/',
        projectCategory: 'react'
    }, {
        id: 3,
        name: 'BD Travels',
        description: 'A single page  travel  app where people are able to choose their transport method for their tour.',
        banner: project3,
        technologyUsed: ['React.js', 'Firebase', 'Google Map', 'Bootstrap'],
        github: 'https://github.com/mohammademon551/bd-travels-client',
        website: 'https://react-auth-330d7.web.app/',
        projectCategory: 'react'
    }
]

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
                    {
                        projectsData.map(project => <div key={project.id} className="projects-box padd-15" project-category={project.projectCategory}>
                            <div className="projects-item shadow-dark">
                                <div className="projects-img">
                                    <img src={project.banner} alt="projects" />
                                </div>
                                <div className="projects-info">
                                    <h2>{project.name}</h2>
                                    <p className="description">{project.description}</p>
                                    <p className="technology-used">
                                        {
                                            project.technologyUsed.map((technology, index) => <span key={index}>{technology}</span>)
                                        }
                                    </p>

                                    <div className="icon">
                                        <a href={project.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a>
                                        <a href={project.website} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /> website</a>
                                    </div>

                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <h1 style={{ textAlign: 'center', color: "red", margin: '50px' }}>Some more projects will be added very soon :)</h1>
            </div>
        </section>
    );
};

export default Projects;