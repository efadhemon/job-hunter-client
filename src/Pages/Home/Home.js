import React from "react";
import "./Home.css";
import person1Img from "../../images/Emon.jpg";
import person2Img from "../../images/mitz_n.jpg";
import person3Img from "../../images/a.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const contributors = [
  {
    id: 1,
    name: 'Emon Hossain',
    quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, facilis.',
    image: person1Img,
    socials: [{ name: 'linkedin', link: '#', icon: faLinkedinIn }, { name: 'twitter', link: '#', icon: faTwitter }, { name: 'github', link: '#', icon: faGithub }, { name: 'facebook', link: '#', icon: faFacebookF }]
  }, {
    id: 2,
    name: 'Mousumi Akter',
    quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, facilis.',
    image: person2Img,
    socials: [{ name: 'linkedin', link: '#', icon: faLinkedinIn }, { name: 'twitter', link: '#', icon: faTwitter }, { name: 'github', link: '#', icon: faGithub }, { name: 'facebook', link: '#', icon: faFacebookF }]
  }, {
    id: 3,
    name: 'Albi Ummid',
    quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, facilis.',
    image: person3Img,
    socials: [{ name: 'linkedin', link: '#', icon: faLinkedinIn }, { name: 'twitter', link: '#', icon: faTwitter }, { name: 'github', link: '#', icon: faGithub }, { name: 'facebook', link: '#', icon: faFacebookF }]
  }
];

const Home = () => {
  return (
    <section className="section contributor-section">
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

      <div className="contributor">

        <h1>Contributors</h1>

        <div className="teams-section px-5">
          {
            contributors.map((contributor =>
              <div key={contributor.id} className="team-mate shadow">
                <div className="team-mate-img">

                  <img src={contributor.image} alt="" />

                  <div className="t-m-s-icon">
                    {
                      contributor.socials.map((social, index) => <a key={index} href={social.link} className={social.name}><FontAwesomeIcon icon={social.icon} /></a>)
                    }
                  </div>

                </div>

                <div className="team-mate-info">
                  <h2>{contributor.name}</h2>
                  <p>{contributor.quote}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
};

export default Home;
