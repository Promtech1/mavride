import NavBar from '@/components/AnotherNav'
import ComeWork from '@/components/ComeWork'
import Footer from '@/components/Footer'

import React from 'react'

const Training = () => {
  return (
    <div className="main-about ">
        <div className="main-about-wrapper">
          <div className="navbar">
            <NavBar/>
          </div>

          <h3 className="capitalize m-0 text-[32px] lg:text-[64px] text-midnightblue-200 mb-5 text-center pt-20 pb-10">
            Trained and Certified
          </h3>

          <div className="training-main pb-20">
            <img src="/training.jpg" alt="" />

            <div className="training-text">
              <div className="training-text-main">
                <div className="text-[14px] mt-2 text-dimgray font-extralight">
                  <span className="font-bold text-base">Driver Training:</span> Comprehensive course for driver training and
                  safety. <span className=""><a className="no-underline" href="https://ctaa.org/pass-online" target="_blank" rel="noreferrer">ctaa.org/pass-online</a></span>
                </div>
                <div className="text-[14px] mt-2 text-dimgray font-extralight">
                  <span className="font-bold text-base">CPR/First Aid:</span> Certification for emergency readiness, <span className="text-blue-600"><a className="no-underline" href="https://www.redcross.org/take-a-class" target="_blank" rel="noreferrer">redcross.org/take-a-class</a></span> 
                  
                </div>
                <div className="text-[14px] mt-2 text-dimgray font-extralight">
                  <span className="font-bold text-base">Defensive Driving:</span> Skills development for accident prevention. <span className="text-blue-600"><a className="no-underline" href="https://www.nsc.org/" target="_blank" rel="noreferrer">nsc.org</a></span>
                  
                </div>
                <div className="text-[14px] mt-2 text-dimgray font-extralight mr-4">
                  <span className="font-black text-base ">Drug, Alcohol, and Background Check:</span> It is of extreme importance
                  to us at Mavride to ensure the trustworthiness and professionalism
                  of our staff before employment and randomly while still employed
                  with us. <span className="text-blue-600"><a className="no-underline" href="https://c-dat.net/" target="_blank" rel="noreferrer">c-dat.net{" "}</a></span>
                </div>
                </div>
              </div>
          </div>

          
        </div>
        <ComeWork/>
        <Footer/>
    </div>
  )
}

export default Training