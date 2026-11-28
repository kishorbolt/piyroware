"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  User,
  FileText,
  MessageSquare,
  MessageCircle,
  ExternalLink,
  Info,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { COMPANY_INFO } from "../data/siteData";
import {
  createWhatsAppUrl,
  formatContactEnquiryMessage,
  WHATSAPP_CONFIG,
} from "../lib/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [whatsappDispatched, setWhatsappDispatched] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter your message.";
    }

    return errors;
  };

  const validationErrors = hasSubmitted ? validate() : {};
  const isValid = Object.keys(validate()).length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const currentErrors = validate();
    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    // Construct the formatted WhatsApp message
    const message = formatContactEnquiryMessage({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    const url = createWhatsAppUrl(message);
    setLastWhatsAppUrl(url);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    setWhatsappDispatched(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-white/[0.08]">
      {/* Background Subtle Glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Official Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Get In Touch
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                Let&apos;s Build Something Meaningful.
              </motion.h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Have a software idea or AI challenge you want to address? Reach out and connect directly
                with our team via WhatsApp or email.
              </p>
            </div>

            {/* Official Contact Channels */}
            <div className="space-y-3.5 pt-2">
              {/* WhatsApp Primary Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#090E1B] border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Direct WhatsApp
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Official Business
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="flex items-center gap-3 text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <span>{COMPANY_INFO.phone}</span>
                  </a>

                  <a
                    href={WHATSAPP_CONFIG.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-all shrink-0 cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  Available for instant consultations on custom software architectures and AI initiatives.
                </p>
              </div>

              {/* Phone Direct */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090E1B] border border-white/[0.08] hover:border-blue-500/30 transition-all flex items-center justify-between gap-4">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone Call
                    </span>
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.phoneTel}
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 underline"
                >
                  Call Now
                </a>
              </div>

              {/* Email Direct */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090E1B] border border-white/[0.08] hover:border-blue-500/30 transition-all flex items-center justify-between gap-4">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors truncate"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Official Email
                    </span>
                    <span className="truncate">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 underline shrink-0"
                >
                  Send Mail
                </a>
              </div>

              {/* Location */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090E1B] border border-white/[0.08] flex items-center gap-3 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Headquarters
                  </span>
                  <span className="text-white font-medium">{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#090E1C]/90 border border-white/[0.08] p-7 sm:p-10 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Contact Enquiry Form
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Fill in your details below to dispatch your enquiry directly to PIYROWARE&apos;s official WhatsApp channel.
                </p>
              </div>

              {/* WhatsApp Instruction Notice Banner */}
              <AnimatePresence>
                {whatsappDispatched && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <FaWhatsapp className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold text-white">
                          WhatsApp has opened with your pre-filled enquiry.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                          Please press <strong className="text-emerald-400 font-bold">Send</strong> inside
                          WhatsApp to deliver your message to PIYROWARE. Your entered details remain preserved
                          below if you need to make changes.
                        </p>
                      </div>
                    </div>

                    {lastWhatsAppUrl && (
                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href={lastWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                        >
                          <span>Re-open WhatsApp Chat</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      <span>Name</span>
                      <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        validationErrors.name ? "border-rose-500/80 ring-1 ring-rose-500/50" : "border-white/10"
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{validationErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>Email</span>
                      <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        validationErrors.email ? "border-rose-500/80 ring-1 ring-rose-500/50" : "border-white/10"
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{validationErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject (Optional) */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>Subject</span>
                    <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Custom AI Model Development or Web Platform"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                    <span>Message</span>
                    <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements, technical goals, or questions..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                      validationErrors.message ? "border-rose-500/80 ring-1 ring-rose-500/50" : "border-white/10"
                    }`}
                  />
                  {validationErrors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{validationErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 active:scale-[0.99] shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border border-blue-400/30"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Send</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                    <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>
                      Opens WhatsApp with your pre-formatted message addressed to {COMPANY_INFO.phone}.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
