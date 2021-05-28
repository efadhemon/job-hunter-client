import { faCode, faFilm, faLaptop, faLaptopCode, faPaintBrush, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css'

const servicesData = [
    {
        id: 1,
        title: 'Web Design',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
        icon: faLaptop
    }, {
        id: 2,
        title: 'Web Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
        icon: faCode
    }, {
        id: 3,
        title: 'Programming',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
        icon: faLaptopCode
    }, {
        id: 4,
        title: 'Logo Design',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
        icon: faPaintBrush
    }, {
        id: 5,
        title: 'Photography',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
        icon: faPhotoVideo
    }, {
        id: 6,
        title: 'Video Editing',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
        icon: faFilm
    }

]

const Services = () => {
    return (
        <section id="service" className="service section">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">

                    {
                        servicesData.map(service => <div key={service.id} className="service-box padd-15">
                            <div className="service-item">
                                <div className="icon"><FontAwesomeIcon icon={service.icon} /></div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;