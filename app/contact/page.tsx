/**
 * Contact Page - Beautiful & Interactive Design
 * Contact form and information
 */

"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-12 py-12 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center gap-6 text-center py-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B207]/5 via-transparent to-blue-500/5 dark:from-[#00B207]/10 dark:to-blue-500/10 rounded-3xl" />
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#00B207]/10 dark:bg-[#00B207]/20 text-[#00B207] rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full px-6">
        {/* Contact Form */}
        <div className="relative group">
          {/* Animated Background */}
          <div className="absolute rounded-3xl" />

          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h2>
              <p className="text-gray-600 dark:text-gray-300">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-6 animate-fadeIn">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#00B207]/10 dark:bg-[#00B207]/20 flex items-center justify-center animate-scaleIn">
                    <div className="w-16 h-16 rounded-full bg-[#00B207] flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#00B207] animate-ping opacity-20" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                  Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                </p>
                <Button
                  className="bg-[#00B207] text-white font-semibold px-8 py-6 text-base"
                  onPress={() => setSubmitted(false)}
                  size="lg"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    isRequired
                    label="Full Name"
                    labelPlacement="outside"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    classNames={{
                      input: "text-base dark:text-white",
                      inputWrapper: "h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600",
                      label: "dark:text-gray-200"
                    }}
                  />

                  <Input
                    isRequired
                    label="Email Address"
                    labelPlacement="outside"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    classNames={{
                      input: "text-base dark:text-white",
                      inputWrapper: "h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600",
                      label: "dark:text-gray-200"
                    }}
                  />
                </div>

                <Input
                  isRequired
                  label="Subject"
                  labelPlacement="outside"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  classNames={{
                    input: "text-base dark:text-white",
                    inputWrapper: "h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600",
                    label: "dark:text-gray-200"
                  }}
                />

                <Textarea
                  isRequired
                  label="Your Message"
                  labelPlacement="outside"
                  minRows={5}
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  classNames={{
                    input: "text-base dark:text-white",
                    inputWrapper: "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600",
                    label: "dark:text-gray-200"
                  }}
                />

                <Button
                  className="bg-[#00B207] text-white font-semibold text-base h-12 hover:bg-[#00B207]/90 transform hover:scale-[1.02] transition-all"
                  isLoading={isSubmitting}
                  size="lg"
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="flex flex-col gap-6">
          {/* Customer Service Card */}
          <div className="relative group">
            <div className="absolute rounded-3xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00B207]/10 dark:bg-[#00B207]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-7 h-7 text-[#00B207]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Customer Service</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                      <a href="mailto:support@shopery.com" className="font-semibold text-gray-900 dark:text-white hover:text-[#00B207] transition-colors">
                        support@shopery.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                      <a href="tel:+12195550114" className="font-semibold text-gray-900 dark:text-white hover:text-[#00B207] transition-colors">
                        (219) 555-0114
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Business Hours</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Weekend: 10:00 AM - 4:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address Card */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Office Address</h3>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Shopery Headquarters</p>
                    <p>123 Commerce Street</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Quick Links Card */}
          <div className="relative group">
            <div className="absolute rounded-3xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect With Us</h3>

              {/* Social Media Icons */}
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-10 h-10 rounded-xl bg-[#00B207]/10 dark:bg-[#00B207]/20 hover:bg-[#00B207] flex items-center justify-center transition-colors group/social">
                  <svg className="w-5 h-5 text-[#00B207] group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 hover:bg-blue-500 flex items-center justify-center transition-colors group/social">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 hover:bg-pink-500 flex items-center justify-center transition-colors group/social">
                  <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/20 hover:bg-red-600 flex items-center justify-center transition-colors group/social">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              {/* Quick Links */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Quick Links</p>
                <a className="block text-gray-700 dark:text-gray-300 hover:text-[#00B207] transition-colors font-medium" href="/about">
                  → About Us
                </a>
                <a className="block text-gray-700 dark:text-gray-300 hover:text-[#00B207] transition-colors font-medium" href="/shop">
                  → Shop Now
                </a>
                <a className="block text-gray-700 dark:text-gray-300 hover:text-[#00B207] transition-colors font-medium" href="#">
                  → Shipping & Returns
                </a>
                <a className="block text-gray-700 dark:text-gray-300 hover:text-[#00B207] transition-colors font-medium" href="#">
                  → FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
