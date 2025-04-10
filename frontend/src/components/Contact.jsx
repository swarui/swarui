"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowLeft, ArrowRight, Check, X, Loader2 } from "lucide-react"

export default function Contact() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  })
  const [formState, setFormState] = useState("idle") // idle, sending, success, error
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640)

      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 640)
      }

      window.addEventListener("resize", checkIfMobile)
      return () => window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhoneNumber = (number) => {
    // Basic validation for phone numbers - accepts formats like: +1234567890, 123-456-7890, (123) 456-7890
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    return re.test(number)
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

    if (step === 3) {
      if (!formData.number.trim()) {
        setErrors({ ...errors, number: "Please enter your phone number" })
        return
      }
      if (!validatePhoneNumber(formData.number)) {
        setErrors({ ...errors, number: "Please enter a valid phone number" })
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

    try {
      // Send data to Flask backend
      const response = await fetch("https://swaruibackend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setFormState("success")

      // Reset form after 3 seconds
      setTimeout(() => {
        setStep(1)
        setFormData({ name: "", email: "", number: "", message: "" })
        setFormState("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormState("error")
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: isMobile ? -10 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: isMobile ? 10 : 20, transition: { duration: 0.2 } },
  }

  return (
    <div
    style={{fontFamily:'Afacad'}}
      id="contact"
      className="flex flex-col justify-center px-4 py-12 sm:py-16 scroll-mt-10 sm:px-0 bg-gradient-to- to-black"
    >
      <div className="max-w-[800px] w-[95%] sm:w-[90%] mx-auto flex-1 flex flex-col">
        <div className="mb-8 sm:mb-12">
                <h1 className="text-left text-3xl md:text-4xl font-bold text-white mt-5">Reach out</h1>

          <p className="text-left text-gray-400 mt-2">Let's connect :)</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center w-full max-w-[300px] sm:max-w-[400px]">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex-1 flex items-center">
                <div className="relative">
                  <div
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 flex items-center justify-center
                    ${step >= stepNumber ? "bg-gradient-to-r from-blue-500 to-blue-500" : "bg-gray-700"}`}
                  >
                    {step > stepNumber && <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />}
                    {step === stepNumber && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                  {step === stepNumber && (
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                      Step {stepNumber}
                    </div>
                  )}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`flex-1 h-0.5 transition-all duration-500 ${
                      step > stepNumber ? "bg-gradient-to-r from-blue-500 to-blue-500" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="relative bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800 backdrop-blur-sm flex-grow flex flex-col justify-center overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-00 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-00 opacity-10 rounded-full blur-3xl"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className="w-full mx-auto flex flex-col relative z-10"
            >
              {step === 1 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNext()
                  }}
                  className="flex flex-col min-h-[220px] sm:min-h-[240px]"
                >
                  <h2 className="mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-medium">What's your name?</h2>
                  <div className="relative">
                    <input
                      type="text"
                      autoFocus
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full p-3 sm:p-4 mb-1 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs sm:text-sm mb-2 sm:mb-4 flex items-center">
                        <X className="w-3 h-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end mt-auto pt-4">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-800 hover:to-blue-00 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
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
                  className="flex flex-col min-h-[220px] sm:min-h-[240px]"
                >
                  <h2 className="mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-medium">
                    What's your email address?
                  </h2>
                  <div className="relative">
                    <input
                      type="email"
                      autoFocus
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full p-3 sm:p-4 mb-1 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs sm:text-sm mb-2 sm:mb-4 flex items-center">
                        <X className="w-3 h-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between mt-auto pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base border border-gray-700"
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNext()
                  }}
                  className="flex flex-col min-h-[220px] sm:min-h-[240px]"
                >
                  <h2 className="mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-medium">What's your phone number?</h2>
                  <div className="relative">
                    <input
                      type="tel"
                      autoFocus
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full p-3 sm:p-4 mb-1 border ${
                        errors.number ? "border-red-500" : "border-gray-700"
                      } bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500`}
                    />
                    {errors.number && (
                      <p className="text-red-400 text-xs sm:text-sm mb-2 sm:mb-4 flex items-center">
                        <X className="w-3 h-3 mr-1" />
                        {errors.number}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between mt-auto pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base border border-gray-700"
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <form onSubmit={handleSubmit} className="flex flex-col min-h-[220px] sm:min-h-[240px]">
                  <h2 className="mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-medium">
                    What would you like to say?
                  </h2>
                  <div className="relative">
                    <textarea
                      name="message"
                      autoFocus
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={3}
                      className={`w-full p-3 sm:p-4 mb-1 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-500`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs sm:text-sm mb-2 sm:mb-4 flex items-center">
                        <X className="w-3 h-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0 mt-auto pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center sm:justify-start text-sm sm:text-base border border-gray-700"
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-white transition-all duration-300 flex items-center justify-center sm:justify-start text-sm sm:text-base font-medium
                        ${
                          formState === "sending"
                            ? "bg-amber-500"
                            : formState === "success"
                              ? "bg-gradient-to-r from-emerald-500 to-green-500"
                              : formState === "error"
                                ? "bg-gradient-to-r from-red-500 to-rose-500"
                                : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-800 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                        }`}
                    >
                      {formState === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : formState === "success" ? (
                        <>
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Message Sent!
                        </>
                      ) : formState === "error" ? (
                        <>
                          <X className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Try Again
                        </>
                      ) : (
                        <>Send Message</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Social Links */}
        <div className="mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">
          <h3 className="text-white text-xl sm:text-2xl mb-6 ">Or connect with me on social media</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-6">
            <a href="https://github.com/swarui" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-full transition-all duration-300 transform group-hover:bg-gray-700 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-gray-700/30">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors duration-300">
                  GitHub
                </span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/stevewarui/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-full transition-all duration-300 transform group-hover:bg-blue-600 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-600/30">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors duration-300">
                  LinkedIn
                </span>
              </div>
            </a>
            <a href="https://x.com/swarui_" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-full transition-all duration-300 transform group-hover:bg-black group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-black/30">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors duration-300">
                  Twitter
                </span>
              </div>
            </a>
            <a href="https://instagram.com/stevewarui_" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-full transition-all duration-300 transform group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-600 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-pink-600/30">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors duration-300">
                  Instagram
                </span>
              </div>
            </a>
            <a href="mailto:stevewaruim@gmail.com" className="group">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-full transition-all duration-300 transform group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-rose-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-red-500/30">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors duration-300">
                  Email
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
