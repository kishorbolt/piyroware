/**
 * PIYROWARE Official WhatsApp Integration Utility
 *
 * Single official destination number: +91 94887 93023 (wa.me format: 919488793023)
 * Provides centralized message encoding and wa.me link generation.
 */

export const WHATSAPP_CONFIG = {
  rawNumber: "919488793023",
  formattedNumber: "+91 94887 93023",
  telUri: "tel:+919488793023",
  directUrl: "https://wa.me/919488793023",
  email: "piyroware@gmail.com",
  location: "Tamil Nadu, India",
} as const;

/**
 * Encodes a message string and generates a valid WhatsApp Click-to-Chat URL
 * using the official PIYROWARE destination number.
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.rawNumber}?text=${encoded}`;
}

export interface ContactEnquiryPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Formats a standardized contact enquiry message for WhatsApp.
 */
export function formatContactEnquiryMessage(payload: ContactEnquiryPayload): string {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const subject = payload.subject?.trim() || "General Software & AI Enquiry";
  const message = payload.message.trim();

  return [
    "NEW WEBSITE ENQUIRY – PIYROWARE",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Message: ${message}`,
    "",
    "Source: PIYROWARE Official Website",
  ].join("\n");
}

export interface CareerApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  technicalSkills: string;
  portfolio?: string;
  linkedin?: string;
  github?: string;
  coverLetter?: string;
}

/**
 * Formats a standardized career application message for WhatsApp.
 */
export function formatCareerApplicationMessage(payload: CareerApplicationPayload): string {
  const fullName = payload.fullName.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const position = payload.position.trim();
  const experience = payload.experience.trim();
  const technicalSkills = payload.technicalSkills.trim();
  const portfolio = payload.portfolio?.trim() || "Not provided";
  const linkedin = payload.linkedin?.trim() || "Not provided";
  const github = payload.github?.trim() || "Not provided";
  const coverLetter = payload.coverLetter?.trim() || "Not provided";

  return [
    "NEW CAREER APPLICATION – PIYROWARE",
    "",
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Position: ${position}`,
    `Experience: ${experience}`,
    `Technical Skills: ${technicalSkills}`,
    `Portfolio: ${portfolio}`,
    `LinkedIn: ${linkedin}`,
    `GitHub: ${github}`,
    "",
    "Cover Letter:",
    coverLetter,
    "",
    "Source: PIYROWARE Careers Page",
  ].join("\n");
}
