import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='m-4 p-4'>
             {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start text-white" style={{backgroundColor: "#000"}}>
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
                {/* <!-- Section: Links --> */}
                <section className="">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h2 className="text-dance mb-4 font-weight-bold">
                                Bengali Buzz
                            </h2>
                        </div>
                        {/* <!-- Grid column --> */}
                        
                        <hr className="w-100 clearfix d-md-none" />
                        
                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Usefull Link</h6>
                            <p>
                                <Link to="/" className="text-white">Home</Link>
                            </p>
                            <p>
                                <Link to="/" className="text-white">About Us</Link>
                            </p>
                            <p>
                                <Link to="/blog" className="text-white">Blog</Link>
                            </p>
                            <p>
                                <Link className="text-white">Contact Us</Link>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}
                        
                        <hr className="w-100 clearfix d-md-none" />
                        
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Contact Now
                            </h6>
                            <p>
                                444 4th , Sylhet
                                DC 20530, Bangladesh
                            </p>
                            <p>
                                +88 01750 000 000
                                +88 01750 000 000
                            </p>
                            <p>
                                info@gmail.com
                                info@gmail.com
                            </p>
                        </div>
                        
                        {/* <!-- Grid column --> */}
                        <hr className="w-100 clearfix d-md-none" />
                        
                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Subscribe</h6>
                            <h6 className="text-uppercase mb-4 font-weight-bold">  
                                Subscribe for our latest &
                                Articles. We Won t Give You
                            Spam Mails</h6>
                            <form className="form-inline">
                                <div className="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" className="sr-only">Subscribe</label>
                                    <input type="email" className="form-control" id="inputPassword2" placeholder="Enter your email address" />
                                </div>
                            </form>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}
        </footer>
        {/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;