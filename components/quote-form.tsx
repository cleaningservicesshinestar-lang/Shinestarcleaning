"use client";

import { useState } from "react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
            placeholder="City or area"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Service Type</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
        >
          <option value="">Select a service</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="industrial">Industrial Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="carpet">Carpet Cleaning</option>
          <option value="window">Window Cleaning</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition resize-none"
          placeholder="Tell us about your cleaning needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition font-bold text-lg"
      >
        Get Your Quote
      </button>
    </form>
  );
}
