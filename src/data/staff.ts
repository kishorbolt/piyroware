export interface StaffMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  skills?: string[];
  linkedin?: string;
  github?: string;
  email?: string;
  twitter?: string;
  website?: string;
}

/**
 * Staff directory data for PIYROWARE.
 * 
 * To add real team members in the future, add objects matching the StaffMember interface below.
 * Images should be placed in the `/public` folder (e.g. `/staff/alex-vance.jpg`).
 * 
 * Example structure:
 * {
 *   id: "staff-01",
 *   name: "Jane Doe",
 *   role: "Senior AI Engineer",
 *   image: "/staff/jane-doe.jpg",
 *   bio: "Specializing in deep learning architectures, computer vision, and autonomous pipelines.",
 *   skills: ["PyTorch", "Python", "Computer Vision", "TensorFlow"],
 *   linkedin: "https://linkedin.com/in/janedoe",
 *   github: "https://github.com/janedoe",
 *   email: "jane@piyroware.com",
 * }
 */
export const STAFF_MEMBERS: StaffMember[] = [];
