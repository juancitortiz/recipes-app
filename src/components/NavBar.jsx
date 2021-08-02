import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import './NavBar.css';

export default function NavBar() {

    return(
        <Fragment>
            <nav className="navbar">
                <div className="logo">
                    <label>LOGO</label>
                </div>
                <div className="nav-button">
                    <Link to="/">
                        <label>Home</label>
                    </Link>
                </div>
                <div className="nav-button">
                    <Link to="/agregar-receta/">
                        <label>Add Recipe</label>
                    </Link>
                </div>
                <div className="search-box">
                    <SearchBox />
                </div>
            </nav>
        </Fragment>
    )
}