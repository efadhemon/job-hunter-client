import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import JobDetails from '../../components/JobDetails/JobDetails';

const FavoriteJobs = () => {

    const favoriteJobs = useSelector((state) => {
        return state.jobs.favoriteList;
    })

    const [activeCard, setActiveCard] = useState(favoriteJobs?.[0]);

    return (
        <section id="home" className="home section">
            <div className="my-container">
                {favoriteJobs.length > 0 &&
                    <div className="home_container row">

                        <div className="card_container col-md-4">
                            {
                                favoriteJobs.map(job =>
                                    <JobCard
                                        key={job.id}
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
                }

                {
                    favoriteJobs.length === 0 && <h1 style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">You Have No Favorite Jobs</h1>
                }
            </div>
        </section>
    );
};

export default FavoriteJobs;