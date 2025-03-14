"use client";

import { useState } from "react";

function Projects() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <>
      <div
        style={{ fontFamily: "Afacad" }}
        id="projects"
        className="max-w-[780px] w-[90%] mx-auto py-16"
      >
        <h1 className="text-left text-4xl font-bold text-white mb-2">
          Reach Out
        </h1>
        <p className="text-left text-gray-400 mb-12">Connect with me :)</p>

        {/* Form Steps */}
        <div className="bg-gradient-to-r from-[#302f2f] to-[#121212] p-6 rounded-lg">
          <div className="w-[70%] max-w-[800px] mx-auto">
            {step === 1 && (
              <>
                <h2 className="mb-5" >Feel free to key in your details and i will get in touch with you</h2>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-600 bg-[#121212] text-white rounded-md"
                />

                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-blue-800 text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-600 bg-[#121212] text-white rounded-md"
                />

                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-800 text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-600 bg-[#121212] text-white rounded-md"
                />
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
