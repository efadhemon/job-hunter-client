import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'

const contactInfo = [
    {
        id: 1,
        title: "Call Me On",
        data: '+88 0199 8200 160',
        icon: faPhone
    }, {
        id: 2,
        title: "Address",
        data: 'Mohammadpur, Dhaka-1207',
        icon: faMapMarkerAlt
    }, {
        id: 3,
        title: "Email",
        data: 'programmeremon@gmail.com',
        icon: faEnvelope
    }
]

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>

                <div className="row">

                    {
                        contactInfo.map(info => <div key={info.id} className="contact-info-item padd-15">
                            <div className="icon"><FontAwesomeIcon icon={info.icon} /></div>
                            <h4>{info.title}</h4>
                            <p>{info.data}</p>
                        </div>)
                    }

                </div>

                <div className="row">
                    <form className="contact-form padd-15" action="">
                        <div className="row">
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name*" required />
                                </div>
                            </div>
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email*" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject*" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea type="text" className="form-control"
                                        placeholder="Your Message..." required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 padd-15">
                                <button type="submit" className="btn">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;