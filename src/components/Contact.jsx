import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:py-28 bg-white text-gray-900"
    >
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-gray-800">Feel free to reach out – </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            I’d love to hear
          </span>
          <span className="text-black font-bold"> from you!</span>
        </h2>

        {/* Success Message */}
        {submitted ? (
          <div className="text-center mt-10 bg-[rgb(237,242,248)] p-8 rounded-md shadow-lg">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-black">
              <span className="text-gray-800 ">Thank you </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                for getting
              </span>
              <span className="text-black font-bold"> in touch!</span>
            </h1>
            <p className="text-gray-700 mt-4 text-lg">
              I truly appreciate you considering me and will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-md mx-auto text-gray-800 max-w-md"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-bold mb-2 text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 border rounded-md bg-[rgb(237,242,248)] focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 border rounded-md bg-[rgb(237,242,248)] focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-left">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-3 py-2 border rounded-md bg-[rgb(237,242,248)] focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 mx-auto border border-blue-600 text-blue-600 bg-white font-bold py-2 px-4 rounded text-sm block"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
