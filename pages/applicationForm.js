"use client";
import React, { useState } from "react";
import Image from "next/image";
const jobDescription = [
  {
    id: 1,
    point:
      "Transporting patients and clients utilizing their own/company vehicles safely and professionally.",
  },
  {
    id: 2,
    point:
      "Communicating effectively with dispatch regarding the schedule and receiving instructions.",
  },
  {
    id: 3,
    point:
      "Maintain a professional image and attitude regarding patients, family members, and co-workers.",
  },
  {
    id: 4,
    point:
      "Complete daily vehicle pre-shift and post-shift inspections and maintain vehicle cleanliness.",
  },
  {
    id: 5,
    point: "Assist clients/patients as needed to complete the transfer safely.",
  },
  {
    id: 6,
    point:
      "Must understand instructions in English (both written and spoken), second language is a plus.",
  },
  {
    id: 7,
    point:
      "Must be able to understand and operate tablets and medical transportation software.",
  },
  { id: 8, point: "Perform all duties as assigned by the dispatcher." },
  { id: 9, point: "Ensuring client safety and comfort during transportation." },
  { id: 10, point: "Following all traffic laws and regulations." },
  {
    id: 11,
    point:
      "Conducting vehicle inspections and reporting any maintenance or repair needs.",
  },
  { id: 12, point: "Adhering to company policies and procedures." },
];
const jobQualification = [
  { id: 1, qualification: "Must have a valid driver’s license." },
  {
    id: 2,
    qualification:
      "Pass a mandatory pre-employment drug and alcohol screening.",
  },
  {
    id: 3,
    qualification:
      "Must be able to pass a mandatory criminal background check.",
  },
  {
    id: 4,
    qualification:
      "Defensive Driving Certificate or obtained within the first month of employment.",
  },
  {
    id: 5,
    qualification:
      "First Aid/CPR Certificate obtained within the first month of employment.",
  },
  { id: 6, qualification: "Previous experience preferred, but not required." },
  { id: 7, qualification: "High School Diploma or Equivalent." },
];
const Jobpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    contactNumber: "",
    email: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    zip: "",
    isUSCitizen: true,
    isAuthorizedToWork: true,
    hasWorkedForCompany: false,
    previousWorkDate: "",
    hasConvictions: false,
    convictionsExplanation: "",
    highSchoolName: "",
    highSchoolFrom: "",
    highSchoolTo: "",
    didGraduateHighSchool: false,
    collegeName: "",
    otherEducation: "",
  });
  const [error, setError] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      contactNumber,
      email,
      streetAddress,
      aptSuite,
      city,
      state,
      zip,
      isUSCitizen,
      isAuthorizedToWork,
      hasWorkedForCompany,
      previousWorkDate,
      hasConvictions,
      convictionsExplanation,
      highSchoolName,
      highSchoolFrom,
      highSchoolTo,
      didGraduateHighSchool,
      collegeName,
      otherEducation,
    } = formData;

    if (!firstName) {
      setError(true);
      setErrmsg("First Name is required");
      return false;
    }
    if (!middleName) {
      setError(true);
      setErrmsg("Middle Name is required");
      return false;
    }
    if (!lastName) {
      setError(true);
      setErrmsg("Last Name is required");
      return false;
    }
    if (!dateOfBirth) {
      setError(true);
      setErrmsg("Date of Birth is required");
      return false;
    }
    if (!contactNumber) {
      setError(true);
      setErrmsg("Contact Number is required");
      return false;
    }
    if (!email) {
      setError(true);
      setErrmsg("Email is required");
      return false;
    }
    if (!streetAddress) {
      setError(true);
      setErrmsg("Street Address is required");
      return false;
    }
    if (!aptSuite) {
      setError(true);
      setErrmsg("Apt/Suite is required");
      return false;
    }
    if (!city) {
      setError(true);
      setErrmsg("City is required");
      return false;
    }
    if (!state) {
      setError(true);
      setErrmsg("State is required");
      return false;
    }
    if (!zip) {
      setError(true);
      setErrmsg("ZIP Code is required");
      return false;
    }
    if (isUSCitizen === undefined) {
      setError(true);
      setErrmsg("Please answer if you are a US citizen");
      return false;
    }
    if (isAuthorizedToWork === undefined) {
      setError(true);
      setErrmsg("Please answer if you are authorized to work in the US");
      return false;
    }
    if (hasWorkedForCompany === undefined) {
      setError(true);
      setErrmsg("Please answer if you have worked for this company before");
      return false;
    }
    if (!previousWorkDate && hasWorkedForCompany === "Yes") {
      setError(true);
      setErrmsg("Please provide the date of previous work");
      return false;
    }
    if (hasConvictions === undefined) {
      setError(true);
      setErrmsg(
        "Please answer if you have been convicted of a misdemeanor or felony"
      );
      return false;
    }
    if (hasConvictions === "Yes" && !convictionsExplanation) {
      setError(true);
      setErrmsg("Please provide an explanation for the convictions");
      return false;
    }
    if (!highSchoolName) {
      setError(true);
      setErrmsg("High School Name is required");
      return false;
    }
    if (!highSchoolFrom) {
      setError(true);
      setErrmsg("High School From date is required");
      return false;
    }
    if (!highSchoolTo) {
      setError(true);
      setErrmsg("High School To date is required");
      return false;
    }
    if (!didGraduateHighSchool) {
      setError(true);
      setErrmsg("Please answer if you graduated from high school");
      return false;
    }
    if (!collegeName && !otherEducation) {
      setError(true);
      setErrmsg("Please provide either College Name or Other Education");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log(formData);
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <main className="flex flex-col gap-4 w-full md:w-auto min-h-screen py-4 px-4 bg-white text-gray-700">
      {/* HEADER  */}
      <section className="text-white flex flex-col gap-4 items-center justify-center w-full md:w-auto h-4/5 md:h-full bg-gradient-to-tr from-sky-900 to-blue-700 rounded-lg shadow-slate-100 shadow-2xl p-10">
        <h1 className="text-6xl md:text-7xl font-bold text-center capitalize">
          Drive with us
        </h1>
        <p className="text-center w-full md:w-4/5">
          Mavride is a non-emergency medical transportation company that
          provides transportation services to the elderly and disabled. We are
          looking for drivers to join our team. If you are interested in joining
          our team, please fill out the form below.
        </p>
      </section>

      {/* JOB DESCRIPTION */}
      <section className="flex flex-col items-center justify-center w-full md:w-auto h-full bg-white rounded-lg shadow-2xl shadow-slate-100 py-10 px-5 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Job Description</h2>
            <ul className="list-disc">
              {jobDescription.map((job) => (
                <li key={job.id} className="text-base md:text-sm py-3">
                  {job.point}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            {/* image */}
            <Image src="/ride.svg" width={500} height={500} alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center justify-around w-full mt-8">
          <div className="">
            <Image src="/list.svg" width={500} height={500} alt="" />
          </div>
          <div className="">
            <h2 className="text-4xl font-bold">Job Qualifications</h2>
            <ul className="list-disc">
              {jobQualification.map((job) => (
                <li key={job.id} className="text-base md:text-sm py-3">
                  {job.qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* JOB APPLICATION */}
      <section className="flex flex-col items-center justify-center w-full md:w-auto h-full bg-white rounded-lg shadow-2xl shadow-slate-100 py-10 px-5 md:p-10">
        <h2 className="text-4xl font-bold">Job Application</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-full mt-6">
              <h3 className="text-2xl font-bold">Personal Information</h3>
              <div className="flex md:flex-nowrap flex-wrap gap-4">
                <div className="flex flex-col gap-4 w-full ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full ">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    id="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-2xl font-bold">Additional Information</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-4 w-full md:w-[32.3%]">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-[32.3%]">
                  <label htmlFor="aptSuite">Apt/Suite</label>
                  <input
                    type="text"
                    name="aptSuite"
                    id="aptSuite"
                    value={formData.aptSuite}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-[32.3%]">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="isUSCitizen" className="font-medium text-xl">
                    Are you a US Citizen?
                  </label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="yes">Yes</label>
                      <input
                        type="radio"
                        name="isUSCitizen"
                        id="yes"
                        value={true}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="no">No</label>
                      <input
                        type="radio"
                        name="isUSCitizen"
                        id="no"
                        value={false}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label
                    htmlFor="isAuthorizedToWork"
                    className="font-medium text-xl"
                  >
                    Are you authorized to work in the US?
                  </label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="yes">Yes</label>
                      <input
                        type="radio"
                        name="isAuthorizedToWork"
                        id="yes"
                        value={true}
                        onChange={handleChange}
                        className="border-2 border-blue-300 rounded-lg p-4"
                      />
                    </div>
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="no">No</label>
                      <input
                        type="radio"
                        name="isAuthorizedToWork"
                        id="no"
                        value={false}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
                <div className="flex flex-col gap-4 w-full">
                  <label
                    htmlFor="hasWorkedForCompany"
                    className="font-medium text-xl"
                  >
                    Have you worked for this company before?
                  </label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="yes">Yes</label>
                      <input
                        type="radio"
                        name="hasWorkedForCompany"
                        id="yes"
                        value={true}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="no">No</label>
                      <input
                        type="radio"
                        name="hasWorkedForCompany"
                        id="no"
                        value={false}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label
                    htmlFor="previousWorkDate"
                    className="font-medium text-xl"
                  >
                    If yes, when?
                  </label>
                  <input
                    type="date"
                    name="previousWorkDate"
                    id="previousWorkDate"
                    value={formData.previousWorkDate}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="highSchoolName">High School Name</label>
                  <input
                    type="text"
                    name="highSchoolName"
                    id="highSchoolName"
                    value={formData.highSchoolName}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="highSchoolFrom">From</label>
                  <input
                    type="date"
                    name="highSchoolFrom"
                    id="highSchoolFrom"
                    value={formData.highSchoolFrom}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="highSchoolTo">To</label>
                  <input
                    type="date"
                    name="highSchoolTo"
                    id="highSchoolTo"
                    value={formData.highSchoolTo}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <label
                    htmlFor="didGraduateHighSchool"
                    className="font-medium text-xl"
                  >
                    Did you graduate high school?
                  </label>
                  <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="yes">Yes</label>
                      <input
                        type="radio"
                        name="didGraduateHighSchool"
                        id="yes"
                        value={true}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div className="flex items-center gap-4 w-max">
                      <label htmlFor="no">No</label>
                      <input
                        type="radio"
                        name="didGraduateHighSchool"
                        id="no"
                        value={false}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="collegeName" className="font-medium">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    id="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label htmlFor="otherEducation" className="font-medium">
                    Other Education
                  </label>
                  <input
                    type="text"
                    name="otherEducation"
                    id="otherEducation"
                    value={formData.otherEducation}
                    onChange={handleChange}
                    className="border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* DISCLAIMER  */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-bold">Disclaimer And Signature</h3>
            <p className="text-base">
              I certify that my answers are true and complete to the best of my
              knowledge, and I understand that false or misleading information
              in my application or interview may result in my release if this
              application leads to employment.
            </p>
          </div>
          {/* SIGNATURE */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label htmlFor="signature" className="font-medium">
                Signature
              </label>
              <input
                type="text"
                name="signature"
                id="signature"
                value={formData.signature}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
        {error && (
          <div className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">
            {errmsg}
          </div>
        )}
      </section>
      {/* FOOTER */}
      <footer className="flex flex-col items-center justify-center w-full md:w-auto h-full bg-white rounded-lg shadow-2xl shadow-slate-100 p-10">
        <h2 className="">@{year} Mavride</h2>
      </footer>
    </main>
  );
};

export default Jobpage;
