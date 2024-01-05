import React, { useState } from 'react';
import Link from "next/link";


const MainNav = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);

    }

  return (
    <div className="main-nav-container pl-8 pr-8">
        <div className="main-nav-wrapper">
            <div className="nav-left">
                <img src="/logo.png" className="mr-2 w-[130px]" alt="" />
            </div>
            <div className="nav-right">
                <ul>
                    <li><Link href={"/"} className="active:text-blue-700">
                        Home
                    </Link></li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li className="get-started">Get Started</li>
                </ul>
            </div>
            {isHamburgerOpen ? (
              <img src="/work-x.png" alt="close icon" className="close-icon ham cursor-pointer" onClick={toggleHamburger} />
              ) : (
                <img src="/hamburger-black.png" alt="logo" className=" nav-opacity hamburger ham cursor-pointer" onClick={toggleHamburger} />
            )}
        </div>
    </div>
  )
}

export default MainNav