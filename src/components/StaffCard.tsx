"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaffMember } from "../data/staff";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";
import { Mail, Globe, User } from "lucide-react";

interface StaffCardProps {
  member: StaffMember;
  index?: number;
}

export default function StaffCard({ member, index = 0 }: StaffCardProps) {
  const hasSocials = Boolean(
    member.linkedin ||
      member.github ||
      member.email ||
      member.twitter ||
      member.website
  );

  const initials = member.name
    ? member.name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 shadow-sm hover:shadow-[0_4px_24px_-4px_rgba(59,130,246,0.18)] transition-all duration-300"
    >
      {/* Subtle top edge specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-blue-400/40 transition-all duration-300" />

      <div>
        {/* Profile Image Area */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/80 border border-white/[0.06] mb-5 flex items-center justify-center">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name || "Staff photo"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent text-slate-500 group-hover:text-slate-400 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2 group-hover:border-blue-400/40 transition-colors">
                {initials ? (
                  <span className="text-base font-bold text-blue-300 font-mono tracking-wider">
                    {initials}
                  </span>
                ) : (
                  <User className="w-6 h-6 text-blue-400/80" />
                )}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                Profile Photo
              </span>
            </div>
          )}
        </div>

        {/* Member Name */}
        {member.name && (
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
            {member.name}
          </h3>
        )}

        {/* Member Role / Designation */}
        {member.role && (
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mt-1">
            {member.role}
          </p>
        )}

        {/* Short Description */}
        {member.bio && (
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {member.bio}
          </p>
        )}

        {/* Skills / Expertise */}
        {member.skills && member.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded-md group-hover:border-blue-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Social Links */}
      {hasSocials && (
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={member.name ? `${member.name}'s LinkedIn` : "LinkedIn"}
              className="text-slate-400 hover:text-blue-400 transition-colors p-1"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={member.name ? `${member.name}'s GitHub` : "GitHub"}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <SiGithub className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={member.name ? `Email ${member.name}` : "Email"}
              className="text-slate-400 hover:text-blue-400 transition-colors p-1"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={member.name ? `${member.name}'s X profile` : "X / Twitter"}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <SiX className="w-3.5 h-3.5" />
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={member.name ? `${member.name}'s Website` : "Website"}
              className="text-slate-400 hover:text-blue-400 transition-colors p-1"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
