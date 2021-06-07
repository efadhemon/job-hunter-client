import React from 'react';
import './AppliedJobs.css'
import { useSelector } from 'react-redux';
import AppliedJobCard from '../../components/AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {

    const appliedJobs = useSelector((state) => {
        return state.jobs.applyList;
    })

    return (
        <section id="about" className="about section">
            <div className="my-container">
                {
                    appliedJobs.length > 0 &&
                    <div className="applied-job-container">
                        {
                            appliedJobs.map((job) => <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
                        }
                    </div>
                }
                {
                    appliedJobs.length === 0 && <h1 style={{ height: '90vh' }} className="d-flex align-items-center justify-content-center">You Have No Applied Jobs</h1>
                }
            </div>
        </section>
    );
};

export default AppliedJobs;