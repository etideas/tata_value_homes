import React, { useState } from "react";

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full flex justify-center px-28 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-4xl font-light mb-8 text-center">Get Quotation</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile *"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
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
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuotationForm;
