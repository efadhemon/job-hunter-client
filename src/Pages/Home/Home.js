import React, { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Home.css";
import JobDetails from "../../components/JobDetails/JobDetails";
import { useSelector } from "react-redux";
const Home = () => {

    const jobs =  useSelector((state) => {
        return state.jobs.allJobs;
    })

    const [activeCard, setActiveCard] = useState(jobs?.[0]);
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
                <div className="home_container row">

                    <div className="card_container col-md-4">
                        {
                            jobs.map(job =>
                                <JobCard key={job.id}
                                    job={job}
                                    activeCard={activeCard}
                                    setActiveCard={setActiveCard}
                                />)
                        }
                    </div>

                    <div className="job_details col-md-8">
                        <JobDetails job={activeCard} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
