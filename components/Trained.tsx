import Link from "next/link";
import React from "react";


const Trained = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row gap-10 sm:gap-32">
      <div className="md:w-[800px]">
        <h3 className="capitalize m-0 text-[32px] lg:text-[64px] text-midnightblue-200 mb-5">
          Trained and Certified
        </h3>
        <div className="text-dimgray mb-5 lg:text-[20px]">
          Driven by excellence, we support our team with top-tier training
          resources:
        </div>
        <div className="">
          <div className="">
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
            <span className="font-bold text-base">Driver Training:</span> Comprehensive course for driver training and
              safety. <span className="text-blue-600"><Link className="no-underline" href={"#"}>ctaa.org/pass-online</Link></span>
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              <span className="font-bold text-base">CPR/First Aid:</span> Certification for emergency readiness, <span className="text-blue-600"><Link className="no-underline" href={"#"}>redcross.org/take-a-class{" "}</Link></span> 
               
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              <span className="font-bold text-base">Defensive Driving:</span> Skills development for accident prevention. <span className="text-blue-600"><Link className="no-underline" href={"#"}>nsc.org{" "}</Link></span>
              
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight mr-4">
              <span className="font-black text-base ">Drug, Alcohol, and Background Check:</span> It is of extreme importance
              to us at Mavride to ensure the trustworthiness and professionalism
              of our staff before employment and randomly while still employed
              with us. <span className="text-blue-600"><Link className="no-underline" href={"#"}>occusscreen.com</Link></span>, <span className="text-blue-600"><Link className="no-underline" href={"#"}>c-dat.net{" "}</Link></span>
            </div>
          </div>
          <Link href={"/join-us"}>
          <button className="bg-mediumblue-100 text-white text-center p-4 px-16 my-5 text-[16px] w-fit rounded cursor-pointer ">
            Get Started
          </button>
          </Link>
        </div>
      </div>

      <div className="mt-5 sm:mt-0">
        <img className="w-full sm:min-w-[400px]" alt="" src="/trained.png" />
      </div>
    </div>
  );
};

export default Trained;
