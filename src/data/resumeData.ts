export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  thumbnail: string;
  technologies: string[];
  description: string;
  impact: string;
  attachments: {
    pdf?: string;
    pdfLabel?: string;
    presentation?: string;
    presentationLabel?: string;
    github?: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  highlights?: string[];
  gpa?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ProfessionalExperience {
  id: string;
  role: string;
  organization: string;
  description: string;
  duration: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  about: string;
  strengths: string[];
  philosophy?: string;
  education: Education[];
  projects: Project[];
  professionalExperiences: ProfessionalExperience[];
  skills: SkillCategory[];
  profileImage: string;
  resumeUrl: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    website: string;
  };
}

export const resumeData: ResumeData = {
  name: "Adhindra VS",
  title: "Aerospace & Mechanical Engineer",
  summary: "Passionate engineer specializing in bioastronautics, space mission and spacecraft design, astrodynamics, additive manufacturing, CAD/CAE, Python, and structural analysis.",
  about: "Hi, I’m Adhindra VS — a mechanical engineer and aspiring aerospace engineer and researcher driven by curiosity at the intersection of design, simulation, and space systems. With experience spanning computational modeling, composite materials research, and hands-on prototyping, I enjoy transforming complex engineering concepts into tangible, high-performance solutions. My work integrates analytical rigor with experimental validation, from 3D-printed composite structures to rocket and space system design. Passionate about advancing aerospace technologies, I seek opportunities where I can contribute to innovative research and engineering solutions that push the boundaries of flight and space exploration.",
  strengths: [
    "Space Mission Design & Systems Engineering",
    "Advanced Additive Manufacturing (FDM, Composites)",
    "Astrodynamics and Satellite Navigation",
    "Bio-Astronautics and Robotics",
    "Technical Leadership & Project Management",
    "Mechanical Design and Analysis"
  ],
  education: [
    {
      institution: "University of Colorado Boulder",
      degree: "Master of Science in Aerospace Engineering Sciences",
      duration: "2025 - Present (Expected Dec 2026)",
      highlights: [
        "Focus on Bioastronautics",
        "Additional Focus on Astrodynamics, Satellite Navigation and Project Management",
        "Special interest in spaceflight dynamics, spacecraft and mission design/development, GNSS",
        "Part of multiple projects and research opportunities including Maxwell CubeSat",
        "CGPA: 4.0/4.0"
      ]
    },
    {
      institution: "Shiv Nadar Institution of Eminence",
      degree: "B.Tech in Mechanical Engineering",
      duration: "2021 - 2025",
      highlights: [
        "Focus on Computational Techniques in Mechanical Engineering",
        "Undergraduate Research Presented at ICAMSF-2025 and SNIoE OUR Conference 2024 on 2 separate projects",
        "2 Research Paper Publications for Additive Manufacturing Resesarch with PLA-TPU and rPP/vPP",
        "Design Patent published for FGM synthesis device",
        "Was part of university teams for ASME e-HPVC, SAE e-Baja, ISRO-URoC, World Robotics Championship, CanSat competitions",
        "CGPA: 9.02/10 (High Distinction)"
      ],
    }
  ],
  projects: [
    {
      id: "watchdog-l2",
      title: "WatchDogL2 - Earth-Moon L2 Surveillance and Interception Satellite",
      role: "Fault Protection Lead and Flight Software Sub-Lead",
      duration: "Jan 2026 - May 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1cCC9HZxPgkp0-DtjRRfVGZOlR3gr0dUx",
      technologies: ["Canva", "Python", "CAD", "FDIR Architecture", "Decision Autonomy"],
      description: "Designed a fool-proof fault protection system for all the separate subsystems and their associated interfaces at all times, while creating a decision tree for autonomy and manual commands. Defined all the different modes of the spacecraft during the 2+ year mission during which the spacecraft would station at EarthMoon L2 and surveil the space. Assisted the flight software team with creating a full-fledged flight software assisted by a TS8 Autonomy Trade study.",
      impact: "Reduced the chances of fault to less than 30%, while increasing the efficiency of the protection scheme by 20%. Led to a robust FSW, C&DH, Telecom, EEIS and Fault Protection Plan and Chain of Command during the mission.",
      attachments: {
        pdf: "#",
        pdfLabel: "Spacecraft Design Report",
        presentation: "https://drive.google.com/file/d/1WxS59qU8assscak55axOL8-5TWWM7hJW/view?usp=sharing",
        presentationLabel: "CoDR Presentation"
      }
    },
    {
      id: "nrho-stationkeeping",
      title: "Autonomous Station-keeping in Earth-Moon NRHO",
      role: "Graduate Researcher",
      duration: "Jan 2026 - Feb 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400",
      technologies: ["Python", "Astrodynamics", "Math Modelling"],
      description: "Executed an individual masters and entry PhD level research with a math modeling and Python computational code. Presented it at the Smead Aerospace Inter-Departmental Graduate Conference Feb'26.",
      impact: "Proposed a fuel efficient gate-keeping strategy for Lunar South Pole Gateway and Artemis missions by using Linear Quadratic Regulator, Model Predictive Control, and Invariant Manifold Fixation Strategy in a CR3BP -> BCR4BP situation ",
      attachments: {
        presentation: "https://drive.google.com/file/d/1bamGIxFNk5kAjnu-8Z9QE7tbUJuUIrf6/view?usp=sharing",
        presentationLabel: "Research Presentation",
        github: "https://github.com/Adhin575"
      }
    },
    {
      id: "maxwell",
      title: "Maxwell and Swarm-Ex CubeSats - Colorado Center of Astrodynamic Research (CCAR)",
      role: "Structures, AI&T, and System Engineering Research Team",
      duration: "Aug 2025 - May 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1L7iUe-4On_zYTXlpLUMLhvpAlTh35OnQ",
      technologies: ["ANSYS Structural and Thermal", "SolidWorks", "Systems Engineering", "AI&T"],
      description: "Executed Thermal testing and Structural Stability Testing of the PLDC Component of the Maxwell 6U CubeSat and worked on the integration of the same component in the body of the CubeSat",
      impact: "Optimized the orientation and positioning of the electrical components in the PLDC based on stability conditions of thermal and mechanical loading due to operational temperatures in space, and bolting operations of the PLDC on the spacecraft.",
      attachments: {}
    },
    {
      id: "flair",
      title: "Flying Lab for Atmospheric Isotope Research (FLAIR)",
      role: "Graduate Researcher - Software Engineer, Data Analyst, and Fabrication Engineer",
      duration: "Aug 2025 - May 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1aljQ6j_b8ifiHK4QpS0q1zjyXz5AlbsC",
      technologies: ["Python", "UI/UX Design", "Arduino", "3D Printing", "Mechanical Fabrication & AI&T"],
      description: "Created a Ground Station Interface App that enables the ground to connect to the drone, and display the data read by the drone in exciting visual plots, using custom defined atmospheric boundaries of the algorithm. I also worked on the actual AI&T of the payload into the BlackSwift S3 VToL, as a fabrication engineer, along with 3D printing of bulkheads and laser cavity enclosures.",
      impact: "Could present interactive and understandable results, instead of just providing complex datasets as part of the conference submission. As a fabrication engineer, I reduced manufacturing and testing costs by approximately 25% and increasing time efficiency to complete 1 month prior to the actual deadline",
      attachments: {
        presentation: "https://drive.google.com/file/d/1YQfDouzujvs3Z--T90m6GpDX9jf0biVw/view?usp=drive_link",
        presentationLabel: "CDR Presentation",
        github: "https://github.com/Adhin575"
      }
    },
    {
      id: "horizon-nexus",
      title: "Horizon Nexus: Long Duration (5+ Years) LEO Space Habitat",
      role: "Power & Thermal Lead, ECLSS and Crew/Payload Accommodation Co-Lead",
      duration: "Aug 2025 - Dec 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/1fMHF6CnJZwDaRZXhd1JaQzMgltJPlq3B",
      technologies: ["Power & Thermal Control", "Electrical Systems", "Human Factors", "ECLSS"],
      description: "Designed a power generation, storage, management and distribution system for a reusable, commercial LEO space habitat for 3 crewmembers. I designed an ACTS and PCTS as part of the thermal lead role, along with drafting subsystem and system block diagrams and budgets. I worked on a dedicated mass budget for the entire spacecraft surrounding ECLSS and astronaut needs, while designing the interior plan for the habitat.",
      impact: "Made it 20% more efficient and designed a 18% more-efficient cooling and thermal maintenance system for the habitat with an annual maintenance PoA. As the ECLSS Co-Lead, I ended up saving 20% of mass budget with a 15% reserve included in the actual budget thereby making the payload lighter.",
      attachments: {
        pdf: "https://drive.google.com/file/d/1mqU46v4jv0UGQprFDEBJcvFFl5m1tuii/view?usp=drive_link",
        presentation: "https://drive.google.com/file/d/1KU-iPvA6CMpMgN1xEiLTe9QGxLWCLCXw/view?usp=drive_link",
        presentationLabel: "Design Presentation"
      }
    },
    {
      id: "shine",
      title: "Survey of Hidden water-Ice in Non-illuminated Environments",
      role: "Principal Investigator and Project Manager",
      duration: "Aug 2025 - Dec 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/121FOdalh3aCXpKRUmEEyyxe1j2lPlsry",
      technologies: ["Mission Design", "SolidWorks", "Python", "Scheduling and Budgeting"],
      description: "Came up with a highly comprehensible and sound requirements list with the system engineer, along with an instrument study with the payload specialist and designed the 6U spacecraft with the spacecraft lead along with a detailed mission design and ConOps. Created a near-perfect schedule for the entire mission duration, compliant with real standards, along with a mission budget and test plan.",
      impact: "Optimized the trajectory to reach the Lunar South Pole at an altitude of ~30 km from the surface in an NRHO orbit, in just 1.5 years, with an Ion propulsion system. As the Project Manager, I reduced approximately 13 Million USD from the initial cost cap, making it 24% more efficient.",
      attachments: {
        pdf: "https://drive.google.com/file/d/1qrxZ6ymutSDUYI0pE8ztbpcn5wjD9tf0/view?usp=drive_link",
        pdfLabel: "Mission Proposal",
        presentation: "https://drive.google.com/file/d/1-n3TADzS-WvgMXe2Vc4oIjU_JGhUls04/view?usp=drive_link",
        presentationLabel: "Poster Presentation",
        github: "https://github.com/Adhin575"
      }
    },
    {
      id: "vPPrPP",
      title: "Mechanical Property Improvement of 3D-Printed rPP and vPP through Heat Treatment and Sustainable Filament Reuse",
      role: "Undergraduate Researcher and Paper Author",
      duration: "Jan 2025 - May 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/1yTrIvT4-z3EmB75ZrT27_uWaxkzH439c",
      technologies: ["Additive Manufacturing", "FEA", "Material Science", "Microstructural Study"],
      description: "Evaluated tensile mechanical properties, porosity, and warpage differences between virgin and recycled polypropylene via ASTM D638 tensile testing on 3D printed dogbones, after applying a research standard heat treatment procedure. Conducted a sustainability analysis to check industry grade usage on ANSYS Granta.",
      impact: " Presented our findings before a panel of highly qualified mechanical engineering professors. Results were published through a research paper in ACS Omega Journals.",
      attachments: {
        pdf: "https://drive.google.com/file/d/1zCJBiRCiWL3Ru0T3MrLX0oa3jhU3ZBOU/view?usp=drive_link",
        pdfLabel: "Published Research Paper",
        presentation: "https://drive.google.com/file/d/1H1BYP1QPNh73myqBQDsdnz9CSxRZAjEp/view?usp=drive_link"
      }
    },
    {
      id: "PlaTpu",
      title: "Optimizing mechanical performance of 3D-printed PLA–TPU composites through heat treatment and geometric interlocking",
      role: "Undergraduate Researcher and Paper Author",
      duration: "Aug 2024 - Jan 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/1dSmjanStOR1m4Xzo85yluHSCl7iM7hOg",
      technologies: ["Additive Manufacturing", "FEA", "Material Science", "Microstructural Study"],
      description: "Investigated FDM type composite reinforcement conditions with special emphasis on interlocking and heat treatment patterns for PLA-TPU filaments and looked at tensile properties, porosity, toughness, and warpage using SEM and post-formatting on ImageJ.",
      impact: "Presented our findings before a panel of highly qualified mechanical engineering professors. Results were published through a research paper in Journal of Process Mechanical Engineering: Part E.",
      attachments: {
        pdf: "https://drive.google.com/file/d/1mgRlJJMSnkqV8k2iD4n7FSC3pc6QX_R-/view?usp=drive_link",
        pdfLabel: "Published Research Paper",
        presentation: "https://drive.google.com/file/d/1KnM0DiwX_UDCz_J2A1voFctuU5h0_4x9/view?usp=drive_link"
      }
    },
    {
      id: "fgm",
      title: "Apparatus to Develop a Functionally Graded Material using Electro-magnetic separation methods",
      role: "Undergraduate Researcher and Design Patent Holder",
      duration: "Aug 2023 - Sep 2024",
      thumbnail: "https://lh3.googleusercontent.com/d/15zBK97adxXQn7lXKa1FBHf6zU964hhhl",
      technologies: ["SolidWorks", "Circuit Methods", "Python", "Sheet Metal", "Technical Research"],
      description: "Designed an entire device which works on electric and magnetic field intersection along with controlled heating to create a Functionally Graded Material (FGM) using a metal and a non-metal with very minimal preparation of the specimen .I executed a full-fledged mechanical CAD assembly of the entire device, along with a detailed electronic schematic and a Python code to control the amount of material that falls in through an automated funnel. ",
      impact: "Acquired a design patent for the same from the Government of India. (202411043289)",
      attachments: {
        pdf: "https://drive.google.com/file/d/1uitB-R2ppRoM4UFsXKYeMOKmzDG-kg-5/view?usp=drive_link",
        pdfLabel: "Conference Presentation"
      }
    }
  ],
  professionalExperiences: [
    {
      id: "aaeio",
      role: "Junior Director of Outreach",
      organization: "American Association for Engineers of Indian Origin (AAEIO)",
      description: "Worked on handling, calling and inviting guests to call for lectures and talks to the Indian Engineering community. Organized events, handled a large team of 20-25 students, curated databases. Also handled the social media of the club to increase more viewership.",
      duration: "Jan 2026 - May 2026"
    },
    {
      id: "agso",
      role: "MS Representative of Graduate and PhD Aerospace Engineering Batch of 2025-27",
      organization: "Aerospace Graduate Student Organization",
      description: "Developed a much more robust feedback system to allow students to ask any questions about the course & upcoming project opportunities, provide feedback about the professors, and gain access to a lot more new projects and labs, thereby creating a more research-oriented community of aerospace engineers.",
      duration: "Sep 2025 - May 2026"
    },
    {
      id: "ta",
      role: "Teaching Assistant (TA) - Material Sciences and Engineering",
      organization: "SNIoE",
      description: "Worked on MS Excel and Word to help in grading, planning lecture and laboratory sessions along with assisting the professor during lab lessons in VESTA and LAMMPS GUI. Supported a class of 150+ Computer Science Engineering student by conducting lectures by teaching them key concepts of BCC, FCC type crystal configurations, and seeing them as a visual, along with coding in python and LAMMPS to create a stable molecule from scratch and analyzing their properties.",
      duration: "Aug 2024 - Dec 2024"
    }
  ],
  skills: [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "MATLAB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "PowerBi", level: 80 },
        { name: "Arduino and Thonny", level: 70 },
        { name: "HTML/CSS/JS", level: 65 }
      ]
    },
    {
      category: "CAD/CAE",
      skills: [
        { name: "SolidWorks", level: 90 },
        { name: "Autodesk Fusion 360", level: 80 },
        { name: "Abaqus", level: 80 },
        { name: "Dassault Systemes 3DExperience", level: 75 },
        { name: "ANSYS Fluent", level: 75 },
        { name: "GMAT", level: 70 },
        { name: "Altium PCB Designer", level: 70}
      ]
    },
    {
      category: "Manufacturing",
      skills: [
        { name: "3D Printing", level: 90 },
        { name: "Laser Cutting/ Engraving", level: 80 },
        { name: "Testing and Fault Protection", level: 75 },
        { name: "Sheet Metal Working", level: 70 },
        { name: "Carpentry & Welding", level: 65 },
        { name: "Electric Soldering and Circuitry", level: 65}
      ]
    },
    {
      category: "Soft",
      skills: [
        { name: "Technical Leadership", level: 90 },
        { name: "Technical Writing", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Creative Thinking", level: 80 }
      ]
    },
    {
      category: "Additional",
      skills: [
        { name: "Canva", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Adobe Premiere Pro", level: 75 },
        { name: "Adobe After Effects", level: 75 },
        { name: "MS Office Tools", level: 80}
      ]
    }
  ],
  profileImage: "https://lh3.googleusercontent.com/d/15zM68OM3zZH4TKm2L4WwD34kzYJD9XVV",
  resumeUrl: "https://drive.google.com/file/d/11uUkFnx3fXiPSyYO6tYul23pDbeMb91L/view?usp=drive_link",
  contact: {
    email: "vsadhi70@gmail.com",
    linkedin: "https://linkedin.com/in/adhindravs",
    github: "https://github.com/Adhin575",
    website: "adhindravs.com"
  }
};
