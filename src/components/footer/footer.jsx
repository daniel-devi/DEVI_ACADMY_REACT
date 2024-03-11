import React from 'react';
import './bootstrap.min.css';
import './footer.css';
import './font-awesome.css'

export default function Footer(){
    const d = new Date();
    let year = d.getFullYear();

    return(
        <>
        <link rel="stylesheet" type="text/css" href="./font-awesome.css"/>  
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="copyright">Copyright &copy; {year}  DeviAcademy</p>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
};
