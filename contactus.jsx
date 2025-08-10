import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend via fetch/axios
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#43257A] to-[#783FA7] py-6 px-2 flex flex-col items-center">
      {/* NavBar */}
      <div className="w-full max-w-6xl flex items-center justify-between bg-gradient-to-r from-[#171f3a] to-[#2987d8] px-4 py-3 rounded-b-2xl mb-8 border-b-4 border-[#00baff] shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn.worldvectorlogo.com/logos/ieee.svg"
            alt="IEEE"
            className="h-8 bg-white rounded px-2 py-1"
          />
        </div>
        <nav className="flex-1 flex justify-center space-x-5 text-white font-medium">
          <a href="#" className="hover:text-[#00baff]">Events</a>
          <a href="#" className="hover:text-[#00baff]">Our Team</a>
          <a href="#" className="hover:text-[#00baff]">Leaderboard</a>
          <a href="#" className="hover:text-[#00baff]">Workshop</a>
          <a href="#" className="hover:text-[#00baff]">About us</a>
          <a href="#" className="hover:text-[#00baff]">Alumni</a>
          <a href="#" className="font-semibold text-[#00baff] underline">Contact Us</a>
        </nav>
        <div className="flex space-x-2">
          <button className="bg-[#eee] text-[#2987d8] px-4 py-1 rounded-lg font-semibold text-sm hover:bg-[#d0eaff]">Log in</button>
          <button className="bg-[#00baff] text-white px-4 py-1 rounded-lg font-semibold text-sm hover:bg-[#2987d8]">Sign Up</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-4xl mt-4 mb-2 font-bold text-white text-center">
        Contact <span className="text-[#ca6aff]">Us</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-gray-100 bg-opacity-70 mt-6 max-w-3xl w-full">
        
        {/* Left Details */}
        <div className="bg-gradient-to-br from-[#0e1525] to-[#272c43] text-gray-100 p-8 md:w-1/2 flex flex-col justify-center rounded-tr-2xl rounded-br-2xl md:rounded-l-2xl md:rounded-tr-none shadow-lg">
          <h4 className="text-lg font-semibold mb-6 tracking-widest uppercase">details</h4>
          <div className="flex items-center mb-4">
            <svg className="w-5 mr-3 fill-[#00baff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.727 15.727 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.05 11.05 0 003.45.55 1 1 0 011 1V20a1 1 0 01-1 1C10.37 21 3 13.63 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.19 2.37.55 3.45a1 1 0 01-.21 1.11l-2.22 2.23z" /></svg>
            <span className="text-base">+91 7870349444</span>
          </div>
          <div className="flex items-center mb-4">
            <svg className="w-5 mr-3 fill-[#00baff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.42l-8 4.99-8-4.99V6l8 5 8-5v2.42z"/></svg>
            <span className="text-base">ieee_sb@rgipt.ac.in</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 mr-3 fill-[#00baff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/></svg>
            <span className="text-base">RGIPT, Jais, Amethi, UP, India</span>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="flex-1 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#1c236c] mb-2">Get in touch</h3>
          <p className="text-gray-600 mb-6 text-sm">feel free to drop a line below</p>

          <input
            type="text"
            name="name"
            placeholder="your name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 bg-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ca6aff] font-medium"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="your email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 bg-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ca6aff] font-medium"
            required
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Type your message here...."
            value={form.message}
            onChange={handleChange}
            className="w-full mb-5 bg-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ca6aff] font-medium resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-32 py-2 rounded-full bg-gradient-to-r from-[#ca6aff] to-[#00baff] text-white font-bold shadow-md hover:opacity-90 transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs
