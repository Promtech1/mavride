function JoinUs() {
    return (
    <div>
<div className="min-h-screen flex items-center justify-center  mt-12 mb-12" >
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6">EMPLOYMENT FORM</h2>

        {/* Personal Information */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Full Legal Name (First, Middle, and Last):</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">Preferred Name:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">Street Address:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">City:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">State:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">Zip:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          {/* ... (other fields) ... */}
        </div>

        {/* Position Applied For */}
        <div className="mb-4">
          <label className="block mb-2">Position applied for:</label>
          <input type="text" className="border p-2 w-full" />
        </div>

        <div className="mb-4">
          <label className="block mb-2">How many hours can you work a week?</label>
          <input type="number" className="border p-2 w-full" />
        </div>

        {/* Employment Eligibility */}
        <h2 className="text-2xl font-bold mb-4">EMPLOYMENT ELIGIBILITY</h2>

        <div className="mb-4">
          <label className="block mb-2">Are you legally authorized to work in the United States?</label>
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
          <label className="block mb-2">Do you require Visa Sponsorship?</label>
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

        <div className="mb-4">
          <label className="block mb-2">Have you ever been convicted of a misdemeanor or felony?</label>
          <div className="grid grid-cols-2 gap-4">
            <label>
              <input type="radio" name="convicted" className="mr-2" /> Yes
            </label>
            <label>
              <input type="radio" name="convicted" className="mr-2" /> No
            </label>
          </div>
          <div>
            <label className="block mb-2">If yes, please elaborate:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Have you ever worked for this employer?</label>
          <div className="grid grid-cols-2 gap-4">
            <label>
              <input type="radio" name="workedForEmployer" className="mr-2" /> Yes
            </label>
            <label>
              <input type="radio" name="workedForEmployer" className="mr-2" /> No
            </label>
          </div>
          <div>
            <label className="block mb-2">If Yes, write the start and end dates:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
};




export default JoinUs;
