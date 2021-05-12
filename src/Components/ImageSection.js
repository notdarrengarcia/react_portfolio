import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>Darren Garcia.</span></h4>
                <p className="about-text">
                    I am a passionate and hard working individual. I've been coding for
                    <br></br> a little over a year now and I feel very confident I could be the one your looking for. My other hobbies include photography and cinematography.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Darren Garcia</p>
                        <p>: 23 Years Young</p>
                        <p>: American</p>
                        <p>: Spanish and English</p>
                        <p>: 116 Misty Lane W, Kerrville TX 78028</p>
                        <p>: United States</p>
                    </div>
                </div>
                <button>
                <a href="https://docs.google.com/document/d/1LiY2wI6NBllD7DYp1CMIwoAtrLJXQKPE-0LNthSrMB4/edit?usp=sharing" class="btn">Download Resume</a>
                </button>
            </div>
        </div>
    )
}

export default ImageSection
