import React from 'react'
import Link from "next/link";


const MainNav = () => {
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
        </div>
    </div>
  )
}

export default MainNav