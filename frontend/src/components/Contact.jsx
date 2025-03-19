"use client"
import { FaGithub } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Contact() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formState, setFormState] = useState("idle") // idle, sending, success, error
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Handle keyboard visibility on mobile
  useEffect(() => {
    if (typeof window === "undefined") return

    // Function to handle viewport height adjustments when keyboard appears
    const handleResize = () => {
      // Use CSS custom property to set the viewport height
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
    }

    // Initial call
    handleResize()

    // Add event listeners for resize and orientation change
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  // Replace the existing useEffect hook for keyboard detection with this one
  useEffect(() => {
    if (typeof window === "undefined") return

    // Get the navbar element - adjust the selector to match your navbar
    const navbar = document.querySelector("nav")
    if (!navbar) return

    const initialHeight = window.innerHeight

    const handleResize = () => {
      // If window height is significantly reduced, keyboard is likely visible
      const keyboardVisible = window.innerHeight < initialHeight * 0.75

      // Instead of changing position type, move the navbar up when keyboard is visible
      if (keyboardVisible) {
        // Keep navbar fixed but move it up out of view
        navbar.style.transform = "translateY(-100%)"
      } else {
        // Reset position when keyboard is hidden
        navbar.style.transform = "translateY(0)"
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setErrors({ ...errors, name: "Please enter your name" })
        return
      }
    }

    if (step === 2) {
      if (!formData.email.trim()) {
        setErrors({ ...errors, email: "Please enter your email" })
        return
      }
      if (!validateEmail(formData.email)) {
        setErrors({ ...errors, email: "Please enter a valid email" })
        return
      }
    }

    setStep((prev) => prev + 1)
  }

  const handleBack = () => setStep((prev) => prev - 1)

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()

    // Validate message
    if (!formData.message.trim()) {
      setErrors({ ...errors, message: "Please enter a message" })
      return
    }

    setFormState("sending")

    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState("success")

      // Reset form after 3 seconds
      setTimeout(() => {
        setStep(1)
        setFormData({ name: "", email: "", message: "" })
        setFormState("idle")
      }, 3000)
    } catch (error) {
      setFormState("error")
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: isMobile ? -10 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: isMobile ? 10 : 20, transition: { duration: 0.2 } },
  }

  return (
    <div id="contact" className="px-4 sm:px-0" style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}>
      <div style={{ fontFamily: "Afacad" }} className="max-w-[790px] w-[90%] mx-auto ">
        <h1 className="text-left text-3xl sm:text-4xl font-bold text-white mb-2">Reach Out</h1>
        <p className="text-left text-gray-400 mb-8 sm:mb-12">Connect with me :)</p>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="flex items-center w-full max-w-[250px] sm:max-w-[300px]">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex-1 flex items-center">
                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    step >= stepNumber ? "bg-blue-600" : "bg-gray-700"
                  } ${step === stepNumber ? "scale-125" : ""}`}
                />
                {stepNumber < 3 && (
                  <div
                    className={`flex-1 h-0.5 transition-all duration-500 ${
                      step > stepNumber ? "bg-blue-600" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-gradient-to-r from-[#302f2f] to-[#121212] p-4 sm:p-6 rounded-lg shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className="w-full sm:w-[90%] max-w-[800px] mx-auto"
            >
              {step === 1 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNext()
                  }}
                >
                  <h2 className="mb-4 sm:mb-5 text-white text-lg sm:text-xl font-medium">What's your name?</h2>
                  <div className="relative">
                    <input
                      type="text"
                      autoFocus
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full p-2.5 sm:p-3 mb-1 border ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      } bg-[#1a1a1a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs sm:text-sm mb-2 sm:mb-4">{errors.name}</p>}
                  </div>
                  <div className="flex justify-end mt-4 sm:mt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md transition-colors duration-300 flex items-center text-sm sm:text-base"
                    >
                      Next
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNext()
                  }}
                >
                  <h2 className="mb-4 sm:mb-5 text-white text-lg sm:text-xl font-medium">What's your email address?</h2>
                  <div className="relative">
                    <input
                      type="email"
                      autoFocus
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full p-2.5 sm:p-3 mb-1 border ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      } bg-[#1a1a1a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs sm:text-sm mb-2 sm:mb-4">{errors.email}</p>}
                  </div>
                  <div className="flex justify-between mt-4 sm:mt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-700 hover:bg-gray-800 text-white px-3 sm:px-6 py-2 rounded-md transition-colors duration-300 flex items-center text-sm sm:text-base"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md transition-colors duration-300 flex items-center text-sm sm:text-base"
                    >
                      Next
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="mb-4 sm:mb-5 text-white text-lg sm:text-xl font-medium">
                    What would you like to say?
                  </h2>
                  <div className="relative">
                    <textarea
                      name="message"
                      autoFocus
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={4}
                      className={`w-full p-2.5 sm:p-3 mb-1 border ${
                        errors.message ? "border-red-500" : "border-gray-600"
                      } bg-[#1a1a1a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs sm:text-sm mb-2 sm:mb-4">{errors.message}</p>}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0 mt-4 sm:mt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-700 hover:bg-gray-800 text-white px-3 sm:px-6 py-2 rounded-md transition-colors duration-300 flex items-center justify-center sm:justify-start text-sm sm:text-base"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className={`px-4 sm:px-6 py-2 rounded-md text-white transition-all duration-300 flex items-center justify-center sm:justify-start text-sm sm:text-base
                        ${
                          formState === "sending"
                            ? "bg-yellow-500"
                            : formState === "success"
                              ? "bg-green-500"
                              : formState === "error"
                                ? "bg-red-500"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                      {formState === "sending" ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : formState === "success" ? (
                        <>
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Sent!
                        </>
                      ) : formState === "error" ? (
                        <>
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Try Again
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Social Links */}
        <div className="mt-8 sm:mt-12 mb-3 sm:mb-4 text-center">
          <h3 className="text-white text-lg sm:text-xl mb-4">Or connect with me on social media</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 sm:mt-4">
          <a
            href="https://github.com/swarui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-gray-700 group-hover:-translate-y-1">
              <FaGithub className="text-xl sm:text-2xl text-white" />
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-white transition-colors duration-300">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/stevewarui/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-blue-700 group-hover:-translate-y-1">
              <IoLogoLinkedin className="text-xl sm:text-2xl text-white" />
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-white transition-colors duration-300">
              LinkedIn
            </span>
          </a>
          <a
            href="https://x.com/swarui_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-gray-900 group-hover:-translate-y-1">
              <FaXTwitter className="text-xl sm:text-2xl text-white" />
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-white transition-colors duration-300">
              Twitter
            </span>
          </a>
          <a
            href="https://t.me/swarui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:-translate-y-1">
              <FaTelegramPlane className="text-xl sm:text-2xl text-white" />
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-white transition-colors duration-300">
              Telegram
            </span>
          </a>
          <a
            href="https://instagram.com/stevewarui_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:-translate-y-1">
              <FaInstagram className="text-xl sm:text-2xl text-white" />
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-white transition-colors duration-300">
              Instagram
            </span>
          </a>
          <a href="mailto:stevewaruim@gmail.com" className="flex flex-col items-center group">
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-red-500 group-hover:-translate-y-1">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1.5 sm:mt-2 group-hover:text-white transition-colors duration-300">
              Email
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

