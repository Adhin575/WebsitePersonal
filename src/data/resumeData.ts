export interface GalleryItem {
  type: 'image';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  thumbnail: string;
  gallery?: GalleryItem[];
  technologies: string[];
  description: string;
  impact: string;
  technicalDetails?: {
    overview: string;
    results: string;
    techStack?: string;
  };
  attachments: {
    pdf?: string;
    pdfLabel?: string;
    presentation?: string;
    presentationLabel?: string;
    github?: string;
    publication?: string;
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
  about: "MS Aerospace Engineering student specializing in Bioastronautics, with hands-on experience in CubeSat missions and space mission development. Worked on SWARM-ex and MAXWELL CubeSat programs, along with other mechanical and aerospace projects. Research and industry interests include mission and spacecraft design, ECLSS systems, spacesuit design, habitat design, UAV formulation, and Lunar space missions.",
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
      institution: "University of Colorado - Boulder",
      degree: "M.S. in Aerospace Engineering Sciences (Focus: Bioastronautics)",
      duration: "Aug 2025 - present",
      highlights: [
        "Special Topics in Astrodynamics, Satellite Navigation, and Management",
        "Relevant Coursework: Spacecraft Attitude Determination, Spaceflight Dynamics, Space Habitat Design, Space Life Sciences, Spacecraft Design, Space Mission Design and Development",
      ],
      gpa: "4.0/4.0"
    },
    {
      institution: "Shiv Nadar Institution of Eminence",
      degree: "BTech in Mechanical Engineering (Focus: Computational Techniques in Mech. Engg.)",
      duration: "Aug 2021 - May 2025",
      highlights: [
        "Minor in Communications and Media Arts",
        "Relevant Coursework: Mechatronics, Computational Fluid Dynamics, Mechanics of Composite Materials, Finite Element Methods, Computational Methods in Mechanical Engg., Advanced Thermodynamics"
      ],
      gpa: "9.02/10"
    }
  ],
  projects: [
    {
      id: "watchdog-l2",
      title: "WatchDogL2 - Earth-Moon L2 Surveillance & Interception Satellite",
      role: "Fault Protection Systems Engineering Lead and Flight Software Sub-Lead",
      duration: "Jan 2026 - May 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1cCC9HZxPgkp0-DtjRRfVGZOlR3gr0dUx",
      technologies: ["FDIR Architecture", "Decision Autonomy", "Python", "CAD", "Spacecraft Design"],
      description: "Designed the mission patch and worked with Systems Engineers to establish concrete requirements for every subsystem. Designed an elaborate fault protection architecture, safe mode configuration, and FDIR logic for nearly 300 possible faults. Devised flight software architecture and state machines.",
      technicalDetails: {
        overview: "The WatchDogL2 mission focuses on surveillance and interception at the Earth-Moon L2 Lagrange point. My role involved leading the Fault Detection, Isolation, and Recovery (FDIR) architecture and co-leading the flight software development. We established rigorous systems requirements to ensure mission success in a complex orbital environment.",
        results: "Successfully developed a fault protection logic capable of handling over 300 fault scenarios across five criticality levels (F0-F4). This architecture is projected to improve mission reliability by 30%.",
        techStack: "Systems Engineering (MBSE), FDIR Logic, Python-based Flight Software simulations, CAD modeling for sensor placement, and STK for orbital analysis."
      },
      impact: "Decreased chances of LoM / LoV by 30% through accurate mitigation and isolation strategies for faults ranging from F0 to F4 criticality.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1cCC9HZxPgkp0-DtjRRfVGZOlR3gr0dUx', caption: 'WatchDogL2 Mission Patch Design' },
        { type: 'image', url: 'https://picsum.photos/seed/watchdog2/1200/800', caption: 'FDIR Logic Diagram' },
        { type: 'image', url: 'https://picsum.photos/seed/watchdog3/1200/800', caption: 'Flight Software State Machine' }
      ],
      attachments: {
        presentation: "https://drive.google.com/file/d/1WxS59qU8assscak55axOL8-5TWWM7hJW/view?usp=sharing",
        presentationLabel: "CoDR Presentation"
      }
    },
    {
      id: "flair",
      title: "Flying Lab for Airborne Isotope Research (FLAIR) - INSTAAR Lab",
      role: "UI/UX Software Lead / Data Analyst / Fabrication Engineer",
      duration: "Sep 2025 - May 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1aljQ6j_b8ifiHK4QpS0q1zjyXz5AlbsC",
      technologies: ["Python", "Arduino", "3D Printing", "TCFA Testing", "Data Analysis"],
      description: "Created a Ground Station Interface App on Python connecting to Payload Arduino. Displays real-time atmospheric data plots and controls hardware like exhaust fans. Worked on fabrication and TCFA testing for PLA enclosures and bulkheads.",
      technicalDetails: {
        overview: "FLAIR is an airborne research platform designed to study atmospheric isotopes. I spearheaded the software development for the ground station and led the rapid prototyping of core structural components using carbon fiber and 3D printing.",
        results: "Developed a functional real-time telemetry dashboard using Python/PyQt and successfully integrated it with the BlackSwift S3 aircraft. Fabrication optimizations led to a 25% reduction in production costs.",
        techStack: "Python (GUI development), Arduino (firmware), SolidWorks (CAD), 3D Printing (FDM), and TCFA (Thermal/Structural testing)."
      },
      impact: "Reduced fabrication costs by 25% of the budget. Assisted in AI&T of the payload in the BlackSwift S3 VTOL and secured payload data during test flights.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1aljQ6j_b8ifiHK4QpS0q1zjyXz5AlbsC', caption: 'Ground Station Dashboard Interface' },
        { type: 'image', url: 'https://picsum.photos/seed/flair2/1200/800', caption: 'BlackSwift S3 Integration' },
        { type: 'image', url: 'https://picsum.photos/seed/flair3/1200/800', caption: 'TCFA Testing Setup' }
      ],
      attachments: {
        presentation: "https://drive.google.com/file/d/1YQfDouzujvs3Z--T90m6GpDX9jf0biVw/view?usp=drive_link",
        presentationLabel: "CDR Presentation"
      }
    },
    {
      id: "shine",
      title: "SHINE (Survey of Hidden water-Ice in Non-illuminated Environments)",
      role: "Principal Investigator / Project Manager",
      duration: "Sep 2025 - Dec 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/121FOdalh3aCXpKRUmEEyyxe1j2lPlsry",
      technologies: ["Mission Design", "ConOps", "Budgeting", "V&V Plans", "TRL Management"],
      description: "Led development of a NASA Class D SMEX mission, overseeing STM development, instrumentation, and ConOps. Designed mission schedules, cost budgets, and testing V&V plans.",
      technicalDetails: {
        overview: "SHINE is a proposed lunar mission aimed at surveying permanently shadowed regions (PSRs) for water ice. As PI/Project Manager, I led the mission architecture, payload selection, and systems budgeting.",
        results: "Delivered a comprehensive mission proposal with a 24% reduction in projected costs through optimized component trade-offs and robust V&V plans.",
        techStack: "Systems Tool Kit (STK), NASA Cost Estimation Models, ConOps Design, and V&V Planning."
      },
      impact: "Reduced mission costs by 24% while maintaining maximum safety limits and defining key component trade studies.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/121FOdalh3aCXpKRUmEEyyxe1j2lPlsry', caption: 'SHINE Spacecraft Configuration' },
        { type: 'image', url: 'https://picsum.photos/seed/shine/1200/800', caption: 'Mission Trajectory Map' }
      ],
      attachments: {
        pdf: "https://drive.google.com/file/d/1qrxZ6ymutSDUYI0pE8ztbpcn5wjD9tf0/view?usp=drive_link",
        pdfLabel: "Mission Proposal"
      }
    },
    {
      id: "horizon-nexus",
      title: "Horizon Nexus - LEO Long Duration Human Space Habitat",
      role: "Power & Thermal Lead / Crew Accommodation and EVA Lead, ECLSS Co-Lead",
      duration: "Sep 2025 - Dec 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/1fMHF6CnJZwDaRZXhd1JaQzMgltJPlq3B",
      technologies: ["Thermal Systems", "Power Budgeting", "ECLSS", "Human Factors"],
      description: "Drafted Power budget for a 5+ year mission. Designed a highly-efficient thermal maintenance system and led development of mass budgets for ECLSS and consumables. Drafted interior habitat layouts.",
      technicalDetails: {
        overview: "Horizon Nexus is a conceptual design for a long-duration human habitat in Low Earth Orbit. I was responsible for the critical life-support infrastructure, including power, thermal, and ECLSS subsystems.",
        results: "Conceptualized a thermal management system that improved efficiency by 20% and optimized the mass budget for a crew of six over a 5-year operational lifespan.",
        techStack: "Thermal Simulation, Power Budgeting (Excel/vba), AutoCAD for habitat layout, and ECLSS modeling."
      },
      impact: "Increased power efficiency by 20% and optimized mass budget through strategic positioning of functioning bays.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1fMHF6CnJZwDaRZXhd1JaQzMgltJPlq3B', caption: 'Habitat Interior Design Concept' },
        { type: 'image', url: 'https://picsum.photos/seed/horizon2/1200/800', caption: 'Thermal System Layout' },
        { type: 'image', url: 'https://picsum.photos/seed/horizon3/1200/800', caption: 'Consumables Analysis' }
      ],
      attachments: {
        pdf: "https://drive.google.com/file/d/1mqU46v4jv0UGQprFDEBJcvFFl5m1tuii/view?usp=drive_link",
        presentation: "https://drive.google.com/file/d/1KU-iPvA6CMpMgN1xEiLTe9QGxLWCLCXw/view?usp=drive_link"
      }
    },
    {
      id: "sans-research",
      title: "Mechanistic Investigation for SANS",
      role: "Lead Researcher / Author",
      duration: "Jan 2026 - May 2026",
      thumbnail: "https://picsum.photos/seed/sans/800/600",
      technologies: ["Microgravity Research", "Fluid Dynamics", "Literature Review", "Peer Review"],
      description: "Conducted extensive literature review on Spaceflight Associated Neuro-ocular Syndrome (SANS) and proposed experimental methods for ground and ISS testing, focusing on intracranial fluid dynamics.",
      technicalDetails: {
        overview: "This research investigates the mechanical triggers behind SANS, a critical health risk for astronauts on long-duration missions. The study focuses on how microgravity shifts fluid pressure within the cranium.",
        results: "Identified key physiological indicators for early SANS onset and proposed a set of hydrodynamic countermeasures to be tested on the ISS.",
        techStack: "Fluid Dynamics modeling, Biological Systems Analysis, ISS experiment protocols, and Academic Literature Synthesis."
      },
      impact: "Authored professional peer-review publication identifying new countermeasure strategies to mitigate microgravity effects on astronauts.",
      gallery: [
        { type: 'image', url: 'https://picsum.photos/seed/sans2/1200/800', caption: 'Fluid Dynamics Model under Microgravity' }
      ],
      attachments: {}
    },
    {
      id: "nrho-stationkeeping",
      title: "Autonomous Low-Thrust Station-Keeping in Earth-Moon NRHO",
      role: "Graduate Researcher",
      duration: "Jan 2026 - Feb 2026",
      thumbnail: "https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400",
      technologies: ["CR3BP Modeling", "LQR Control", "Invariant Manifolds", "Python"],
      description: "Developed an autonomous low-thrust station-keeping framework for Earth-Moon NRHOs using nonlinear CR3BP modeling and time-varying LQR control. Quantified solar perturbation impacts on drift.",
      technicalDetails: {
        overview: "Research into maintaining stable orbits around Earth-Moon Lagrange points (NRHO) using low-thrust electric propulsion. This is critical for future missions like the Lunar Gateway.",
        results: "Demonstrated accurate station-keeping with kilometer-scale precision while accounting for solar radiation pressure and third-body perturbations.",
        techStack: "Circular Restricted 3-Body Problem (CR3BP), Linear Quadratic Regulator (LQR), Python (NumPy/SciPy), and Astrodynamics Manifold Theory."
      },
      impact: "Presented results at departmental aerospace conference, demonstrating kilometer-scale drift control through structure-aware control strategies.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400', caption: 'Orbital Trajectory Plotting' },
        { type: 'image', url: 'https://picsum.photos/seed/nrho/1200/800', caption: 'Drift Analysis Graph' }
      ],
      attachments: {
        presentation: "https://drive.google.com/file/d/1bamGIxFNk5kAjnu-8Z9QE7tbUJuUIrf6/view?usp=sharing",
        github: "https://github.com/Adhin575"
      }
    },
    {
      id: "maxwell",
      title: "Maxwell and SWARM-Ex CubeSat Programs",
      role: "AI&T, Systems and Structural Engineer",
      duration: "Aug 2025 - present",
      thumbnail: "https://lh3.googleusercontent.com/d/1L7iUe-4On_zYTXlpLUMLhvpAlTh35OnQ",
      technologies: ["Thermal Testing", "Structural Stability", "V&V Test Plan", "Systems Engineering"],
      description: "Executed Thermal and Structural Stability testing of the PLDC Component of the Maxwell 6U CubeSat. Devised V&V Systems Test Plans and detailed interface requirement documents for Swarm-Ex.",
      technicalDetails: {
        overview: "Hands-on engineering roles in the Maxwell and Swarm-Ex CubeSat programs. Focus was on Assembly, Integration, and Testing (AI&T) and systems-level documentation.",
        results: "Successfully completed structural verification for Maxwell and established standardized interface protocols for the multi-satellite Swarm-Ex constellation.",
        techStack: "Vibration Testing, Thermal Vacuum (TVAC) Chamber, Systems Engineering V-model, and JIRA/Confluence."
      },
      impact: "Successfully integrated core components into the Maxwell body and standardized systems interface requirements for the program.",
      gallery: [
        // Maxwell remains images only as per user request exception
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1L7iUe-4On_zYTXlpLUMLhvpAlTh35OnQ', caption: 'Maxwell CubeSat Integration' }
      ],
      attachments: {}
    },
    {
      id: "am-optimization",
      title: "Property Optimization of AM Parts",
      role: "Lead Researcher / Author",
      duration: "Aug 2024 - May 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/1yTrIvT4-z3EmB75ZrT27_uWaxkzH439c",
      technologies: ["3D Printing", "ABAQUS", "ANSYS Granta", "SEM Analysis"],
      description: "Evaluated tensile mechanical properties and warpage of virgin/recycled polypropylene via tensile testing on dogbones created via ABAQUS geometry. Investigated FDM composite reinforcement conditions.",
      technicalDetails: {
        overview: "Research into optimizing the mechanical properties of parts produced via Fused Deposition Modeling (FDM). Focus was on using recycled materials and composite reinforcements.",
        results: "Determined optimal layer height and infill patterns to maximize tensile strength while minimizing warpage, resulting in two peer-reviewed publications.",
        techStack: "ABAQUS (Finite Element Analysis), ANSYS Granta, Tensile Testing Machines, and Scanning Electron Microscopy (SEM)."
      },
      impact: "Co-authored two peer-reviewed publications (ACS Omega, Journal of Process Mechanical Engineering) regarding material usage in engineering applications.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1yTrIvT4-z3EmB75ZrT27_uWaxkzH439c', caption: 'Testing of 3D Printed Specimens' },
        { type: 'image', url: 'https://picsum.photos/seed/am2/1200/800', caption: 'SEM Analysis of Composites' },
        { type: 'image', url: 'https://picsum.photos/seed/am3/1200/800', caption: 'Warpage Comparison Charts' }
      ],
      attachments: {
        pdf: "https://doi.org/10.1021/acsomega.5c09444",
        pdfLabel: "ACS Omega Publication"
      }
    },
    {
      id: "fgm-apparatus",
      title: "Functionally Graded Materials Apparatus",
      role: "Researcher / Design Patent Holder",
      duration: "Aug 2024 - May 2025",
      thumbnail: "https://lh3.googleusercontent.com/d/15zBK97adxXQn7lXKa1FBHf6zU964hhhl",
      technologies: ["CAD Assembly", "Electromagnetic Separation", "Electronic Schematics", "Python"],
      description: "Designed a device for FGM synthesis using electric/magnetic field intersection with controlled heating. Executed full CAD assembly and electronic control systems.",
      technicalDetails: {
        overview: "Development of a novel apparatus for creating Functionally Graded Materials (FGMs) by selectively depositing materials using electromagnetic fields.",
        results: "Successfully designed and patented an automated system for material synthesis, opening new possibilities for graduated composite fabrication.",
        techStack: "Electromagnetic Simulation, SolidWorks CAD, Arduino-based PID control, and Thermal Analysis."
      },
      impact: "Acquired a design patent from the Government of India for the automated synthesis process.",
      gallery: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/15zBK97adxXQn7lXKa1FBHf6zU964hhhl', caption: 'CAD Model of the FGM Apparatus' },
        { type: 'image', url: 'https://picsum.photos/seed/fgm2/1200/800', caption: 'Electronic Control Schematic' },
        { type: 'image', url: 'https://picsum.photos/seed/fgm3/1200/800', caption: 'Magneto-Thermal Separation Chamber' }
      ],
      attachments: {
        pdf: "https://drive.google.com/file/d/1uitB-R2ppRoM4UFsXKYeMOKmzDG-kg-5/view?usp=drive_link",
        pdfLabel: "Technical Presentation"
      }
    },
    {
      id: "sae-baja",
      title: "SAE India e-Baja Endurance Driving",
      role: "Wheel Assembly, Suspension and CAE Co-lead",
      duration: "May 2022 - May 2023",
      thumbnail: "https://picsum.photos/seed/baja/800/600",
      technologies: ["CAE Analysis", "Wheel Assembly", "Lotus Shark", "Suspension Design"],
      description: "Worked on wheel assembly and suspension trade studies on Lotus Shark. Performed hands-on assembly, testing and created CAE Critical Design reports for electric ATVs.",
      technicalDetails: {
        overview: "Engineering role in the e-Baja SAE competition, focusing on the design and analysis of the vehicle's suspension and wheel assembly.",
        results: "Achieved high performance in the endurance event after rigorous CAE analysis and hands-on assembly of the suspension subsystems.",
        techStack: "Lotus Shark (Suspension Geometry), CAE (Computer-Aided Engineering), Manual Fabrication, and Data Acquisition."
      },
      impact: "Produced industry-grade reports and successfully executed A&T for driving and suspension subsystems.",
      gallery: [
        { type: 'image', url: 'https://picsum.photos/seed/baja2/1200/800', caption: 'ATV Suspension Components' },
        { type: 'image', url: 'https://picsum.photos/seed/baja3/1200/800', caption: 'CAE Analysis Stress Plots' },
        { type: 'image', url: 'https://picsum.photos/seed/baja4/1200/800', caption: 'Hands-on Assembly Phase' }
      ],
      attachments: {}
    }
  ],
  professionalExperiences: [
    {
      id: "intern-ret",
      role: "Mechanical CAD and CFD Intern",
      organization: "RE&T, Muscat, Oman",
      description: "Executed industry grade research on turbopump design parameters. Worked on the design of an 80-bar turbopump and conducted comparative simulations.",
      duration: "Jul 2026 - Aug 2026"
    },
    {
      id: "aaeio",
      role: "Junior Director of Outreach",
      organization: "American Association for Engineers of Indian Origin (AAEIO)",
      description: "Organized events, handled a team of 20-25 students, and curated databases. Handled social media to increase viewership.",
      duration: "2026 - present"
    },
    {
      id: "agso",
      role: "MS Representative of Graduate and PhD Aerospace Engineering Batch",
      organization: "Aerospace Graduate Student Organization",
      description: "Developed a robust feedback system and created a more research-oriented community for aerospace students.",
      duration: "2025 - 2026"
    },
    {
      id: "ta",
      role: "Teaching Assistant - Material Sciences",
      organization: "Shiv Nadar Institution of Eminence",
      description: "Assisted in grading and planning laboratory sessions for 150+ students. Conducted lectures on crystal configurations.",
      duration: "Aug 2024 - Dec 2024"
    }
  ],
  skills: [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "MATLAB", level: 90 },
        { name: "SQL", level: 80 },
        { name: "PowerBi", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "GitHub", level: 90 }
      ]
    },
    {
      category: "CAD/CAE",
      skills: [
        { name: "SolidWorks", level: 95 },
        { name: "Autodesk Fusion 360", level: 90 },
        { name: "ANSYS Fluent & Structural", level: 85 },
        { name: "3D Experience", level: 85 },
        { name: "GMAT", level: 80 },
        { name: "Ansys STK", level: 80 },
        { name: "Abaqus", level: 85 },
        { name: "Altium PCB Designer", level: 75 }
      ]
    },
    {
      category: "Manufacturing",
      skills: [
        { name: "3D Printing", level: 95 },
        { name: "Laser Cutting", level: 85 },
        { name: "Carbon Fiber Fabrication", level: 80 },
        { name: "Carpentry", level: 75 },
        { name: "Sheet Metal Working", level: 80 },
        { name: "Welding", level: 70 }
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
        { name: "MS Office Tools", level: 95 },
        { name: "Canva", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Adobe Premier Pro", level: 80 },
        { name: "After Effects", level: 80 }
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
