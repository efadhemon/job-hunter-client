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
    first_name: "Mohammad emon",
    img: personaImg1,
    description: "lorem",
  },
  {
    id: 2,
    first_name: "Mousumi Akter",
    img: personaImg2,
    description: "error: undefined method `/' for nil:NilClass",
  },
  {
    id: 3,
    first_name: "Albi ummid",
    img: personaImg3,
    description: "error: undefined method `/' for nil:NilClass",
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
      <div className="teams-section">
        {personalInfo.map((info) => (
          <div className="team-cards">
            <div className="card-img">
              <img src={info.img} alt="" />
            </div>
            <div>
              <h2></h2>
            </div>
          </div>
        ))}
      </div>
      <h2>title</h2>
    </section>
  );
};

export default Contributors;
