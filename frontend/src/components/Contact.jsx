"use client";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import gmail from "../assets/gmail.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (step === 2 && !formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    setIsSending(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSending(false);
      setIsSent(true);
      setStep(1);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div id="contact">
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
                <h2  style={{ fontSize: "1.2rem" }} className="mb-5 text-white">
                  Feel free to key in your details and I will get in touch with
                  you
                </h2>
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
                <h2  style={{ fontSize: "1.2rem" }} className="mb-5 text-white">
                  Feel free to key in your details and I will get in touch with
                  you
                </h2>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                <h2 style={{ fontSize: "1.2rem" }} className="mb-5 text-white">
                  Feel free to key in your details and I will get in touch with
                  you
                </h2>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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
                    onClick={handleSubmit}
                    className={`px-4 py-2 rounded text-white transition-all duration-300
                  ${
                    isSending
                      ? "bg-yellow-500"
                      : isSent
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                  >
                    {isSending
                      ? "Sending..."
                      : isSent
                      ? "Sent!"
                      : "Send Message"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-row justify-center mt-7 space-x-5 text-3xl">
          <a href="https://github.com/swarui" target="_blank">
            <FaGithub className="text-3xl text-white" />
          </a>
          <a href="https://www.linkedin.com/in/stevewarui/" target="_blank">
            <IoLogoLinkedin className="text-3xl text-white" />
          </a>
          <a href="https://x.com/swarui_">
            <FaXTwitter className="text-3xl text-white" />
          </a>
          <a href="https://x.com/swarui_">
            <FaTelegramPlane className="text-3xl text-white" />
          </a>
          <a href="https://instagram.com/stevewarui_">
            <FaInstagram className="text-3xl text-white" />
          </a>
          <a href="mailto:stevewaruim@gmail.com">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios/50/gmail-new.png"
              alt="gmail-new"
              className="invert brightness-200 ml-1"
              style={{ marginTop: "-1px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
