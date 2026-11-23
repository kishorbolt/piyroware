"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Award,
  Code2,
  Globe,
  FileText,
  AlertCircle,
  ExternalLink,
  Info,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { COMPANY_INFO } from "@/data/siteData";
import {
  createWhatsAppUrl,
  formatCareerApplicationMessage,
  WHATSAPP_CONFIG,
} from "@/lib/whatsapp";

const POSITIONS = [
  "Full-Stack Software Engineer",
  "Frontend Engineer (React / Next.js)",
  "Backend Engineer (Node.js / Python)",
  "AI & Machine Learning Engineer",
  "Computer Vision Specialist",
  "UI/UX Designer & Engineer",
  "Mobile Application Developer",
  "Other Technical Role",
];

const EXPERIENCE_LEVELS = [
  "Entry Level / Fresher (0–1 Years)",
  "Junior Engineer (1–2 Years)",
  "Mid-Level Engineer (3–5 Years)",
  "Senior Engineer (5+ Years)",
  "Lead Architect / Technical Specialist",
];

export default function CareersContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    skills: "",
    portfolio: "",
    linkedin: "",
    github: "",
    coverLetter: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [whatsappDispatched, setWhatsappDispatched] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your contact phone number.";
    }
    if (!formData.position.trim()) {
      errors.position = "Please select the position you are applying for.";
    }
    if (!formData.experience.trim()) {
      errors.experience = "Please select your experience level.";
    }
    if (!formData.skills.trim()) {
      errors.skills = "Please list your primary technical skills.";
    }

    return errors;
  };

  const validationErrors = hasSubmitted ? validate() : {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const currentErrors = validate();
    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    // Construct formatted WhatsApp message matching exact specification
    const message = formatCareerApplicationMessage({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      technicalSkills: formData.skills,
      portfolio: formData.portfolio,
      linkedin: formData.linkedin,
      github: formData.github,
      coverLetter: formData.coverLetter,
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
    <div className="relative min-h-screen bg-[#06080F] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Ambient Radial Lights */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-[600px] right-0 w-[550px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  Careers at PIYROWARE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Join Our Engineering Team
              </h1>

              <p className="mt-4 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Build Purposeful Software & Intelligent Digital Solutions
              </p>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                We are looking for passionate engineers, creative problem solvers, and AI practitioners
                who take pride in clean code, robust architectures, and disciplined engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="pb-24 sm:pb-32 relative border-t border-white/[0.06] pt-12 sm:pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#090E1C]/90 border border-white/[0.08] p-7 sm:p-12 shadow-2xl relative">
              <div className="mb-8 pb-6 border-b border-white/[0.08]">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Application Form
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Submit your technical profile and experience. Your details will be formatted and opened in WhatsApp for review by our engineering team.
                </p>
              </div>

              {/* Status Notice Banner when WhatsApp is triggered */}
              <AnimatePresence>
                {whatsappDispatched && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-sm space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <FaWhatsapp className="w-6 h-6 text-[#25D366] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <p className="font-bold text-white text-base">
                          Your application details are ready.
                        </p>
                        <p className="text-slate-200 leading-relaxed">
                          Please review and send your message through WhatsApp. Don&apos;t forget to email your resume to{" "}
                          <a
                            href={`mailto:${COMPANY_INFO.email}?subject=Resume%20Submission%20%E2%80%93%20${encodeURIComponent(formData.fullName || "Candidate")}`}
                            className="text-[#25D366] hover:underline font-mono font-semibold inline-flex items-center gap-1"
                          >
                            <span>{COMPANY_INFO.email}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    {lastWhatsAppUrl && (
                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href={lastWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                        >
                          <span>Re-open WhatsApp Chat</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* 1. Candidate Personal & Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>1. Personal & Contact Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="career-name"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <User className="w-3.5 h-3.5 text-blue-400" />
                        <span>Full Name</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="career-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.fullName
                            ? "border-rose-500/80 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                      {validationErrors.fullName && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{validationErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="career-email"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span>Email</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="career-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.email
                            ? "border-rose-500/80 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                      {validationErrors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{validationErrors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="career-phone"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-400" />
                        <span>Phone Number</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="career-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +91 94887 93023"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.phone
                            ? "border-rose-500/80 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                      {validationErrors.phone && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{validationErrors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Role & Technical Profile */}
                <div className="space-y-6 pt-4 border-t border-white/[0.06]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>2. Role & Technical Profile</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Position Applying For */}
                    <div>
                      <label
                        htmlFor="career-position"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                        <span>Position Applying For</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <select
                        id="career-position"
                        value={formData.position}
                        onChange={(e) =>
                          setFormData({ ...formData, position: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.position
                            ? "border-rose-500/80 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-500">
                          Select a position
                        </option>
                        {POSITIONS.map((p) => (
                          <option key={p} value={p} className="bg-slate-900 text-white">
                            {p}
                          </option>
                        ))}
                      </select>
                      {validationErrors.position && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{validationErrors.position}</span>
                        </p>
                      )}
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label
                        htmlFor="career-experience"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <Award className="w-3.5 h-3.5 text-blue-400" />
                        <span>Experience Level</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <select
                        id="career-experience"
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({ ...formData, experience: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.experience
                            ? "border-rose-500/80 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-500">
                          Select experience level
                        </option>
                        {EXPERIENCE_LEVELS.map((lvl) => (
                          <option key={lvl} value={lvl} className="bg-slate-900 text-white">
                            {lvl}
                          </option>
                        ))}
                      </select>
                      {validationErrors.experience && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{validationErrors.experience}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <label
                      htmlFor="career-skills"
                      className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                    >
                      <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>Technical Skills</span>
                      <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="career-skills"
                      type="text"
                      value={formData.skills}
                      onChange={(e) =>
                        setFormData({ ...formData, skills: e.target.value })
                      }
                      placeholder="e.g. React, Next.js, TypeScript, Python, PyTorch, Node.js, Tailwind CSS"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        validationErrors.skills
                          ? "border-rose-500/80 ring-1 ring-rose-500/50"
                          : "border-white/10"
                      }`}
                    />
                    {validationErrors.skills && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{validationErrors.skills}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Online Profiles & Portfolio (Optional) */}
                <div className="space-y-6 pt-4 border-t border-white/[0.06]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                    <span>3. Online Presence & Profiles (Optional)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Portfolio */}
                    <div>
                      <label
                        htmlFor="career-portfolio"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <span>Portfolio URL</span>
                      </label>
                      <input
                        id="career-portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) =>
                          setFormData({ ...formData, portfolio: e.target.value })
                        }
                        placeholder="https://yourportfolio.dev"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label
                        htmlFor="career-linkedin"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <FaLinkedin className="w-3.5 h-3.5 text-slate-400" />
                        <span>LinkedIn URL</span>
                      </label>
                      <input
                        id="career-linkedin"
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    {/* GitHub */}
                    <div>
                      <label
                        htmlFor="career-github"
                        className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                      >
                        <FaGithub className="w-3.5 h-3.5 text-slate-400" />
                        <span>GitHub URL</span>
                      </label>
                      <input
                        id="career-github"
                        type="url"
                        value={formData.github}
                        onChange={(e) =>
                          setFormData({ ...formData, github: e.target.value })
                        }
                        placeholder="https://github.com/username"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Cover Letter (Optional) */}
                <div className="space-y-6 pt-4 border-t border-white/[0.06]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-500" />
                    <span>4. Cover Letter (Optional)</span>
                  </h3>

                  <div>
                    <label
                      htmlFor="career-cover-letter"
                      className="block text-xs font-medium text-slate-300 mb-2 flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>Cover Letter</span>
                    </label>
                    <textarea
                      id="career-cover-letter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={(e) =>
                        setFormData({ ...formData, coverLetter: e.target.value })
                      }
                      placeholder="Briefly tell us about your technical background, projects you've engineered, and what drives you..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Professional Resume Submission Note */}
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-500/[0.07] border border-blue-500/20 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">
                      Resume Submission
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      Note: Please send your updated resume to{" "}
                      <a
                        href={`mailto:${COMPANY_INFO.email}?subject=Resume%20Submission%20%E2%80%93%20${encodeURIComponent(formData.fullName || "Candidate")}`}
                        className="text-blue-400 hover:text-blue-300 font-mono underline font-medium"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.55)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Submit Application via WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                    <span>
                      Opens WhatsApp addressed to {COMPANY_INFO.phone}.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
