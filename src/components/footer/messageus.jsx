import React from 'react';
import './messageus.css';
import './bootstrap.min.css';

export default function MessageUs(){
    return(
        <>
          <section className="section colored" id="contact-us">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Talk To Us</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Have any Question or Worries Message us</p>
                    </div>
                </div>
            </div>


            <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="margin-bottom-30">Keep in touch</h5>
                    <div className="contact-text">
                        <p>Message 
                        <br/>theDeviAcademy</p>
                    </div>
                </div>

                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="contact-form">
                        <form id="contact" action="" method="get">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Send Message</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
};