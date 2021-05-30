import React, { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Home.css";
import jobIcon from "../../images/icons/tech-reactjs.svg";
import JobDetails from "../../components/JobDetails/JobDetails";
import jobsData from '../../FakeData/JobsData';
const Home = () => {
    const [activeCard, setActiveCard] = useState(jobsData?.[0]);
    const [keywords, setKeywords] = useState("");
    const handleChange = (e) => {
        const newKeywords = e.target.value;
        console.log(newKeywords);
        setKeywords(newKeywords);
        e.preventDefault();
    };
    const handleSubmit = (e) => {
        console.log(keywords);
        alert(`We got   : ${keywords}`);
        e.preventDefault();
    };
    return (
        <section id="home" className="home section">
            <div className="my-container">
                <form onSubmit={handleSubmit} className="search_bar">
                    <input
                        placeholder="Search Your Desired Job"
                        onChange={handleChange}
                        type="text"
                    />
                    <button type="submit"> Search </button>
                </form>
                <div className="home_container">
                    <div className="card_container">
                        {
                            jobsData.map(data =>
                                <JobCard
                                    data={data}
                                    activeCard={activeCard}
                                    setActiveCard={setActiveCard}
                                />)
                        }
                    </div>
                    <div className="job_details">
                        <JobDetails data={activeCard} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
