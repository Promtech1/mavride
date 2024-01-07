import React, { useState } from 'react';
import Link from "next/link";


const MainNav = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);

        const navList = document.querySelector('.nav-mobile');
        if (navList) {
            if (isHamburgerOpen) {
                navList.classList.remove('nav-list-open');
            } else {
                navList.classList.add('nav-list-open');
            }
        }

    }

  return (
    <div className="main-nav-container pl-[30px] pr-[30px] pt-[20px]">
        <div className="main-nav-wrapper">
            <div className="nav-left">
                <img src="/logo.png" className="mr-2 w-[130px]" alt="" />
            </div>
            <div className="nav-right">
                <ul>
                    <li><Link href={"/"} className="active:text-blue-700">
                        Home
                    </Link></li>
                    <li><Link href={"/#About"} >About</Link></li>
                    <li><Link href={"/#Services"} >Service</Link></li>
                    <li><Link href={"/Contact"} >Contact</Link></li>
                    <li className="get-started">Get Started</li>
                </ul>
            </div>
            <div className="hamburger-main">
                {isHamburgerOpen ? (
                <img src="/work-x.png" alt="close icon" className="close-icon ham cursor-pointer" onClick={toggleHamburger} />
                ) : (
                    <img src="/hamburger-black.png" alt="logo" className=" nav-opacity hamburger ham cursor-pointer" onClick={toggleHamburger} />
                )}
            </div>
        </div>
        <div className="nav-mobile ">
                <ul>
                    <li><Link href={"/"} className="active:white">
                        Home
                    </Link></li>
                    <li><Link href={"/#About"} >About</Link></li>
                    <li><Link href={"/#Services"} >Service</Link></li>
                    <li><Link href={"/Contact"} >Contact</Link></li>
                    <li className="get-started-mobile">Get Started</li>
                </ul>
            </div>
    </div>
  )
}

export default MainNav