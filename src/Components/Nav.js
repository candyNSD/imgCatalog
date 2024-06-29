import React from 'react'
import { GiFilmSpool } from "react-icons/gi";
import { Link } from 'react-router-dom';

const navText = [
    { name: "Photos", path: "/photoss" },
    { name: "Templates", path: "/template" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
];

const Nav = () => {
    return (
        <div>
            <div className="nav-wrapper flex justify-between items-center sticky top-0 bg-white z-50 shadow-md p-5">
                <div>
                    <a href='#' style={{ color: "#0883a6", fontSize: "30px", display: 'flex', alignItems: "center", fontWeight: "bold" }}>
                        <GiFilmSpool style={{ fontSize: "40px" }} />
                        <span>Image Gallary</span>
                    </a>
                </div>
                <div>
                    <ul className='nax-li flex gap-10 text-2xl'>

                        {navText.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Nav