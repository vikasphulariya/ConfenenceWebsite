import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/newlogo.webp';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className='text-richblack-100 flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/CallForPapers">⭐ Call For Papers ⭐</Link>
                    </li>
                    <li>
                        <Link to="/Committees">Committees</Link>
                    </li>
                    <li>
                        <Link to="/Registration">⭐ Registration ⭐</Link>
                    </li>
                    <li>
                        <Link to="/PaperSubmission">⭐ Paper Submission ⭐</Link>
                    </li>
                    <li>
                        {/* Add a dropdown button */}
                        <button onClick={handleDropdownToggle}>
                            More
                        </button>

                        {/* Dropdown content */}
                        {showDropdown && (
                            <ul className='dropdown-content'>
                                <li><Link to="/Page1">⭐ KEY DATES ⭐</Link></li>
                                <li><Link to="/Contact us">Contact us</Link></li>
                                <li><Link to="/Downloads">Downloads</Link></li>
                                <li><Link to="/Paper Format">Paper Format</Link></li>
                                <li><Link to="/Venue">Venue</Link></li>
                                <li><Link to="/Special Session">Special Session</Link></li>

                            </ul>
                        )}
                    </li>
                </ul>
            </nav>


        </div>
    );
}

export default Navbar;
