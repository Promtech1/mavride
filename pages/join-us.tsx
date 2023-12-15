import Image from "next/image";

function JoinUs() {
  return (
    <div className="bg-gray-100 bg-cover pt-10 pb-10">
      <div className="min-h-screen flex items-center justify-center  mt-12 mb-12 border border-gray-100 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-md shadow-md border border-gray-900 w-full">
        <div className="flex justify-between items-center w-fit bg-mediumblue-200 p-4 py-2 br-2">
          <img src="/vector.svg" className="mr-2" alt="" />
          <img src="/mavride.svg" alt="" />
        </div>
          <h2 className="text-3xl font-bold mb-6">EMPLOYMENT FORM</h2>

          {/* Personal Information */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 space-x-6 gap-4">
              <div>
                <label className="block mb-2 font-semibold">First Name:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Middle Name:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Last Name:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Address Information</h3>
            <div className="grid grid-cols-2 gap-4 space-x-6">
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Street Address:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">City:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">State:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Zip:</label>
                <input type="text" className="border p-2 w-full" />
              </div>
            </div>
          </div>

          {/* Position Applied For */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Position applied for:</label>
            <input type="text" className="border p-2 w-full" />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">How many hours can you work a week?</label>
            <input type="number" className="border p-2 w-full" />
          </div>

          {/* Employment Eligibility */}
          <h2 className="text-2xl font-bold mb-4">EMPLOYMENT ELIGIBILITY</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Are you legally authorized to work in the United States?</label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <input type="radio" name="authorized" className="mr-2" /> Yes
              </label>
              <label>
                <input type="radio" name="authorized" className="mr-2" /> No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Do you require Visa Sponsorship?</label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <input type="radio" name="visaSponsorship" className="mr-2" /> Yes
              </label>
              <label>
                <input type="radio" name="visaSponsorship" className="mr-2" /> No
              </label>
            </div>
            <div>
              <label className="block mb-2">If yes, please confirm Visa type & expiration date:</label>
              <input type="text" className="border p-2 w-full" />
            </div>
          </div>

          <div className="mb-4 ">
            <label className="block mb-2 font-semibold">Have you ever been convicted of a misdemeanor or felony?</label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <input type="radio" name="convicted" className="mr-2 font-medium" /> Yes
              </label>
              <label>
                <input type="radio" name="convicted" className="mr-2 font-medium" /> No
              </label>
            </div>
            <div className="font-semibold">
              <label className="block mb-2">If yes, please elaborate:</label>
              <input type="text" className="border p-2 w-full" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Have you ever worked for this employer?</label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <input type="radio" name="workedForEmployer" className="mr-2" /> Yes
              </label>
              <label>
                <input type="radio" name="workedForEmployer" className="mr-2" /> No
              </label>
            </div>
            <div>
              <label className="block mb-2 font-semibold">If Yes, write the start and end dates:</label>
              <input type="text" className="border p-2 w-full" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;