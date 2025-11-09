import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  gmail?: string;
  linkedin?: string;
  instagram?: string;
  x?: string; // X (Twitter)
}

const teamMembers: TeamMember[] = [
  {
    name: "Dhruv Pal",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/dqppqvblk/image/upload/v1762668962/dhruvpal_fd00uj.jpg",
    bio: "Founder and visionary leader who single-handedly conceptualized, designed, and built the entire Peerlynk platform from the ground up. Combines technical expertise with strategic thinking to turn innovative ideas into fully functional, scalable solutions.",
    gmail: "mailto:dhruvpalpeerlynk@gmail.com",
    linkedin: "https://linkedin.com/in/dhruvpal",
    instagram: "https://instagram.com/dhruvpal",
    x: "https://x.com/dhruvpal",
  },
  {
    name: "Diwakar Singh",
    role: "Full-Stack Engineer",
    image: "https://res.cloudinary.com/dqppqvblk/image/upload/v1762668962/diwakarSingh_mzueoi.jpg",
    bio: "Problem-solving enthusiast with expertise in full-stack development and DSA. Builds robust, efficient systems and contributes to high-performance, scalable applications.",
    gmail: "mailto:diwakar.peerlynk@gmail.com",
    linkedin: "https://linkedin.com/in/diwakar-singh",
    instagram: "https://instagram.com/diwakar.singh",
    x: "https://x.com/diwakar_singh",
  },
  {
    name: "Akash Kumar",
    role: "Full-Stack Engineer",
    image: "https://res.cloudinary.com/dqppqvblk/image/upload/v1762668962/akashKumar_jyzzn5.jpg",
    bio: "Web full-stack developer skilled in designing seamless and engaging user experiences. Strong background in DSA and creating scalable, maintainable applications.",
    gmail: "mailto:akash.peerlynk@gmail.com",
    linkedin: "https://linkedin.com/in/akashkumar",
    instagram: "https://instagram.com/akashkumar",
    x: "https://x.com/akashkumar",
  },
  {
    name: "Ankit Pal",
    role: "Head of Sales & Marketing",
    image: "https://res.cloudinary.com/dqppqvblk/image/upload/v1762668962/ankitpal_otv1v7.jpg",
    bio: "Expert in driving growth and building strategic relationships. Focuses on delivering intelligent marketing solutions that enhance user engagement and platform adoption.",
    gmail: "mailto:ankit.peerlynk@gmail.com",
    linkedin: "https://linkedin.com/in/ankitpal",
    instagram: "https://instagram.com/ankitpal",
    x: "https://x.com/ankitpal",
  },
];

const TeamPage: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a0a] to-black min-h-screen text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          Meet Our Team
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Our team is made up of passionate individuals dedicated to building
          the future of student networking. Together, we’re shaping a connected
          educational world.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-gray-950 border border-slate-800 shadow-lg 
                 transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 
                 hover:shadow-2xl hover:shadow-brand-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Glow behind image */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-36 bg-brand-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>

              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-slate-700 shadow-md"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-brand-primary font-medium mb-2">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-5 mt-4">
                {member.gmail && (
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900 border border-slate-700 
                      hover:border-brand-primary hover:text-brand-primary hover:shadow-brand-primary/30 
                      transition-all duration-300 hover:scale-110"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900 border border-slate-700 
                      hover:border-brand-primary hover:text-brand-primary hover:shadow-brand-primary/30 
                      transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900 border border-slate-700 
                      hover:border-brand-primary hover:text-brand-primary hover:shadow-brand-primary/30 
                      transition-all duration-300 hover:scale-110"
                  >
                    <FaXTwitter size={20} />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900 border border-slate-700 
                      hover:border-brand-primary hover:text-brand-primary hover:shadow-brand-primary/30 
                      transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram size={20}  />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-brand-primary text-black font-semibold hover:opacity-95 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300"
          >
            Join Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
