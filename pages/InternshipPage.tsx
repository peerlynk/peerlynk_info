import React from "react";

const testimonials = [
  {
    quote:
      "Working at Peerlynk was an incredible learning experience. I was given real responsibility from day one and felt like a true member of the team. The mentorship I received was invaluable.",
    name: "Diwakar Singh",
    role: "Software Engineer Intern, Summer 2025",
  },
  {
    quote:
      "The collaborative environment at Peerlynk is amazing. I had the chance to work on user-facing features and see my code go live. It was a challenging yet rewarding internship that prepared me for my career.",
    name: "Akash Kumar ",
    role: "Product Design Intern, Summer 2025",
  },
];

const InternshipPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-20">
        {/* Header Section */}
        <header className="text-center max-w-4xl mx-auto animate-fade-in-up ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text ">
            Peerlynk Internship Program
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Gain hands-on experience and make a real impact on the future of academic technology. 
            Our internship program is designed for ambitious students eager to learn, grow, 
            and contribute to a fast-paced, innovative environment.
          </p>
        </header>

        {/* What We Offer */}
        <section className="mt-20 max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-World Projects",
                desc: "Work on meaningful projects that directly contribute to the Peerlynk platform. You’ll be building real features that impact users.",
              },
              {
                title: "Mentorship",
                desc: "Receive one-on-one guidance from experienced engineers, designers, and mentors who help you grow both technically and professionally.",
              },
              {
                title: "Networking Opportunities",
                desc: "Connect with our team and other interns. Build a professional network that will last well beyond the internship.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24 max-w-5xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-brand-secondary to-brand-primary text-transparent bg-clip-text">
            Hear From Our Past Interns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-secondary/40 transition-all duration-300"
              >
                <blockquote className="text-slate-300 italic leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Apply Section */}
{/* Apply Section */}
<section className="mt-24 max-w-4xl mx-auto animate-fade-in-up">
  <p className="text-slate-400 text-center max-w-2xl mx-auto leading-relaxed mb-6">
    Ready to make an impact? Fill out the form below to apply for our next internship cohort.
  </p>
  <div className="flex justify-center">
    <a
      href="https://forms.gle/L6jc1ArpU32sciYv9"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    >
      Apply Now
    </a>
  </div>

  <p className="mt-6 text-center text-slate-400 text-sm">
    Have questions? Contact us at{" "}
    <a
      href="mailto:peerlynk@gmail.com"
      className="text-brand-secondary hover:underline"
    >
      peerlynk@gmail.com
    </a>
  </p>
</section>


        {/* Footer */}
        <footer className="mt-24 text-center text-slate-500 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — empowering students to learn, connect, and grow through 
            meaningful real-world experiences.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default InternshipPage;
