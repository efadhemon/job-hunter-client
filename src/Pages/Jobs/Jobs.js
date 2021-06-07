import React, { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Jobs.css";
import JobDetails from "../../components/JobDetails/JobDetails";
import { useSelector } from "react-redux";
const Jobs = () => {

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
        <section className="jobs section">
            <div className="my-container">
                <form onSubmit={handleSubmit} className="search_bar">
                    <input
                        placeholder="Search Your Desired Job"
                        onChange={handleChange}
                        type="text"
                    />
                    <button type="submit"> Search </button>
                </form>
                <div className="jobs_container row">

                    <div className="card_container col-md-4 mb-5">
                        {
                            jobs.map(job =>
                                <JobCard key={job.id}
                                    job={job}
                                    activeCard={activeCard}
                                    setActiveCard={setActiveCard}
                                />)
                        }
                    </div>

                    <div className="job_details_container col-md-8">
                        <JobDetails job={activeCard} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Jobs;
