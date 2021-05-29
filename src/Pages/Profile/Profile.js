import React from 'react';
import './Profile.css';


const Profile = () => {

    const UserInfo = JSON.parse(localStorage.getItem('loggedInUser')) || {};

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    }

    return (
        <section id="projects" className="projects section">
            <div className="my-container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Profile</h2>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-wite shadow w-25 text-center p-5 rounded">
                        <img className="rounded-circle shadow" src={UserInfo.photo} alt="" width="100" height="100" />
                        <h2 className="mt-3">{UserInfo.name}</h2>
                        <p>{UserInfo.email}</p>
                        
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;