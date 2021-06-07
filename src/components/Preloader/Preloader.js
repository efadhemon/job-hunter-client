import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <div class="preloader">
            <div class="loading-data three-bounce">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    );
};

export default Preloader;