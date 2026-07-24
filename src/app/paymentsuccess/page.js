"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2, ShieldCheck, ArrowRight, Upload, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Confetti from "@/components/Confetti";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const cashfreeOrderId = searchParams.get("cashfreeOrderId");
  const userId = searchParams.get("userId");
  const cashfreePaymentId = searchParams.get("cashfreePaymentId") || searchParams.get("cf_payment_id") || searchParams.get("paymentId") || "";

  const [verificationStatus, setVerificationStatus] = useState((!orderId || !cashfreeOrderId) ? "failed" : "loading"); // loading, success, failed
  const [errorMessage, setErrorMessage] = useState((!orderId || !cashfreeOrderId) ? "Missing order parameter details from the redirection URL." : "");
  const [orderDetails, setOrderDetails] = useState(null);
  const [verifiedUserId, setVerifiedUserId] = useState("");

  // Form states for step 2 submission
  const [formData, setFormData] = useState({
    driveLink: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (!orderId || !cashfreeOrderId) {
      return;
    }

    const verifyPayment = async () => {
      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("jol_token") : null;

        const response = await fetch("https://api.journeysoflife.co/api/orders/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Jol@2026",
            ...(token ? { "Authorization": `Bearer ${token}` } : {})
          },
          body: JSON.stringify({
            orderId,
            cashfreeOrderId,
            // cashfreePaymentId
          })
        });

        const data = await response.json();
        // console.log("Verify Payment Response:", data);

        if (response.ok && data.success) {
          setVerificationStatus("success");
          setOrderDetails(data.data || null);
          const retrievedUserId = data.data?.order?.user_id || data.order?.user_id || data.data?.user_id || data.user_id || "";
          setVerifiedUserId(retrievedUserId);
        } else {
          setVerificationStatus("failed");
          setErrorMessage(data.message || "We were unable to verify your payment status.");
        }
      } catch (error) {
        console.error("Verification API Error:", error);
        setVerificationStatus("failed");
        setErrorMessage("Network error occurred during payment verification.");
      }
    };

    verifyPayment();
  }, [orderId, cashfreeOrderId, cashfreePaymentId]);

  const validateForm = () => {
    const errors = {};
    if (!formData.driveLink.trim()) {
      errors.driveLink = "URL is required";
    } else if (!formData.driveLink.startsWith("http")) {
      errors.driveLink = "Please enter a valid URL (e.g. https://drive.google.com/...)";
    }

    if (!formData.description.trim()) {
      errors.description = "Editing directions / description are required";
    } else if (formData.description.trim().length < 10) {
      errors.description = "Please describe details in at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsFormSubmitting(true);

    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("jol_token") : null;
      const response = await fetch(`https://api.journeysoflife.co/api/orders/${orderId}/files`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Jol@2026",
          ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          userId: verifiedUserId,
          description: formData.description,
          links: [formData.driveLink]
        })
      });

      const fileData = await response.json();
      console.log("Order Files API Response:", fileData);

      if (response.ok && fileData.success) {
        setIsFormSubmitted(true);
      } else {
        alert(fileData.message || "Something went wrong submitting details. Please try again.");
      }
    } catch (error) {
      console.error("Submit Files Error:", error);
      alert("Failed to submit files. Please check your internet connection.");
    } finally {
      setIsFormSubmitting(false);
    }
  };

  if (verificationStatus === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center max-w-md mx-auto">
        <div className="relative flex items-center justify-center">
          <Loader2 className="h-14 w-14 animate-spin text-primary" />
          <div className="absolute inset-[-8px] border border-primary/20 rounded-full scale-110 pulse-ring"></div>
        </div>
        <h2 className="font-cormorant text-3xl font-medium text-text-dark">
          Verifying Your Payment...
        </h2>
        <p className="font-sans text-[14.5px] leading-relaxed text-text-gray">
          Please do not close this window or navigate away while we check your transaction status.
        </p>
      </div>
    );
  }

  if (verificationStatus === "failed") {
    return (
      <div className="mx-auto max-w-lg bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_45px_-15px_rgba(110,86,68,0.15)] border border-[#6E5644]/10 text-center space-y-6 animate-fadeIn">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 border border-red-100 text-red-500">
          <XCircle size={32} />
        </div>
        <div className="space-y-3">
          <h2 className="font-cormorant text-3.5xl font-medium text-text-dark">
            Payment Verification Failed
          </h2>
          <p className="font-sans text-[14px] text-red-600 font-medium bg-red-50/50 py-2.5 px-4 rounded-xl border border-red-500/10 inline-block">
            {errorMessage}
          </p>
          <p className="font-sans text-xs text-text-gray leading-relaxed pt-2">
            If the amount was debited from your account, please keep your order reference handy: <strong className="text-text-dark">{orderId || "N/A"}</strong>. You can reach out to our team at support for assistance.
          </p>
        </div>
        <div className="pt-6 border-t border-[#6E5644]/10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/start-your-film"
            className="inline-flex justify-center items-center gap-2 bg-[#1E1B18] text-[#F8F5EF] px-7 py-3.5 rounded-full text-[12.5px] tracking-[0.14em] uppercase font-semibold transition-all duration-400 hover:bg-primary hover:text-[#1E1B18]"
          >
            Try booking again
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/"
            className="inline-flex justify-center items-center border border-[#6E5644]/20 text-text-dark px-7 py-3.5 rounded-full text-[12.5px] tracking-[0.14em] uppercase font-semibold transition-all duration-400 hover:bg-bg-tan"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (isFormSubmitted) {
    return (
      <div className="relative mx-auto max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(110,86,68,0.18)] border border-primary-light/30 text-center space-y-6 overflow-hidden">
        <Confetti />

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F5EF] border border-primary/30 relative z-20">
          <CheckCircle2 size={40} className="text-primary" />
        </div>

        <div className="space-y-4 relative z-20">
          <h2 className="font-cormorant text-4xl font-normal text-text-dark">
            Your Photos & Details Have Been Submitted!
          </h2>
          <p className="font-sans text-[16px] text-primary font-medium tracking-wide">
            Thank you for sharing your photos, videos, and project details.
          </p>
          <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-text-gray">
            Our team has received your submission and will review everything carefully. We'll reach out to you shortly to discuss the next steps and keep you updated throughout the process.
          </p>
        </div>

        <div className="pt-8 border-t border-[#6E5644]/10 relative z-20">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#1E1B18] text-[#F8F5EF] px-8 py-4 rounded-full text-[12.5px] tracking-[0.14em] uppercase font-semibold transition-all duration-400 hover:bg-primary hover:text-bg-dark"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
      {/* Left Column - Payment confirmation & instructions */}
      <div className="lg:col-span-5 space-y-6">
        {/* Verification Success Banner */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_35px_-12px_rgba(110,86,68,0.12)] border border-[#6E5644]/10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 className="font-cormorant text-2xl font-semibold text-text-dark">
                Payment Verified
              </h3>
              <p className="font-sans text-xs text-text-gray tracking-wide">
                Booking reference details saved.
              </p>
            </div>
          </div>

          <div className="pt-5 border-t border-[#6E5644]/10 space-y-3.5 text-sm text-text-dark font-sans">
            <div className="flex justify-between items-center py-0.5 border-b border-[#6E5644]/5">
              <span className="text-text-gray text-xs uppercase tracking-wider">Order ID</span>
              <span className="font-medium text-[13px]">{orderId}</span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-b border-[#6E5644]/5">
              <span className="text-text-gray text-xs uppercase tracking-wider">Cashfree Order ID</span>
              <span className="font-medium text-[13px]">{cashfreeOrderId}</span>
            </div>
            {orderDetails?.amount && (
              <div className="flex justify-between items-center py-0.5 border-b border-[#6E5644]/5">
                <span className="text-text-gray text-xs uppercase tracking-wider">Amount Paid</span>
                <span className="font-semibold text-[13.5px] text-primary">₹{orderDetails.amount} {orderDetails.currency || "INR"}</span>
              </div>
            )}
            {orderDetails?.occasion && (
              <div className="flex justify-between items-center py-0.5">
                <span className="text-text-gray text-xs uppercase tracking-wider">Occasion</span>
                <span className="font-medium text-[13.5px]">{orderDetails.occasion}</span>
              </div>
            )}
          </div>
        </div>

        {/* Informational Guidance */}
        <div className="bg-[#EFE7DA]/50 rounded-3xl p-6 md:p-8 border border-[#B38A42]/15 space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck size={18} />
            <h4 className="font-cormorant text-lg font-bold uppercase tracking-wider">
              Step-by-Step Instructions
            </h4>
          </div>
          <p className="font-sans text-[13px] leading-relaxed text-text-gray">
            Please compile the photos and memories you want to include in your family film and upload them to Google Drive, Dropbox, or OneDrive.
          </p>
          <div className="flex items-start gap-2.5 pt-1.5">
            <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0">1</div>
            <p className="font-sans text-xs leading-relaxed text-text-gray">
              Create a folder and name it (e.g., &quot;Our Family Story Assets&quot;).
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0">2</div>
            <p className="font-sans text-xs leading-relaxed text-text-gray">
              Set folder permissions to <strong className="text-text-dark font-semibold">Anyone with link can view</strong> or share/give access to <strong className="text-text-dark font-semibold">support@journeysoflife.co</strong>.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0">3</div>
            <p className="font-sans text-xs leading-relaxed text-text-gray">
              Copy and paste the shareable link into the form on the right.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Project details form */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_-15px_rgba(110,86,68,0.12)] border border-[#6E5644]/10">
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold block mb-2">Step 2 of 2</span>
          <h2 className="font-cormorant text-3.5xl md:text-4xl font-medium text-text-dark">
            Tell Us Your Story
          </h2>
          <p className="font-sans text-xs text-text-gray mt-1.5 leading-relaxed">
            Provide the assets and details our creative storytellers need to begin editing your film.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Drive Link field */}
          <div className="space-y-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="driveLink" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                Google Drive / Dropbox / OneDrive Link
              </label>
              <p className="text-xs text-text-gray font-normal leading-relaxed">
                Provide the folder URL containing all project assets (photos, videos, reference materials, and any other relevant files).
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-primary font-normal font-sans pt-0.5">
                <Info size={13} className="shrink-0 text-primary" />
                <span>Share access with <strong className="font-semibold">support@journeysoflife.co</strong> or ensure the link is set to public.</span>
              </div>
            </div>
            <input
              id="driveLink"
              type="url"
              value={formData.driveLink}
              onChange={(e) => {
                setFormData({ ...formData, driveLink: e.target.value });
                if (formErrors.driveLink) setFormErrors({ ...formErrors, driveLink: "" });
              }}
              placeholder="e.g. https://drive.google.com/drive/folders/..."
              className={`w-full rounded-xl border px-4 py-3.5 text-sm font-sans outline-none transition duration-300 ${formErrors.driveLink
                ? "border-red-400 bg-red-50/10 focus:border-red-500 focus:ring-4 focus:ring-red-500/5"
                : "border-[#6E5644]/20 bg-[#F8F5EF]/30 focus:border-primary focus:ring-4 focus:ring-primary/5"
                }`}
            />
            {formErrors.driveLink && <p className="text-xs text-red-500 font-sans mt-1">{formErrors.driveLink}</p>}
          </div>

          {/* Description field */}
          <div className="space-y-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                Creative Vision &amp; Special Instructions
              </label>
              <p className="text-xs text-text-gray font-normal leading-relaxed">
                Share your project details, creative vision, timeline, preferred style, and any special requirements or instructions for your film.
              </p>
            </div>
            <textarea
              id="description"
              rows={6}
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                if (formErrors.description) setFormErrors({ ...formErrors, description: "" });
              }}
              placeholder="Please share special instructions (e.g., chronological order, focus on grandfather's speech at the 20th minute, include wedding anniversary dates, etc.)..."
              className={`w-full rounded-xl border px-4 py-3.5 text-sm font-sans outline-none transition duration-300 resize-y ${formErrors.description
                ? "border-red-400 bg-red-50/10 focus:border-red-500 focus:ring-4 focus:ring-red-500/5"
                : "border-[#6E5644]/20 bg-[#F8F5EF]/30 focus:border-primary focus:ring-4 focus:ring-primary/5"
                }`}
            />
            {formErrors.description && <p className="text-xs text-red-500 font-sans mt-1">{formErrors.description}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isFormSubmitting}
            className="w-full cursor-pointer rounded-full bg-[#1E1B18] text-[#F8F5EF] py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-400 hover:bg-primary hover:text-[#1E1B18] disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {isFormSubmitting ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                <span>Submitting Your Project...</span>
              </>
            ) : (
              <>
                <Upload size={14} />
                <span>Complete Request &amp; Submit</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div >
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="relative flex-grow bg-bg-cream pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        {/* Subtle decorative background gradient matching home page hero styling */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,179,106,0.08),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative z-10">
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="font-sans text-sm text-text-gray tracking-wide animate-pulse">Loading verification context...</p>
            </div>
          }>
            <PaymentSuccessContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
