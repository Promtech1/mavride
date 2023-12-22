import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="bg-midnightblue-200 text-white p-4 rounded-13xl md:w-full mx-auto">
        <div className="text-center mx-auto">
          <h1 className="text-[32px] font-bold">About Us</h1>
          <p className="text-base md:w-[95%] mx-auto leading-6">
            We don&apos;t just transport you to your appointments. we are a part of
            your health journey. Our mission, vision, and values reflect our
            dedication
          
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis tempora, aliquid esse excepturi, aperiam error iusto cumque exercitationem cupiditate illum quas quibusdam distinctio dolore pariatur. Fuga alias consequuntur necessitatibus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae excepturi libero delectus quas minus nostrum eveniet nulla dolorum expedita sequi quaerat cupiditate ad animi, et similique tenetur exercitationem dolore cumque amet. Accusantium quidem provident ipsa magni harum, laudantium consequatur.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ex deserunt aliquam repudiandae alias eius illum officia nihil, tempora ea culpa quasi hic atque quam nobis eveniet architecto officiis pariatur provident aperiam nostrum, error debitis voluptatum! Eius labore doloribus veniam sequi enim, sed quam nostrum vitae accusantium ab non ullam?</p>

          <Button
            className="text-mediumblue-100 bg-ghostwhite font-bold md:mt-10"
            type="button"
            title="See More"
          />
        </div>

        {/* <div>
          <img src="image-14@2x.png" alt="" className="w-full mt-6" />
        </div> */}
      </div>

      <div className="border border-[#01119652] border-solid rounded-[40px] my-10 overflow-hidden md:flex md:flex-row">
        <div className="flex-1 flex flex-col justify-between">
          <Card
            title="Mission"
            desc=' "To provide reliable, compassionate, and accessible transportation
            services, enriching the lives of our members with safe, timely, and
            comfortable journeys."'
            image="safety.svg"
          />
          <Card
            title="Values"
            desc='At Mavride, we are driven by Safety, Compassion, Reliability, Innovation, Integrity, and Community'
            image="beauty.svg"
          />
        </div>
        <div className="flex-1 flex flex-col border-l border-[#01119652] border-solid">
          <Card
            title="Vision"
            desc='Vision: “To set the industry standard for Non-Emergency Medical Transportation, offering unparalleled quality and care'
            image="shield.svg"
          />
          <Card
            title="Partnership"
            desc='In our mission to serve every individual in need of Non-Emergency Medical Transport, we have been approved to operate in this industry, vetted by the highest security standards, and thus authorized to collaborate with our esteemed partners: Government, Health Insurance Companies, Hospitals, and Private Health.'
            image="handshake-1.svg"
          />
          <CardWithLink
            title="Leadership"
            desc='Meet our dedicated team and the consulting services that distinguish us in the NEMT landscape.'
            image="alarm.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

interface Card {
  title: string;
  desc: string;
  image: string;
}

function Card({ title, desc, image }: Card) {
  return (
    <div className="p-5 py-10 border-b border-b-[#01119652] border-solid flex flex-col md:flex-row md:justify-between md:gap-5 md:items-center flex-1">
      <img src={"/"+image} className="mb-5 w-[60px] md:mb-0" alt="" />
      <div>
        <div className="text-[20px] text-midnightblue-100 font-bold">
          {title}
        </div>
        <div className="text-[14px] text-dimgray">{desc}</div>
      </div>
    </div>
  );
}

function CardWithLink({ title, desc, image }: Card) {
  return (
    <div className="p-5 py-10 border-b border-b-[#01119652] border-solid flex flex-col md:flex-row md:justify-between md:gap-5 md:items-center flex-1 relative">
      <img src={"/"+image} className="mb-5 w-[60px] md:mb-0" alt="" />
      <div>
        <div className="text-[20px] text-midnightblue-100 font-bold">
          {title}
        </div>
        <div className="text-[14px] text-dimgray">{desc}</div>
        <div className="mt-2">
          <Link href="/meet">
            <p><span className="no-underline"></span></p>
          </Link>
        </div>
      </div>
    </div>
  );
}