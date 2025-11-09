import React from 'react';
import { 
    LogoIcon, PlayStoreIcon, GroupingIcon, ConnectionIcon, CollegeIcon, 
    InsightIcon, PortfolioIcon, AlumniNetworkIcon,
    MissionIcon, VisionIcon,
    ValueConnectionIcon, ValueEmpowermentIcon, ValueTransparencyIcon, ValueInnovationIcon, ValueCommunityIcon, ValueGrowthIcon,
    StudentIcon, TeacherIcon
} from '../components/IconComponents';

const HeroSection: React.FC = () => (
    <section className="pb-20 pt-10 md:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                             {/* Small screen: Logo above left content */}
                <div className="flex justify-center md:hidden mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="relative w-40 h-40 sm:w-52 sm:h-52">
                        <div className="absolute inset-0 bg-brand-primary/20 dark:bg-brand-secondary/20 rounded-full blur-3xl opacity-70"></div>
                        <img
                            src="https://res.cloudinary.com/dqppqvblk/image/upload/v1762668961/peerlynk-icon_ksgdfk.png"
                            alt="Peerlynk Illustration"
                            className="relative w-full h-full object-contain rounded-full drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] dark:drop-shadow-[0_0_20px_rgba(255,0,255,0.3)]"
                        />
                    </div>
                </div>
                {/* Left Side: Content */}
                <div className="text-center md:text-left animate-fade-in-up">
                    <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold  leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary pb-4">
                        See what’s happening on campus right now.
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 font-semibold tracking-wide">
                        Connect<span className="text-brand-primary dark:text-brand-secondary mx-2">•</span>
                        Learn<span className="text-brand-primary dark:text-brand-secondary mx-2">•</span>
                        Grow
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start">
                        <a href="/comming-soon"
                         className="inline-flex items-center justify-center space-x-3 bg-slate-800 text-white dark:bg-white dark:text-slate-900 px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                            <PlayStoreIcon className="h-7 w-7"/>
                            <span>Download App</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Logo Icon */}
                <div className="hidden md:flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                   <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-brand-primary/20 dark:bg-brand-secondary/20 rounded-full blur-3xl opacity-70"></div>
                        {/* The Icon */}
   
                        <img
  src="https://res.cloudinary.com/dqppqvblk/image/upload/v1762668961/peerlynk-icon_ksgdfk.png"
  alt="Peerlynk Illustration"
  className="relative w-full h-full object-contain rounded-full drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] dark:drop-shadow-[0_0_20px_rgba(255,0,255,0.3)]"
/>
                   </div>
                </div>
            </div>
        </div>
    </section>
);

const coreValues = [
    { icon: <ValueConnectionIcon className="h-7 w-7"/>, name: "Connection with Purpose" },
    { icon: <ValueEmpowermentIcon className="h-7 w-7"/>, name: "Empowerment through Education" },
    { icon: <ValueTransparencyIcon className="h-7 w-7"/>, name: "Transparency & Trust" },
    { icon: <ValueInnovationIcon className="h-7 w-7"/>, name: "Innovation for Impact" },
    { icon: <ValueCommunityIcon className="h-7 w-7"/>, name: "Community First" },
    { icon: <ValueGrowthIcon className="h-7 w-7"/>, name: "Student-Centric Growth" },
]

const stakeholderBenefits = [
    { icon: <StudentIcon className="h-8 w-8 text-brand-secondary"/>, title: "For Students", description: "Build your portfolio, share projects, connect with alumni, and open real opportunities." },
    { icon: <TeacherIcon className="h-8 w-8 text-brand-secondary"/>, title: "For Teachers", description: "Engage beyond classrooms, mentor students, and join academic discussions." },
    { icon: <AlumniNetworkIcon className="h-8 w-8 text-brand-secondary"/>, title: "For Alumni", description: "Give back through guidance, mentorship, and networking." },
    { icon: <CollegeIcon className="h-8 w-8 text-brand-secondary"/>, title: "For Colleges", description: "Showcase your institution, share achievements, and connect with your academic community like never before." },
]

