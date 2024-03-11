import React from 'react';
import './main.css';

export default function MainBody(params) {
    return(
        <>
<section className="section home-feature">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                        <div className="features-small-item">
                            <div className="icon">
                                <i><img src="book-icon-png-13.png" alt=""/></i>
                            </div>
                            <h5 className="features-title">Web Development</h5>
                            <p>Learn Front-end Development with <span id="language">HTML CSS JavaScript React</span></p>
                            <p>Learn Back-end Development <span id="language">Django or Node.js</span></p>
                        </div>
                    </div>
            
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                        <div className="features-small-item">
                            <div className="icon">
                                <i><img src="book-icon-png-13.png" alt=""/></i>
                            </div>
                            <h5 className="features-title">Mobile Development</h5>
                            <p>Learn to Bulid cross-platform applications for IOS and Andriod with <span id="language">Flutter and Dart</span></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                        <div className="features-small-item">
                            <div className="icon">
                                <i><img src="book-icon-png-13.png" alt=""/></i>
                            </div>
                            <h5 className="features-title">Machine Learning and AI</h5>
                            <p>Learn about AI Machine Learning and Neural Networks and bulid your own bots with <span id="language">Python</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
};

