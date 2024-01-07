import Link from "next/link";
import React from "react";


const Trained = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row gap-10 sm:gap-32 pl-[30px] pr-[30px]">
      <div className="md:w-[800px]">
        <h3 className="capitalize m-0 text-[32px] lg:text-[64px] text-midnightblue-200 mb-5">
          Trained and Certified
        </h3>
        <div className="text-dimgray mb-5 lg:text-[20px]">
          Driven by excellence, we support our team with top-tier training
          resources:
        </div>
        <div className="">
          <Link href={"/Training"}>
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