const WhyPeerlynkSection: React.FC = () => (
    <section id="why-peerlynk" className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text mb-4">
                    Why Peerlynk?
                </h2>
                <p className="text-xl text-slate-300 font-semibold leading-relaxed">
                    Because education deserves its own network — one built for students, teachers, alumni, and colleges.
                </p>
                <p className="mt-4 text-slate-400">
                    Peerlynk isn’t just another social app; it’s a purpose-driven platform that empowers academic communities to connect, collaborate, and grow together. Where other platforms are built for entertainment, Peerlynk is built for opportunity.
                </p>
            </div>

            {/* Mission & Vision Cards */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {[
    {
      icon: <MissionIcon className="h-8 w-8" />,
      title: "Our Mission",
      desc: "To empower every student with a smart, connected, and opportunity-driven platform where learning meets networking.",
      color: "primary",
    },
    {
      icon: <VisionIcon className="h-8 w-8" />,
      title: "Our Vision",
      desc: "To become the world’s most trusted academic networking platform, where every student can learn, showcase, and grow.",
      color: "secondary",
    },
  ].map((card, index) => {
    const borderColor = card.color === "primary" ? "border-brand-primary/20" : "border-brand-secondary/20";
    const hoverBorder = card.color === "primary" ? "hover:border-brand-primary/50" : "hover:border-brand-secondary/50";
    const hoverShadow = card.color === "primary" ? "hover:shadow-2xl hover:shadow-brand-primary/20" : "hover:shadow-2xl hover:shadow-brand-secondary/20";
    const iconBg = card.color === "primary" ? "bg-brand-primary/10 text-brand-primary" : "bg-brand-secondary/10 text-brand-secondary";

    return (
      <div
        key={index}
        className={`p-8 rounded-2xl bg-gray-950 ${borderColor} shadow-lg flex flex-col items-center text-center animate-fade-in-up transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${hoverBorder} ${hoverShadow}`}
        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
      >
        <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center ${iconBg} rounded-full mb-4`}>
          {card.icon}
        </div>
        <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
        <p className="mt-2 text-slate-400">{card.desc}</p>
      </div>
    );
  })}
</div>


            {/* Core Values */}
            <div className="mt-20 max-w-5xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-10">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-lg bg-gray-950 flex items-center space-x-4 animate-fade-in-up
                            transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/20"
                            style={{ animationDelay: `${0.1 * (index + 2)}s` }}
                        >
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-primary/10 rounded-full text-brand-primary">
                                {value.icon}
                            </div>
                            <span className="font-semibold text-slate-300">{value.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stakeholder Benefits */}
            <div className="mt-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-12">Why Peerlynk Matters</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stakeholderBenefits.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg bg-gray-950 border border-brand-primary/20 shadow-lg flex items-start space-x-4 animate-fade-in-up
                            transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-brand-secondary/20"
                            style={{ animationDelay: `${0.1 * (index + 2)}s` }}
                        >
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-secondary/10 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                                <p className="mt-2 text-slate-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center max-w-4xl mx-auto">
                <p className="text-xl text-slate-300 font-semibold tracking-wide">
                    Peerlynk<span className="text-brand-primary mx-2">—</span>Where Education Meets Connection.
                </p>
            </div>
        </div>
    </section>
);




const platformFeatures = [
    {
        icon: <InsightIcon className="h-8 w-8" />,
        title: "Dynamic Insight Feed",
        description: "Share knowledge, from quick updates to in-depth articles. Build your academic reputation with every post, comment, and collaboration."
    },
    {
        icon: <PortfolioIcon className="h-8 w-8" />,
        title: "Your Digital Portfolio",
        description: "Craft a professional academic identity. Showcase your projects, skills, and coursework in a rich profile built for mentors and recruiters."
    },
    {
        icon: <ConnectionIcon className="h-8 w-8" />,
        title: "Seamless Collaboration",
        description: "Connect instantly with peers and faculty through real-time chat. Perfect for study groups, project coordination, and quick questions."
    },
    {
        icon: <GroupingIcon className="h-8 w-8" />,
        title: "Intelligent Peerhub",
        description: "No more searching. Our AI automatically connects you to relevant groups based on your course, college, and interests from day one."
    },
    {
        icon: <AlumniNetworkIcon className="h-8 w-8" />,
        title: "Alumni & Mentor Network",
        description: "Bridge the gap between campus and career. Discover and connect with experienced alumni for mentorship, internships, and guidance."
    },
    {
        icon: <CollegeIcon className="h-8 w-8" />,
        title: "Official College hubs",
        description: "A central space for institutions to share achievements, post events, and engage with their community, building a transparent campus culture."
    }
];

const FeaturesSection: React.FC = () => (
    <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text py-10 ">Everything You Need to Succeed</h2>
                <p className="mt-4 text-lg text-slate-400">
                   Peerlynk is more than a network; it's a comprehensive toolkit designed to amplify your academic journey and launch your professional career.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platformFeatures.map((feature, index) => (
                    <div key={index} className="group p-8 rounded-xl bg-gray-950 border border-slate-800 hover:border-brand-primary/50 hover:bg-gray-950/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-brand-secondary/10">
                        <div className="mb-4 text-brand-secondary">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <WhyPeerlynkSection />
            <FeaturesSection />
        </>
    );
};

export default HomePage;