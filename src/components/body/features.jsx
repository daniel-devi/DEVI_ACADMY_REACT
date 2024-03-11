import React from 'react';
import './bootstrap.min.css';
import './features.css';

export default function MainFeatures(){
    return(
        <>

    <section className="section" id="testimonials">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">What do they say?</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </div>
                </div>
            </div>


            <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, recusandae ab odio voluptate itaque nisi voluptatum porro rem assumenda obcaecati inventore enim quia voluptas aliquid iste. Repellendus impedit temporibus labore.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">Catherine Soft</h3>
                                <span>A Devim at DeviAcademy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptas modi at inventore soluta exercitationem.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">Kelvin Wood</h3>
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, Ut vehicula et diam at aliquam.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">David Martin</h3>
                                <span>Mobile Developer</span>
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