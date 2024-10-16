import React, { useState } from "react";

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comments: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  // Google Form URL and field entry IDs
  const googleFormActionURL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdc4oA98YRyyP_4DVwFZV7gG1lRFKDs-7Cg_gzXPEi0PgjHdA/formResponse";
  const googleFields = {
    name: "entry.298639080",
    email: "entry.831422467",
    mobile: "entry.637666313",
    comments: "entry.1961300235",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    // Create the form data body to send to Google Forms
    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) =>
      formBody.append(googleFields[key], value)
    );

    try {
      // Send a POST request to Google Forms with no-cors
      await fetch(googleFormActionURL, {
        method: "POST",
        mode: "no-cors", // Allows the form to be submitted without CORS issues
        body: formBody,
      });

      // Set a success message (since we can't verify due to no-cors)
      setStatus({
        loading: false,
        message: "Form submitted successfully!",
        type: "success",
      });

      // Clear the form
      setFormData({ name: "", email: "", mobile: "", comments: "" });
    } catch (error) {
      // Set an error message if something goes wrong
      setStatus({
        loading: false,
        message: "Failed to submit the form. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="w-full flex justify-center px-4 md:px-28">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full">
        <h1 className="text-2xl md:text-4xl font-light mb-6 md:mb-8 text-center">
          Get Quotation
        </h1>
        {status.message && (
          <p
            className={`text-center mb-4 ${
              status.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.message}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile *"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#a71ad6] text-white py-3 rounded-lg hover:bg-[#51135f] transition duration-300"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuotationForm;
