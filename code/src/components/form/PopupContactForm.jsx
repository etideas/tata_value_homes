// src/components/PopupContactForm.js

import React from "react";

// Replace this with your actual Google Form URL
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdc4oA98YRyyP_4DVwFZV7gG1lRFKDs-7Cg_gzXPEi0PgjHdA/formResponse";

// Replace these entry IDs with your actual form field IDs from the pre-filled URL
const GOOGLE_FORM_ENTRY_NAME = "entry.298639080";
const GOOGLE_FORM_ENTRY_EMAIL = "entry.831422467";
const GOOGLE_FORM_ENTRY_MOBILE = "entry.637666313";
const GOOGLE_FORM_ENTRY_COMMENT = "entry.1961300235";

const PopupContactForm = ({ onClose }) => {
  const [formData, setFormData] = React.useState({
    Name: "",
    Email: "",
    Mobile: "",
    Comments: "",
  });

  const [submissionStatus, setSubmissionStatus] = React.useState(""); // State for success/failure message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for Google Form submission
    const formBody = new URLSearchParams();
    formBody.append(GOOGLE_FORM_ENTRY_NAME, formData.Name);
    formBody.append(GOOGLE_FORM_ENTRY_EMAIL, formData.Email);
    formBody.append(GOOGLE_FORM_ENTRY_MOBILE, formData.Mobile);
    formBody.append(GOOGLE_FORM_ENTRY_COMMENT, formData.Comments);
    //
    try {
      // Send form data to Google Forms
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Important for Google Forms
      });

      // Clear the form and show success message
      setFormData({ Name: "", Email: "", Mobile: "", Comments: "" });
      setSubmissionStatus("success");
    } catch (error) {
      // Show failure message if form submission fails
      setSubmissionStatus("failure");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white  rounded-lg p-6 w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-3xl text-black"
        >
          &times; {/* Close icon */}
        </button>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Your Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2"
              htmlFor="text"
            >
              Email
            </label>
            <input
              type="text"
              name="Phno"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2"
              htmlFor="text"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="Phno"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Your Phone Number"
              value={formData.Mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2"
              htmlFor="text"
            >
              Comment
            </label>
            <input
              type="text"
              name="Phno"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Your Comment"
              value={formData.Comments}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#a71ad6] text-white py-2 px-4 mt-5 rounded-md hover:bg-[#508ecf] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Submission Status Messages */}
        {submissionStatus === "success" && (
          <p className="text-blue-600 mt-4">Message sent successfully!</p>
        )}
        {submissionStatus === "failure" && (
          <p className="text-red-600 mt-4">
            Failed to send the message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupContactForm;
