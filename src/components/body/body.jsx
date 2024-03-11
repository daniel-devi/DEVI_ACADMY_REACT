import React from 'react';
import './body.css';
import MyBackgroundImage from "./banner-bg.png";
import './bootstrap.min.css';

export default function Body(){
    return(
    <>
    <div className="welcome-area" id="welcome" style={{  backgroundImage: `url(${MyBackgroundImage})`}}>
    <div className="header-text">
        <div className="container">
            <div className="row">
                <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                    <h1>We provide the best <strong>Courses</strong><br/>to teach you <strong>Programming</strong></h1>
                    <p>theDeviAcademy is a website to teach Programming 
                        Learn to program with our beginner-friendly tutorials and examples.
                        <span id="blue">Read tutorials, try examples, write code and learn</span> to program
                    </p>
                    <button>Start Now</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    </>
    )
};
