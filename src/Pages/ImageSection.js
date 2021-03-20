import React from 'react';
import about from '../img/avatar.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p>
                    Lorem Ipsum dolor sit amet.
                </p>
                <div className="about-details">
                    
                </div>
            </div>
        </div>
    )
}

export default ImageSection
