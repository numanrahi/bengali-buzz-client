import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import './Header.css'
import { AuthContext } from '../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Header = () => {

    const { user, logout } = useContext(AuthContext)

    const signOut = () => {
        logout();
    };

    return (
        <div className="sticky">
            <div style={{ maxWidth: "1200px" }} className="bg-white  row pb-2 mb-5 mx-auto w-100 justify-content-center align-items-center pt-3 pb-4 g-2">
                <div className="col-md-3 col-10 d-flex justify-content-center align-items-center display-6 fw-bold title-text text-dance">
                    Bengali Buzz
                </div>
                <div className="col-md-6 col-8 d-flex justify-content-center align-items-center gap-5">
                    <NavLink
                        activeclassname="active"
                        className="text-decoration-none title-text fw-bold fs-5"
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="text-decoration-none title-text fw-bold fs-5"
                        to="https://github.com/numanrahi"
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="text-decoration-none title-text fw-bold fs-5"
                        to="/blog"
                    >
                        Blog
                    </NavLink>
                </div>
                {user ? (
                    <div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
                        <div>
                            <BsPersonCircle
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                className="fs-2 title-text"
                            />
                            <Tooltip id="my-tooltip" />
                        </div>
                        <div>
                            <button
                                onClick={signOut}
                                className="bg-dark text-white px-4 py-2 border-0 rounded-2 ms-2"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
                        <NavLink to={"/login"}>
                            <button className="bg-dark text-white px-4 py-2 border-0 rounded-2 ms-2">
                                Login
                            </button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;