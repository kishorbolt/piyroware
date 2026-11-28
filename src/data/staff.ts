export interface StaffMember {
  id: string;
  name: string;
  roleTitle?: string; // e.g. "CEO & FOUNDER", "DIRECTOR"
  role: string;       // e.g. "Chief Executive Officer & Founder, PIYROWARE."
  designation?: string;
  image?: string;
  bio?: string;
  skills?: string[];
  linkedin?: string;
  github?: string;
  email?: string;
  twitter?: string;
  website?: string;
  profileUrl?: string;
}

/**
 * Official Leadership & Management Directory of PIYROWARE.
 * Reflects verified company leadership as designated.
 */
export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: "kishor-g",
    name: "Mr. Kishor G",
    roleTitle: "CEO & FOUNDER",
    role: "Chief Executive Officer & Founder, PIYROWARE.",
    designation: "Chief Executive Officer & Founder, PIYROWARE.",
    image: "/staff/kishor-g.webp",
    profileUrl: "/team/kishor",
  },
  {
    id: "mohammed-afhaan-n",
    name: "Mr. Mohammed Afhaan N",
    roleTitle: "DIRECTOR",
    role: "Director, PIYROWARE.",
    designation: "Director, PIYROWARE.",
    profileUrl: "/team/mohammed-afhaan-n",
  },
];
