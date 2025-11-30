"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const initialFormState = {
  user_name: "",
  user_email: "",
  phone: "",
  service: "",
  location: "",
  preferred_date: "",
  message: "",
};

export function QuoteForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const subject = useMemo(
    () =>
      `Quote Request - ${formData.service ? formData.service.replace(/^\w/, (c) => c.toUpperCase()) : "Cleaning Service"}`,
    [formData.service]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const formElement = formRef.current;
    if (!formElement) return;

    const inputs = Array.from(
      formElement.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        "input, textarea, select"
      )
    );

    const handleFocus = (event: Event) => {
      const target = event.target as HTMLElement;
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
      });
    };
  }, []);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+()\-.\s]{7,}$/;

    if (!emailRegex.test(formData.user_email)) {
      setToast({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setToast({ type: "error", message: "Please enter a valid phone number." });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if environment variables are available
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        const missing = [];
        if (!serviceId) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
        if (!templateId) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
        if (!publicKey) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
        
        throw new Error(
          `EmailJS is not configured. Missing environment variables: ${missing.join(", ")}. ` +
          `Please create a .env.local file in the project root with these variables. ` +
          `See EMAILJS_SETUP.md for instructions.`
        );
      }

      // Send email using EmailJS browser SDK
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          phone: formData.phone || "",
          service: formData.service,
          location: formData.location,
          preferred_date: formData.preferred_date || "",
          message: formData.message,
          subject,
        },
        publicKey
      );

      setToast({
        type: "success",
        message: "Thanks! Your message has been sent. We'll reach out shortly.",
      });
      setFormData(initialFormState);
      formRef.current?.reset();
    } catch (error) {
      console.error("Email send error:", error);
      let errorMessage = "Unable to send your message right now.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "object" && error !== null && "text" in error) {
        errorMessage = `Failed to send email: ${error.text}`;
      }
      
      setToast({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {toast && (
        <div
          className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`space-y-6 transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
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
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
              placeholder="your@email.com"
              inputMode="email"
              autoComplete="email"
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
              inputMode="tel"
              autoComplete="tel"
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
              autoComplete="address-level2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Preferred Date</label>
            <input
              type="date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#1C7CD6] transition resize-none"
            placeholder="Tell us about your cleaning needs..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Get Your Quote"}
        </button>
      </form>
    </div>
  );
}
