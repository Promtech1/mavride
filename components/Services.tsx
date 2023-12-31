import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row gap-10 pl-[30px] pr-[30px]" id="Services">
      <div className="">
        <h3 className="capitalize m-0 text-[32px] text-midnightblue-200 mb-5 lg:text-[64px]">
          Our Services
        </h3>
        <div className="text-dimgray mb-5 lg:text-[20px]">
          With technology at the heart of our services, we ensure seamless
          scheduling and real-time updates for every journey. Mavride offers a
          comprehensive range of non-emergency medical transportation services,
          including:
        </div>
        <div className="">
          <div className="">
            <ul>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Medical appointments (doctor visits, chemotherapy, dialysis)</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Hospital admissions/discharges</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Rehab centre support</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Adult care facilities</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Bedside-to-bedside accompaniment</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Interstate medical transport</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">Pharmacy pick-up</li>
              <li className="text-[14px] mt-2 text-dimgray font-extralight">And all other places our members get Medicaid/Medicare and Private health insurance services.</li>
            </ul>
          </div>
          
          {/* <div>
          Get Started
          </div> */}
          
        
        
        </div>
      </div>

      <div className="mt-5 sm:mt-0">
        <img className="w-full sm:min-w-[400px]" alt="" src="/services.png" />
      </div>
    </div>
  );
};

export default Services;
