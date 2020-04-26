import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

import { ReactComponent as Logo } from "../../images/logo.svg";

import "./navbar.styles.scss"

const Navbar = () => {
    const [isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => (
        setIsOpen(!isOpen)
    )

    return (
            <div className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <button type="button" className="nav-btn" onClick={handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>   
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>     
                    </ul>
                </div>
            </div>
    )
}

export default Navbar;