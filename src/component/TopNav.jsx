import React from "react";
import Logo from '../assets/Logo.svg'
import { FaCircleUser } from 'react-icons/fa6' 

const TopNav = () => {
    return (
        <>
            <div className="flex justify-between items-center text-lg p-3 shadow-sm">
                {/* Left Logo */}
                <div>
                    <img src={Logo} alt="" />
                </div>

                {/* Middle nav buttons */}
                <nav className="-translate-x-40">
                    <ul className="flex space-x-10">
                        <li><button className="rounded-lg p-2 font-semibold text-blue-700 bg-blue-100/30 ">Dashboard</button></li>
                        <li><button className="rounded-lg p-2">Partner</button></li>
                        <li>
                            <button className="rounded-lg p-2">Desk Performance</button>
                            <button className="text-pink-700 bg-pink-100/20 border border-pink-300 rounded-lg px-2 font-medium">Beta</button>
                        </li>
                    </ul>
                </nav>

                {/* right profile and name */}
                <div className="flex items-center space-x-2">
                    <h1>Jonas</h1>
                    {/* image below */}
                    <FaCircleUser size={30}/>
                </div>
            </div>
        </>
    );
};

export default TopNav;