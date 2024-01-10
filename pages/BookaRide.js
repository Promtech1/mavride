"use client";
import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router'

const Quote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
     
      streetAddress: "",
      aptSuite: "",
      city: "",
      state: "",
      zip: "",
  
    
      streetAddress2: "",
      aptSuite2: "",
      city2: "",
      state2: "",
      zip2: "",
   
    appointmentDate: "",
    appointmentTime: "",
    tripType: "",
    modeOfTransportation: "",
    otherSpecificInfo: "",
  });
  const modeOfTransportation = [
    "Wheelchair",
    "Sedan",
    "Gurney/Stretcher",
  ];
  const [errors, setErrors] = useState({});
  const [errmsg, setErrmsg] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const router = useRouter();
  const { id } = router.query;

  // Define your success and error conditions
  const isSuccess = id === '200';
  const isError = id === '500';


  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    // Phone number format validation
    const phoneRegex = /^\d{10}$/;
    if (
      formData.contactNumber.trim() &&
      !phoneRegex.test(formData.contactNumber.trim())
    ) {
      newErrors.contactNumber = "Invalid phone number format";
    }

    // Date and time validation (in the future)
    const currentDate = new Date();
    const selectedDate = new Date(
      `${formData.appointmentDate}T${formData.appointmentTime}`
    );

    if (selectedDate <= currentDate) {
      newErrors.appointmentDate = "Appointment must be scheduled for the future";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        // Assuming 'your-api-endpoint' is the URL where you want to send the data
        const response = await axios.post('http://localhost:3000/api/sendmailboy', formData);
  
        // Handle the response as needed, e.g., check response status, log data, etc.
        console.log('Server response:', response.data);
  
        window.alert("Good Job");
      } catch (error) {
        // Handle any errors that occurred during the axios request
        console.error('Error sending data:', error);
        setErrmsg("An error occurred while submitting the form.");
      }
    } else {
      setErrmsg("Please fill out all required fields");
    }
  };


  /*const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      //setErrmsg("");
      window.alert("Good Job");
      console.log(formData);
    }
    else {
      setErrmsg("Please fill out all required fields");
    }

  };**/

  return (
    <main className="flex flex-col gap-4 w-full md:w-auto min-h-screen py-4 px-4 bg-white text-gray-700">
      <section className="text-white flex flex-col gap-4 items-center justify-center w-full md:w-auto h-4/5 md:h-full bg-gradient-to-tr from-sky-900 to-blue-800 rounded-lg shadow-slate-100 shadow-2xl p-10">
        <h3 className="font-bold text-4xl">Book a Ride</h3>
        <p className=" pt-2">
          Fill out the form below to book a ride
        </p>
      </section>

      {isSuccess && (
        <div className="bg-green-500 text-white p-4">
          Success! your bookings have successfully be submitted
        </div>
      )}

      {isError && (
        <div className="bg-red-500 text-white p-4">
          Error! there was error submitting your bookings
        </div>
      )}

      
      <section className="mt-10">
        <form method="post" action="api/bookridemail" className="flex flex-col" onS2ubmit={handleSubmit}>
          
          
          <h3 className="font-bold text-2xl mb-4">Personal Information</h3>
          <div className="flex md:flex-nowrap flex-wrap gap-4">
            <div className="flex flex-col gap-4 w-full ">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                required="required"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full ">
              <label className="" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required="required"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                required="required"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required="required"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl mt-4 mb-4">Pickup</h3>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="streetAddress">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                required="required"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="aptSuite">
                Apt/Suite
              </label>
              <input
                type="text"
                id="aptSuite"
                name="aptSuite"
                required="required"
                value={formData.aptSuite}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                required="required"
                value={formData.state}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="zip">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                required="required"
                value={formData.zip}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl mt-4 mb-4">Dropoff</h3>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="streetAddress">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress2"
                value={formData.streetAddress2}
                onChange={handleChange}
                placeholder=""
                required="required"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="aptSuite">
                Apt/Suite
              </label>
              <input
                type="text"
                id="aptSuite"
                name="aptSuite2"
                value={formData.aptSuite2}
                onChange={handleChange}
                placeholder=""
                required="required"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city2"
                required="required"
                value={formData.city2}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state2"
                required="required"
                value={formData.state2}
                onChange={handleChange}
                placeholder=""
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="zip">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                name="zip2"
                value={formData.zip2}
                onChange={handleChange}
                placeholder=""
                required="required"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl mt-4 mb-4">Appointment</h3>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="appointmentDate">
                Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
                required="required"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="" htmlFor="appointmentTime">
                Time
              </label>
              <input
                type="time"
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                placeholder="00:00 AM/PM"
                required="required"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl mt-4 mb-4">Trip Details</h3>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {/* One Way */}
            <div className="flex flex-col gap-2">
              <label htmlFor="oneWay">
                One Way
              </label>
              <input
                type="radio"
                id="oneWay"
                name="tripType"
                required="required"
                value="One Way"
                checked={formData.tripType === 'One Way'}
                onChange={handleChange}
                className="mr-2"
              />
            </div>

            {/* Round Trip */}
            <div className="flex flex-col gap-2">
              <label htmlFor="roundTrip">
                Round Trip
              </label>
              <input
                type="radio"
                id="roundTrip"
                name="tripType"
                value="Round Trip"
                required="required"
                checked={formData.tripType === 'Round Trip'}
                onChange={handleChange}
                className="mr-2"
              />
            </div>

            {/* Mode of Transportation */}
            <div className="flex flex-col gap-4 w-full">
              <label htmlFor="modeOfTransportation">
                Mode of Transportation
              </label>
              <select
                name="modeOfTransportation"
                id="modeOfTransportation"
                value={formData.modeOfTransportation}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-2"
              >
                {modeOfTransportation.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>

        
        <div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">
          <div className="flex flex-col gap-4 w-full">
            <label className="" htmlFor="otherSpecificInfo">
              Other Specific Info
            </label>
            <input
              type="text"
              id="otherSpecificInfo"
              name="otherSpecificInfo"
              value={formData.otherSpecificInfo}
              onChange={handleChange}
              placeholder=""
              className="border-2 border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        <button typeof="Submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
          Submit
        </button>
      </form>
      {errmsg && (
        <div className="mt-4 text-red-500">{errmsg}</div>
      )}
    </section>
    </main >
  );
};

export default Quote;
