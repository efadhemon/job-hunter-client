import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import JobDetails from '../../components/JobDetails/JobDetails';

const FavoriteJobs = () => {

    const [activeCard, setActiveCard] = useState({});
    
    const favoriteJobs = useSelector((state) => {
        return state.jobs.favoriteList;
    })

    useEffect(() => {
        setActiveCard(favoriteJobs[0]);
    }, [favoriteJobs])

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

                        <div className="job_details_container col-md-8">
                            <JobDetails job={activeCard} />
                        </div>

                    </div>
                }

                {
                    favoriteJobs.length === 0 && <h1 style={{ height: '90vh' }} className="d-flex align-items-center justify-content-center">You Have No Favorite Jobs</h1>
                }
            </div>
        </section>
    );
};

export default FavoriteJobs;