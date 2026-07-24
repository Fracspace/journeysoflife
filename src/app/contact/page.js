"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { load } from "@cashfreepayments/cashfree-js";
import { Upload, ShieldCheck, Sparkles, Loader2 } from "lucide-react";

import img2 from "../../../public/assets/contact/img1.png";
import img1 from "../../../public/assets/contact/img3.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    occasion: "",
    description: ""
  });

  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber =
        "Please enter a valid phone number (e.g. +919876543210)";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.occasion.trim()) {
      newErrors.occasion = "Occasion is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description =
        "Please describe the film details in at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // console.log("ocasion", formData?.occasion);

    try {
      const response = await fetch(
        "https://api.journeysoflife.co/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Jol@2026"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            occasion: formData.occasion,
            description: formData.description
          })
        }
      );

      const data = await response.json();
      // console.log("API Response:", data);

      if (data.success) {
        const userId = data.data?.user?.id;
        const occasion = data.data?.user?.occasion;
        const token = data.data?.token;

        if (token) {
          localStorage.setItem("jol_token", token);
        }

        if (userId && occasion) {
          try {
            const orderResponse = await fetch(
              "https://api.journeysoflife.co/api/orders",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key": "Jol@2026",
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                  userId: userId,
                  amount: 24999, // Test amount
                  currency: "INR",
                  occasion: occasion
                })
              }
            );

            const orderData = await orderResponse.json();
            // console.log("Order API Response:", orderData);

            if (orderResponse.ok) {
              const paymentSessionId =
                orderData.data?.payment_session_id ||
                orderData.payment_session_id;
              if (paymentSessionId) {
                const cashfree = await load({
                  mode: "production"
                });
                await cashfree.checkout({
                  paymentSessionId: paymentSessionId,
                  redirectTarget: "_self"
                });
              } else {
                console.error(
                  "No payment session ID found in order response",
                  orderData
                );
                alert("Failed to initiate payment. Please contact support.");
              }
            } else {
              // console.error("Order API request error:", orderData);
              alert(
                orderData.message ||
                "Failed to create payment order. Please try again."
              );
            }
          } catch (orderError) {
            // console.error("Error calling Order API:", orderError);
            alert("Error creating payment order. Please try again.");
          }
        } else {
          alert("Could not retrieve user details to initialize order.");
        }
      } else {
        alert(
          data.message || "Failed to register user. Please check your inputs."
        );
      }
    } catch (error) {
      // console.error("API Call Error:", error);
      alert(error.message || "Failed to register user. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <main className="bg-bg-cream min-h-screen pt-32 pb-20 md:pb-28 flex flex-col justify-center">
          <div className="mx-auto max-w-3xl px-6 w-full">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-[#6E5644]/10 text-center space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-bg-cream border border-primary/30">
                <ShieldCheck size={40} className="text-primary" />
              </div>

              <div className="space-y-3">
                <h2 className="font-cormorant text-3xl font-bold text-text-dark">
                  Thank You, {formData.name.split(" ")[0]}!
                </h2>
                <p className="font-sans text-base text-primary font-medium">
                  Your cinematic film request has been registered successfully.
                </p>
                <p className="mx-auto max-w-md font-sans text-sm leading-6 text-text-gray">
                  Our creative team will review your details. We will contact
                  you at <strong>{formData.email}</strong> or{" "}
                  <strong>{formData.phoneNumber}</strong> within 24 hours to
                  plan your custom legacy film.
                </p>
                <div className="mt-4 p-4 bg-bg-cream border border-[#6E5644]/10 rounded-xl text-left text-xs text-text-gray">
                  <p className="font-semibold text-text-dark mb-1">
                    Response details:
                  </p>
                  <p>
                    The registration API returned a success status. Please
                    inspect your browser's Developer Tools Console to view the
                    response payload.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#6E5644]/15">
                <Link
                  href="/"
                  className="inline-block rounded-full bg-bg-dark px-8 py-3.5 text-xs font-semibold uppercase tracking-[1px] text-bg-cream hover:bg-primary hover:text-bg-dark transition duration-300"
                >
                  Go Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative flex-1">
        {/* ============ HERO ============ */}
        <section className="relative bg-gradient-to-r from-bg-cream to-bg-tan pt-[158px] pb-[90px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(214,179,106,0.1),transparent_45%)] pointer-events-none"></div>
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-10">
            <div className="max-w-[560px]">
              <Reveal className="flex items-center gap-3.5 mb-4">
                <span className="w-9 h-[1px] bg-primary"></span>
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">
                  Start Your Film
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  Begin your
                  <br />
                  <span className="italic text-primary">journey.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  Provide your details and complete the amount of ₹24,999. Once
                  you fill this form and pay, you will be redirected to a
                  success page to upload your images and describe how you want
                  your cinematic film to be.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot
                src={img1}
                id="contact-hero"
                shape="rect"
                placeholder="Family sharing a warm moment · golden hour"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT FORM ============ */}
        <section className="py-[90px] pb-[110px] bg-bg-cream">
          <div className="max-w-[1180px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
            {/* Form */}
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-11 shadow-[0_26px_60px_-32px_rgba(110,86,68,0.5)] border border-[#6E5644]/10"
              >
                <h2 className="font-cormorant font-semibold text-[34px] mb-1.5 text-text-dark">
                  Start Your Film
                </h2>
                <p className="text-[14.5px] text-text-gray mb-7.5">
                  Step 1: Contact Details &amp; Booking Payment
                </p>

                {/* Name */}
                <div className="mb-4.5">
                  <label className="block">
                    <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                      Full Name
                    </span>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Enter your name"
                      className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none transition-colors focus:border-primary ${errors.name
                        ? "border-red-500 bg-red-50/10 focus:border-red-500"
                        : "border-[#6E5644]/18"
                        }`}
                    />
                  </label>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 font-sans">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mb-4.5">
                  <div>
                    <label className="block">
                      <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                        Phone Number
                      </span>
                      <input
                        required
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value
                          });
                          if (errors.phoneNumber)
                            setErrors({ ...errors, phoneNumber: "" });
                        }}
                        placeholder="+919876543210"
                        className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none transition-colors focus:border-primary ${errors.phoneNumber
                          ? "border-red-500 bg-red-50/10 focus:border-red-500"
                          : "border-[#6E5644]/18"
                          }`}
                      />
                    </label>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500 font-sans">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block">
                      <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                        Email Address
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="you@example.com"
                        className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none transition-colors focus:border-primary ${errors.email
                          ? "border-red-500 bg-red-50/10 focus:border-red-500"
                          : "border-[#6E5644]/18"
                          }`}
                      />
                    </label>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-sans">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4.5">
                  <label className="block">
                    <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                      Address
                    </span>
                    <textarea
                      required
                      name="address"
                      rows="2"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (errors.address)
                          setErrors({ ...errors, address: "" });
                      }}
                      placeholder="Enter your full address"
                      className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none resize-none transition-colors focus:border-primary ${errors.address
                        ? "border-red-500 bg-red-50/10 focus:border-red-500"
                        : "border-[#6E5644]/18"
                        }`}
                    />
                  </label>
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-500 font-sans">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Occasion */}
                <div className="mb-4.5">
                  <label className="block">
                    <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                      Occasion
                    </span>
                    <select
                      required
                      name="occasionSelect"
                      value={selectedOccasion}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedOccasion(val);
                        if (val !== "other") {
                          setFormData({ ...formData, occasion: val });
                        } else {
                          setFormData({ ...formData, occasion: "" });
                        }
                        if (errors.occasion)
                          setErrors({ ...errors, occasion: "" });
                      }}
                      className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none transition-colors focus:border-primary ${errors.occasion
                        ? "border-red-500 bg-red-50/10 focus:border-red-500"
                        : "border-[#6E5644]/18"
                        }`}
                    >
                      <option value="">Select an occasion</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="ChildGrowth">ChildGrowth</option>
                      <option value="MemoryFilm">MemoryFilm</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  {errors.occasion && (
                    <p className="mt-1 text-xs text-red-500 font-sans">
                      {errors.occasion}
                    </p>
                  )}
                </div>

                {/* Custom Occasion Input */}
                {selectedOccasion === "other" && (
                  <div className="mb-4.5 animate-fadeIn">
                    <label className="block">
                      <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                        Specify Occasion
                      </span>
                      <input
                        required
                        type="text"
                        name="customOccasion"
                        value={formData.occasion}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            occasion: e.target.value
                          });
                          if (errors.occasion)
                            setErrors({ ...errors, occasion: "" });
                        }}
                        placeholder="Please specify the occasion"
                        className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none transition-colors focus:border-primary ${errors.occasion
                          ? "border-red-500 bg-red-50/10 focus:border-red-500"
                          : "border-[#6E5644]/18"
                          }`}
                      />
                    </label>
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <label className="block">
                    <span className="block text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold mb-2">
                      Describe your film, timeline, and any special
                      instructions.
                    </span>
                    <textarea
                      required
                      name="description"
                      rows="3"
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          description: e.target.value
                        });
                        if (errors.description)
                          setErrors({ ...errors, description: "" });
                      }}
                      placeholder="Describe the cinematic film details or legacy instructions..."
                      className={`w-full bg-bg-cream border rounded-xl px-4 py-3.5 text-[14.5px] text-text-dark outline-none resize-y transition-colors focus:border-primary ${errors.description
                        ? "border-red-500 bg-red-50/10 focus:border-red-500"
                        : "border-[#6E5644]/18"
                        }`}
                    />
                  </label>
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-500 font-sans">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Redirection / Step 2 Alert */}
                <div className="bg-[#EFE7DA]/50 border border-[#B38A42]/15 rounded-xl p-4 text-[12px] leading-relaxed text-text-gray mb-6 flex gap-2.5">
                  <svg
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>
                    Once you fill this form and pay the amount, you will be
                    automatically redirected to a secure page to upload your
                    memories/images and describe how you want your film to be.
                  </span>
                </div>

                {/* Booking Amount */}
                <div className="bg-bg-cream border border-[#6E5644]/18 rounded-xl p-4 flex justify-between items-center text-sm mb-6.5">
                  <span className="text-text-gray font-semibold">Amount:</span>
                  <span className="font-semibold text-lg text-text-dark">
                    ₹24,999
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4.5 rounded-full text-[12px] tracking-[0.16em] uppercase font-semibold transition-all duration-400 cursor-pointer flex items-center justify-center gap-2 ${isSubmitting
                    ? "bg-neutral-400 text-bg-dark cursor-not-allowed"
                    : "bg-bg-dark text-bg-cream hover:bg-primary hover:text-bg-dark"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4 text-bg-dark" />
                      <span>Opening Payment Gateway...</span>
                    </>
                  ) : (
                    <>
                      <Upload size={18} />
                      <span>Pay ₹24,999 TO START MAKING YOUR FILM</span>
                    </>
                  )}
                </button>
              </form>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={0.08} className="flex flex-col gap-7">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_66px_-32px_rgba(110,86,68,0.55)]">
                <ImageSlot
                  src={img2}
                  id="contact-side"
                  shape="rect"
                  placeholder="Grandparents & grandchildren · warm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 to-transparent pointer-events-none"></div>
                <p className="absolute left-6 bottom-5.5 right-6 font-caveat text-[26px] text-bg-cream">
                  Some stories deserve more than a photo album.
                </p>
              </div>

              <div className="flex flex-col gap-4.5">
                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-full bg-bg-tan flex items-center justify-center flex-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B38A42"
                      strokeWidth="1.5"
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold">
                      Email
                    </div>
                    <div className="text-[15px] text-text-dark font-medium">
                      support@journeysoflife.co
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-full bg-bg-tan flex items-center justify-center flex-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B38A42"
                      strokeWidth="1.5"
                    >
                      <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold">
                      Phone &amp; WhatsApp
                    </div>
                    <div className="text-[15px] text-text-dark font-medium">
                      +91 92479 52344
                    </div>
                  </div>
                </div>

                {/* Studio */}
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-full bg-bg-tan flex items-center justify-center flex-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B38A42"
                      strokeWidth="1.5"
                    >
                      <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold">
                      Studio
                    </div>
                    <div className="text-[15px] text-text-dark font-medium">
                      Banjara Hills, Hyderabad · By appointment
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
