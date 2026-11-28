"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaffMember } from "../data/staff";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";
import { Mail, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";

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

  // Compute initials by removing honorifics like "Mr." or "Dr."
  const cleanTokens = member.name
    ? member.name
        .split(" ")
        .filter((t) => !["Mr.", "Mr", "Ms.", "Ms", "Mrs.", "Mrs", "Dr.", "Dr"].includes(t))
    : [];
  
  const initials =
    cleanTokens.length >= 2
      ? `${cleanTokens[0][0]}${cleanTokens[cleanTokens.length - 1][0]}`.toUpperCase()
      : cleanTokens.length === 1
      ? cleanTokens[0].slice(0, 2).toUpperCase()
      : member.name.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#090E1B]/90 hover:bg-[#0D152A] border border-white/[0.08] hover:border-blue-500/40 shadow-xl hover:shadow-[0_8px_32px_-6px_rgba(59,130,246,0.22)] transition-all duration-300"
    >
      {/* Top specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent group-hover:via-blue-400/50 transition-all duration-300" />

      <div>
        {/* Card Header: PIYROWARE Brand Badge & Role Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              PIYROWARE Leadership
            </span>
          </div>

          {member.roleTitle && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 border border-blue-500/30 text-blue-300">
              {member.roleTitle}
            </span>
          )}
        </div>

        {/* Profile Image / Monogram Container */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-slate-900/90 to-[#080D1A] border border-white/[0.06] mb-6 flex flex-col items-center justify-center group-hover:border-blue-500/30 transition-colors">
          {member.image ? (
            <Image
              src={member.image}
              alt={
                member.name === "Mr. Kishor G"
                  ? "Mr. Kishor G, CEO and Founder of PIYROWARE"
                  : member.name === "Mr. Mohammed Afhaan N"
                  ? "Mr. Mohammed Afhaan N, Director of PIYROWARE"
                  : member.name || "Executive profile photo"
              }
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : undefined}
              fetchPriority={index === 0 ? "high" : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Monogram Circle */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600/25 to-indigo-600/25 border border-blue-400/30 flex items-center justify-center mb-3 shadow-[0_0_24px_rgba(59,130,246,0.2)] group-hover:border-blue-400/60 group-hover:scale-105 transition-all duration-300">
                <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-wider">
                  {initials}
                </span>
              </div>

              {/* Verified Executive Credential Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300">
                <ShieldCheck className="w-3 h-3 text-blue-400" />
                <span>Executive Management</span>
              </div>
            </div>
          )}
        </div>

        {/* Member Name */}
        <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
          {member.profileUrl ? (
            <Link href={member.profileUrl} className="hover:underline">
              {member.name}
            </Link>
          ) : (
            member.name
          )}
        </h3>

        {/* Member Designation */}
        <p className="mt-1.5 text-xs sm:text-sm font-mono text-blue-400 font-semibold leading-relaxed">
          {member.designation || member.role}
        </p>

        {/* Bio (only if explicitly defined) */}
        {member.bio && (
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {member.bio}
          </p>
        )}

        {/* Skills (only if explicitly defined) */}
        {member.skills && member.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Area: Profile Link or Socials */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        {member.profileUrl ? (
          <Link
            href={member.profileUrl}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white group/btn transition-colors"
          >
            <span>View Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        ) : (
          <span className="text-[11px] font-mono text-slate-400">
            PIYROWARE Official
          </span>
        )}

        {hasSocials && (
          <div className="flex items-center gap-2.5">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s LinkedIn`}
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
                aria-label={`${member.name}'s GitHub`}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <SiGithub className="w-4 h-4" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
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
                aria-label={`${member.name}'s X profile`}
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
                aria-label={`${member.name}'s Website`}
                className="text-slate-400 hover:text-blue-400 transition-colors p-1"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
