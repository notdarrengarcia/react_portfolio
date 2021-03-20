import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';



function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi! My name is 
                    <span>Darren Garcia.</span>
                </h1>
                <p className="h-sub-text">
                    lorem Ipsum. A Full Stack Developer with knowledge in many areas.
                    Most notably in my ability to learn and react quickly to new and fast paced environements.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub}  className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
