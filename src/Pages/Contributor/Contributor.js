import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contributor.css";
import personaImg1 from "../../images/Emon.png";
import personaImg2 from "../../images/mitz_n.jpg";
import personaImg3 from "../../images/a.jpg";

const personalInfo = [
  {
    id: 1,
    name: "Mohammad emon",
    img: personaImg1,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex temporibus beatae voluptas quos inventore',
  },
  {
    id: 2,
    name: "Mousumi Akter",
    img: personaImg2,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex temporibus beatae voluptas quos inventore',
  },
  {
    id: 3,
    name: "Albi ummid",
    img: personaImg3,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex temporibus beatae voluptas quos inventore',
  },
];
const Contributors = () => {
  return (
    <section id="contact" className="contact section contributor-section">
      <div className="top-banner">
        <div className="over-lay">
          <div className="banner-text">
            <h1>JOB HUNTER</h1>
            <p>
              An absolute place for searching for suitable jobs for every
              individual with one click. Easy to apply just choose your desire
              job and apply for it & also have a place to get the perfect
              employee by posting in Job Hunter.
            </p>
          </div>
        </div>
      </div>
      <div className="teams-section px-5">
        {personalInfo.map((info) => (
          <div key={info.id} className="team-cards shadow">
            <div className="card-img">
              <img src={info.img} alt="" />
            </div>
            <div className="mt-4 p-3">
              <h2>{info.name}</h2>
              <p>{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributors;
