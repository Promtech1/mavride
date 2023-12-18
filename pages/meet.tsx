import React from "react";

const PortfolioCard = ({ title, description, writeUp, content }) => (
  <div className="flex my-8 w-full md:w-1/2 text-black">
    {/* Left side - Portfolio description */}
    <div className="w-full pr-4">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const PortfolioPage = () => (
  <div className="max-w-4xl mx-auto p-8 text-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Consultants and Specialization</h2>
        {/* Consultant details can be added here */}
      </div>
      <div className="bg-teal-500 text-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6">NEMT Consulting Services</h2>
        {/* Portfolio cards */}
        <PortfolioCard
          title="Strategic Visionary Approach"
          description="At the core of our services is a strategic and visionary approach. We design comprehensive strategies that anticipate industry trends and proactively address the evolving needs of our clients."
          writeUp="At [Your Company Name], our Strategic Visionary Approach involves designing comprehensive strategies that anticipate industry trends and proactively address the evolving needs of our clients. We don't just offer transportation solutions; we redefine the paradigm of Non-Emergency Medical Transportation (NEMT)."
          content="Our approach involves collaborating with clients to understand their long-term goals and designing strategies that ensure their success in a dynamic market. We leverage our industry insights to provide visionary solutions that stand the test of time."
        />

        <PortfolioCard
          title="Technological Prowess"
          description="Harnessing the power of advanced technology, we integrate state-of-the-art solutions for route optimization, real-time tracking, and communication systems. Our commitment to technological innovation ensures operational efficiency and an unparalleled level of service."
          writeUp="Our Technological Prowess enables us to harness the power of advanced technology, integrating state-of-the-art solutions for route optimization, real-time tracking, and communication systems. This ensures operational efficiency and sets us apart in the dynamic landscape of NEMT."
          content="We leverage cutting-edge technology to enhance the efficiency of our NEMT services. From route optimization to real-time tracking, our technological solutions are designed to meet the evolving needs of our clients and provide a seamless experience for passengers."
        />
      </div>
    </div>
  </div>
);

export default PortfolioPage;
