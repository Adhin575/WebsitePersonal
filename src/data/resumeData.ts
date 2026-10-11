
export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  poster?: string;
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
    contribution?: string;
    techStack?: string;
  };

  attachments: {
    pdf?: string;
    pdf1?: string;
    pdf2?: string;
    pdfLabel?: string;
    pdfLabel2?: string;
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

  summary:
    "Aspiring engineer specializing in bioastronautics, space mission and satellite design, astrodynamics, with additional skills in additive manufacturing, CAD/CAE, Python, and structural analysis.",

  about:
    "MS Aerospace Engineering student specializing in Bioastronautics, with hands-on experience in CubeSat missions and space mission development. Worked on SWARM-ex and MAXWELL CubeSat programs, along with other mechanical and aerospace projects. Research and industry interests include mission and spacecraft design, ECLSS systems, spacesuit design, habitat design, UAV formulation, and Lunar space missions.",

  strengths: [
    "Space Mission Design & Satellite Systems Design",
    "Advanced Additive Manufacturing (FDM, Composites)",
    "Astrodynamics and Satellite Navigation",
    "Bio-Astronautics and Systems Engineering",
    "Technical Leadership & Project Management",
    "Mechanical Design and Analysis"
  ],

  education: [
    {
      institution: "University of Colorado - Boulder",
      degree:
        "M.S. in Aerospace Engineering Sciences (Focus: Bioastronautics)",
      duration: "Aug 2025 - present",
      highlights: [
        "Certification in Satellite Systems Design",
        "Special Topics in Astrodynamics, Satellite Navigation, and Engineering Management",
        "Relevant Coursework: ECLSS Systems, Space Habitat Design, Space Life Sciences, Spacecraft Design, Space Mission Design and Development, Systems Engineering"
      ],
      gpa: "4.0/4.0"
    },
    {
      institution: "Shiv Nadar University (Institute of Eminence)",
      degree:
        "BTech in Mechanical Engineering (Focus: Computational Techniques in Mech. Engg.)",
      duration: "Aug 2021 - May 2025",
      highlights: [
        "Minor in Communications and Media Arts",
        "Relevant Coursework: Mechatronics, Computational Fluid Dynamics, Mechanics of Composite Materials, Finite Element Methods, Computational Methods in Mechanical Engg., Advanced Thermodynamics"
      ],
      gpa: "9.02/10 (High Distinction)"
    }
  ],

  projects: [
    {
      id: "watchdog-l2",
      title:
        "WatchDogL2 - Earth-Moon L2 Surveillance & Interception Satellite",
      role:
        "Fault Protection Systems Engineering Lead and Flight Software Sub-Lead",
      duration: "Jan 2026 - May 2026",
      thumbnail: "Imageswebsite/WatchDog-Thumbnail.png",
      technologies: [
        "FDIR Architecture",
        "Decision Autonomy",
        "Systems Engineering",
        "Flight Software"
      ],
      description:
        "Designed the mission patch and worked with Systems Engineers to establish concrete requirements for every subsystem. Designed an elaborate fault protection architecture, safe mode configuration, and FDIR logic for nearly 300 possible faults. Devised flight software architecture and state machines.",
      technicalDetails: {
        overview:
          "The WatchDogL2 mission is a Space Force mission that focuses on surveillance and interception of enemy spacecraft at the Earth-Moon L2 Lagrange point. My role involved leading the Fault Detection, Isolation, and Recovery (FDIR) architecture and co-leading the flight software development. We established rigorous systems requirements to ensure mission success in a complex orbital environment.",
        results:
          "Successfully developed a fault protection logic capable of handling over 300 fault scenarios across five criticality levels (F0-F4). Designed an industry-grade NASA Class B FPDD to show all the findings and fault DIR strategies. As the flight software co-lead, I devised the flight software architecture, state machine, and worked on the SLoC estimates. Helped in executing TS8 trade studies for FSW autonomy and FDIR execution."
      },
      impact:
        "Provided accurate mitigation and isolation strategies for each of those faults ranging from F0 to F4 criticality, thereby decreasing chances of LoM / LoV by 30%.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1HeUHIWj8K5uMi3bOwugUvZPron2nrd1E",
          caption: "Spacecraft CAD"
        },
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1gSLDGNww5uq2bUM86kq536B16bH0EH_H",
          caption: "WatchDog L2 Mission Patch"
        },
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/122i1Sy3dspVbg6P8mhJCv6udrpUD7Up1",
          caption: "Flight Software Architecture"
        },
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1XbM_isrQxGvhvbuvs6GIRNX_9nvLb6I9",
          caption: "FDIR Logic Flow Chart"
        }
      ],
      attachments: {
        pdf:
          "https://drive.google.com/file/d/1ayGQCikx1nGVS1KJua9S4T94EKSysGMJ/view?usp=drive_link",
        pdfLabel: "Fault Protection Design Document"
      }
    },

    {
      id: "mars-adc",
      title:
        "Attitude Dynamics and Control of a Nano-Satellite Orbiting Mars",
      role: "Graduate Researcher",
      duration: "Jan 2026 - Mar 2026",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400",
      technologies: [
        "Python",
        "ADCS",
        "Satellite Navigation",
        "STK"
      ],
      description:
        "Developed an ADCS program to simulate the coordinate and navigation mechanism of a nano-satellite orbiting Mars under Sun-Pointing and GMO pointing modes.",
      technicalDetails: {
        overview:
          "Developed and simulated a multi-mode attitude dynamics and control system for a Mars-orbiting nanosatellite capable of autonomous Sun-pointing, nadir-pointing, and communication-pointing operations.",
        results:
          "Achieved stable attitude tracking and rapid detumbling using an MRP-based PD controller, with successful autonomous mode transitions and convergence across all mission phases in a 6,500-second Mars mission simulation."
      },
      impact:
        "Established a scalable control framework for autonomous deep-space small-satellite missions operating under complex pointing requirements.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400",
          caption: "Orbital Trajectory Plotting"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/nrho/1200/800",
          caption: "Drift Analysis Graph"
        }
      ],
      attachments: {
        pdf:
          "https://drive.google.com/file/d/1ayGQCikx1nGVS1KJua9S4T94EKSysGMJ/view?usp=drive_link",
        pdfLabel: "Mars Nanosatellite ADCS description",
        github:
          "https://github.com/Adhin575/NanoSatelliteMarsADC"
      }
    },

    {
      id: "nrho-stationkeeping",
      title:
        "Autonomous Low-Thrust Station-Keeping in Earth-Moon NRHO using Invariant Manifolds",
      role: "Graduate Researcher",
      duration: "Jan 2026 - Feb 2026",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400",
      technologies: [
        "CR3BP Modeling",
        "LQR Control",
        "Invariant Manifolds",
        "Python"
      ],
      description:
        "Developed an autonomous low-thrust station-keeping framework for Earth-Moon NRHOs using nonlinear CR3BP modeling and time-varying LQR control. Quantified solar perturbation impacts on drift.",
      technicalDetails: {
        overview:
          "Research into maintaining stable orbits around Earth-Moon Lagrange points (NRHO) using low-thrust electric propulsion. This is critical for future missions like the Lunar Gateway.",
        results:
          "Demonstrated accurate station-keeping with kilometer-scale precision while accounting for solar radiation pressure and third-body perturbations."
      },
      impact:
        "Presented results at departmental aerospace conference, demonstrating kilometer-scale drift control through structure-aware control strategies.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1Y4M8Bzs6L30LIOD2izI6UVPzYFqoC400",
          caption: "Orbital Trajectory Plotting"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/nrho/1200/800",
          caption: "Drift Analysis Graph"
        }
      ],
      attachments: {
        presentation:
          "https://drive.google.com/file/d/1bamGIxFNk5kAjnu-8Z9QE7tbUJuUIrf6/view?usp=sharing",
        github:
          "https://github.com/Adhin575/NRHOStationkeeping"
      }
    },

    {
      id: "sans-research",
      title:
        "Mechanistic Investigation for Spaceflight Associated Neuro-ocular Syndrome (SANS)",
      role: "Lead Researcher / Co-Author",
      duration: "Jan 2026 - May 2026",
      thumbnail: "https://picsum.photos/seed/sans/800/600",
      technologies: [
        "Microgravity Research",
        "Fluid Dynamics",
        "Paper Writing",
        "SANS"
      ],
      description:
        "Conducted extensive literature review on Spaceflight Associated Neuro-ocular Syndrome (SANS) and proposed experimental methods for ground and ISS testing, focusing on intracranial fluid dynamics.",
      technicalDetails: {
        overview:
          "This research investigates the mechanical triggers behind SANS, a critical health risk for astronauts on long-duration missions. The study focuses on how microgravity shifts fluid pressure within the cranium. Conducted extensive literature review and proposed experimental/analysis methods to be conducted in ground-based analogs and in the ISS to identify countermeasure strategies to mitigate SANS in astronauts.",
        results:
          "Identified key physiological indicators for early SANS onset and proposed a set of hydrodynamic experiments and countermeasures to be tested on the ISS."
      },
      impact:
        "Authored professional peer-review publication identifying new countermeasure strategies to mitigate microgravity effects on astronauts. Currently under peer-review.",
      gallery: [
        {
          type: "image",
          url: "https://picsum.photos/seed/sans2/1200/800",
          caption: "Fluid Dynamics Model under Microgravity"
        }
      ],
      attachments: {}
    },

    {
      id: "flair",
      title:
        "Flying Lab for Airborne Isotope Research (FLAIR) - INSTAAR Lab",
      role:
        "UI/UX Software Lead / Data Analyst / Fabrication Engineer",
      duration: "Sep 2025 - May 2026",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1aljQ6j_b8ifiHK4QpS0q1zjyXz5AlbsC",
      technologies: [
        "Python",
        "Arduino",
        "3D Printing",
        "TCFA Testing",
        "Data Analysis"
      ],
      description:
        "Created a Ground Station Interface App on Python connecting to Payload Arduino. Displays real-time atmospheric data plots and controls hardware like exhaust fans. Worked on fabrication and TCFA testing for PLA enclosures and bulkheads.",
      technicalDetails: {
        overview:
          "FLAIR is an airborne research payload designed to study atmospheric water O18 isotopes in the troposphere. I spearheaded the software development for the ground station and was responsible for the rapid prototyping of core structural components using carbon fiber and 3D printing.",
        results:
          "Developed a functional real-time telemetry dashboard using Python/PyQt and successfully integrated it with the BlackSwift S3 aircraft. It connects to the Payload Arduino Code. Displays the data read by the drone in visual plots, using atmospheric boundary layer conditions. This app controls the exhaust fan in the laser spectrometer payload section, to enable smoother airflow through the system. Worked on the fabrication and TCFA testing to determine the ideal infill percentage for the PLA enclosures and bulkheads. Assisted on the AI&T of the payload in the BlackSwift S3 VToL."
      },
      impact:
        "Reduced fabrication costs by 25% of the budget. Regulated a proper and accurate test flight and enhanced durability of the payload that made it survive a catapult launch using pressurized N2 and a hard landing.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1aljQ6j_b8ifiHK4QpS0q1zjyXz5AlbsC",
          caption: "Ground Station Dashboard Interface"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/flair2/1200/800",
          caption: "BlackSwift S3 Integration"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/flair3/1200/800",
          caption: "TCFA Testing Setup"
        }
      ],
      attachments: {
        presentation:
          "https://drive.google.com/file/d/1YQfDouzujvs3Z--T90m6GpDX9jf0biVw/view?usp=drive_link",
        presentationLabel: "CDR Presentation",
        github:
          "https://github.com/Adhin575/FLAIRGroundStation"
      }
    },

    {
      id: "shine",
      title:
        "SHINE (Survey of Hidden water-Ice in Non-illuminated Environments)",
      role: "Principal Investigator / Project Manager",
      duration: "Sep 2025 - Dec 2025",
      thumbnail:
        "https://lh3.googleusercontent.com/d/121FOdalh3aCXpKRUmEEyyxe1j2lPlsry",
      technologies: [
        "Mission Design",
        "ConOps",
        "Budgeting",
        "V&V Plans",
        "TRL Management"
      ],
      description:
        "Led development of a NASA Class D SMEX mission, overseeing STM development, instrumentation, and ConOps. Designed mission schedules, cost budgets, and testing V&V plans.",
      technicalDetails: {
        overview:
          "SHINE is a proposed lunar mission aimed at surveying permanently shadowed regions (PSRs) for water ice. As PI/Project Manager, I led the mission architecture, payload selection, and systems budgeting.",
        results:
          "Defined payload requirements and spacecraft components with trade studies and coordinated interfaces between the Science, Payload, and Spacecraft departments."
      },
      impact:
        "Delivered a comprehensive mission proposal with a 24% reduction in projected costs through optimized component trade-offs and robust V&V plans.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/121FOdalh3aCXpKRUmEEyyxe1j2lPlsry",
          caption: "SHINE Spacecraft Configuration"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/shine/1200/800",
          caption: "Mission Trajectory Map"
        }
      ],
      attachments: {
        pdf:
          "https://drive.google.com/file/d/1qrxZ6ymutSDUYI0pE8ztbpcn5wjD9tf0/view?usp=drive_link",
        pdfLabel: "Mission Proposal",
        github:
          "https://github.com/Adhin575/SHINEMissionSimulator"
      }
    },

    {
      id: "horizon-nexus",
      title:
        "Horizon Nexus - LEO Long Duration Human Space Habitat",
      role:
        "Power & Thermal Lead / Crew Accommodation and EVA Lead, ECLSS Co-Lead",
      duration: "Sep 2025 - Dec 2025",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1fMHF6CnJZwDaRZXhd1JaQzMgltJPlq3B",
      technologies: [
        "Thermal Systems",
        "Power Budgeting",
        "ECLSS",
        "Human Factors"
      ],
      description:
        "Drafted Power budget for a 5+ year mission. Designed a highly-efficient thermal maintenance system and led development of mass budgets for ECLSS and consumables. Drafted interior habitat layouts.",
      technicalDetails: {
        overview:
          "Horizon Nexus is a conceptual design for a long-duration human habitat in Low Earth Orbit. I was responsible for the critical life-support infrastructure, including power, thermal, and ECLSS subsystems.",
        results:
          "Conceptualized a thermal management system that improved efficiency by 20% and optimized the mass budget for a crew of six over a 5-year operational lifespan."
      },
      impact:
        "Increased power efficiency by 20% and optimized mass budget through strategic positioning of functioning bays.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1fMHF6CnJZwDaRZXhd1JaQzMgltJPlq3B",
          caption: "Habitat Interior Design Concept"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/horizon2/1200/800",
          caption: "Thermal System Layout"
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/horizon3/1200/800",
          caption: "Consumables Analysis"
        }
      ],
      attachments: {
        pdf:
          "https://drive.google.com/file/d/1mqU46v4jv0UGQprFDEBJcvFFl5m1tuii/view?usp=drive_link",
        pdfLabel: "Habitat Design Document"
      }
    },

    {
      id: "maxwell",
      title: "Maxwell and SWARM-Ex CubeSat Programs",
      role: "AI&T, Systems and Structural Engineer",
      duration: "Aug 2025 - present",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1L7iUe-4On_zYTXlpLUMLhvpAlTh35OnQ",
      technologies: [
        "Thermal Testing",
        "Structural Stability",
        "V&V Test Plan",
        "Systems Engineering"
      ],
      description: "Executed Thermal and Structural Stability testing of the PLDC Component of the Maxwell 6U CubeSat. Devised V&V Systems Test Plans and detailed interface requirement documents for Swarm-Ex.",
      technicalDetails: {
        overview: "I worked on engineering roles in the Maxwell and Swarm-Ex CubeSat programs. For the Maxwell CubeSat program, I worked on design, assembly and testing (structural, thermal, vibrational) of the PLDC. I also worked on installing that component in the CubeSat chassis as part of the AI&T (Assembly, Integration, and Testing) subsystem. For the Swarm-Ex mission, I worked on the Systems Engineering Subsystem to create a dedicated readiness document, focussing specifically on the programmatics of the mission, detailed Verification and Validation Test Plan, making it ready for PDR.",
        results: "Successfully completed structural, thermal and vibrational verification for Maxwell PLDC system and installed on the spacecraft.",
        techStack: "Vibration and Thermal Testing using ANSYS, Thermal Vacuum (TVAC) Chamber, Systems Engineering, JIRA/Confluence."
      },
      impact: "Successfully integrated core components into the Maxwell body and standardized systems interface requirements for the Swarm-Ex program. The Maxwell 6U CubeSat is now waiting on the launchpad for launching to space.",
      gallery: [
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1L7iUe-4On_zYTXlpLUMLhvpAlTh35OnQ",
          caption: "Maxwell CubeSat "
        },
        {
          type: "video",
          url: "https://drive.google.com/file/d/1OLI9YDv-K-Tu6R_xb3V7Sw8165AjPhHX/preview",
          caption: "Maxwell CubeSat Assembly, Integration and Testing",
        }
      ],
      attachments: {}
    },

    {
      id: "am-optimization",
      title: "Property Optimization of Additively Manufactured Components using Heat Treatment, Geometric Interlocking, and Purity of Filaments",
      role: "Lead Researcher / Co-Author",
      duration: "Aug 2024 - May 2025",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1vkIUG8HW4lGDMyKd6RQSRzZZTrQwSW-C",
      technologies: [
        "3D Printing",
        "ABAQUS",
        "ANSYS Granta",
        "SEM Analysis"
      ],
      description: "This was my final project to fulfill my undergraduate requirements under the guidance of Dr. Ankit Gupta. We focussed on strength and durability optimization of AM parts using heat treatment and geometric interlocking techniques, along with an investigation of difference due to pure and recycled elements.",
      technicalDetails: {
        overview: "As the lead researcher, I worked on discussing trends of optimizing the mechanical properties of dual composite AM parts. We focussed on TPU-PLA composites and Polypropylene components, and associated tensile strength variations due to heat treatment, geometric pimple-dimple interactions, and pure/recycled filaments.",
        results: "Specimens featuring a higher density of interlocks consistently outperformed those with fewer interlocks in terms of strength and stiffness. Results revealed that low-temperature treatment at 0°C significantly increased stiffness due to polymer chain contraction. Tensile strength and modulus peaked at 80°C, with recycled PP achieved comparable performance to virgin PP at over 70% lower environmental impact. ",
        techStack: "ABAQUS (Finite Element Analysis), ANSYS Granta, Tensile Testing Machines, 3D printing, and Scanning Electron Microscopy (SEM)."
      },
      impact: "Co-authored two peer-reviewed publications: the TPU-PLA property optimization paper in the Journal of Process Mechanical Engineering, the pure & recyled PP property optimization paper in ACS Omega.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1vkIUG8HW4lGDMyKd6RQSRzZZTrQwSW-C",
          caption: "3D printing an ASTM Dogbone using 2 filaments in an interlock pattern"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1_oRtSmheG-Or5j7m2OxYTUK1zxG-EgNW",
          caption: "SEM Analysis of a single composite"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1TbyR3QQyT2Vp2y-kGU8YK5RT11Kgv8u7",
          caption: "Sample Load Displacement Curve Obtained for a 132 PD configuration at 90 degrees celsius"
        }
      ],
      attachments: {
        pdf1:
          "https://drive.google.com/file/d/1mgRlJJMSnkqV8k2iD4n7FSC3pc6QX_R-/view?usp=drive_link",
        pdfLabel: "PLA-TPU Published Paper",
        pdf2:
          "https://drive.google.com/file/d/1zCJBiRCiWL3Ru0T3MrLX0oa3jhU3ZBOU/view?usp=drive_link",
        pdfLabel2: "rPP and vPP Published Paper"
      }
    },

    {
      id: "fgm-apparatus",
      title: "Functionally Graded Materials Apparatus using Electromagnetic Separation Methods",
      role: "Researcher / Design Patent Holder",
      duration: "Aug 2023 - Sep 2024",
      thumbnail:
        "https://lh3.googleusercontent.com/d/15zBK97adxXQn7lXKa1FBHf6zU964hhhl",
      technologies: [
        "CAD Assembly",
        "Electromagnetic Separation",
        "Industry-Grade Research",
        "Python"
      ],
      description: "This project was developed as a result of the Opportunities for Undergraduate Research (OUR) at Shiv Nadar University. I worked under the guidance of Dr. Ankit Gupta, with additional support from Dr. Deepak Kumar from IIT Delhi.",
      technicalDetails: {
        overview: "I contributed to a design concept, ideation, and creation of a device to synthesize an FGM with any 2 different materials and properties using electromagnetic heating and solenoid attraction processes. We proposed the idea, designed the apparatus on SolidWorks, created an electrical mock-up of the circuit, automated the filter system for iron filings, and fabricated the device to submit to the Government for a design and utility patent. With this device, the complexity of creating gradient FGMs reduce significantly, and the time taken is also about 2-3 hours shorter.",
        results: "Successfully designed and patented an automated system for material synthesis, opening new possibilities for gradient composite fabrication.",
        techStack: "Electromagnetic Simulation, SolidWorks CAD, Arduino-based PID control, Thermal Analysis, Industry Research"
      },
      impact: "Acquired a design patent from the Government of India for the device. Utility patent procedure is underway",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/15zBK97adxXQn7lXKa1FBHf6zU964hhhl",
          caption: "CAD Model of the FGM Apparatus"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/13mE9JYZJsX9Q2skw1a38uZtMQ8qCLQGs",
          caption: "Device in Real Life"
        },
      ],
      attachments: {
        pdf:
          "https://drive.google.com/file/d/1uitB-R2ppRoM4UFsXKYeMOKmzDG-kg-5/view?usp=drive_link",
        pdfLabel: "Conference Presentation"
      }
    },

    {
      id: "sae-baja",
      title: "SAE e-Baja - Electric All-Terrain Vehicle Design Competition",
      role: "Wheel Assembly, Suspension and CAE Co-lead",
      duration: "May 2022 - May 2023",
      thumbnail: "https://lh3.googleusercontent.com/d/12Iznh89MgTQ25rqO75DEwj6CXwm3314C",
      technologies: [
        "Lotus Shark Suspension Analysis",
        "Wheel Assembly",
        "SolidWorks CAD Design",
        "Ansys CAE Analysis",
        "Engineering Trade Studies",
        "Assembly & Testing",
      ],
      description:
        "Baja SAE is a collegiate engineering competition challenging student teams to design, manufacture, and test rugged off-road all-terrain vehicles.",     
      technicalDetails: {
        overview: "I contributed to the mechanical development of an SAE e-Baja electric ATV, focusing on suspension, chassis, and wheel assembly design. Conducted configuration analyses and trade studies for the suspension and wheel-assembly design and geometry using Lotus Shark, supported CAE investigations and generated an industry grade CAE report, and worked on subsystem assembly and testing.",
        results: "Could fabricate our entire vehicle 2 weeks before the deliverable deadline due to quicker design convergence. Also reduced around 12-15k Rs. on the fabrication of the vehicle due to effective usage and improvements of COTS products. Finished among the top 15 CAE reports among all the 150 + Indian teams, and finished among the top 50 teams after the Mechanical, Electrical Technical Inspections and the ATV Run on the off-road track.",
        techStack: "Lotus Shark - Suspension Analysis, Wheel Assembly Design, CAE, Engineering Trade Studies, Mechanical Assembly & Testing."
      },
      impact: "Supported electric ATV design optimization through suspension and wheel - assembly configuration studies, CAE documentation, and hands-on mechanical subsystem integration.",
      gallery: [
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/12Iznh89MgTQ25rqO75DEwj6CXwm3314C",
          caption: "SAE e-Baja Electric All-Terrain Vehicle — BEAST v8"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1bmG9xKUu5TOcGm8CV3WRTx1fLtWxl-9e",
          caption: "SAE e-Baja Project Team "
        }
      ],
      attachments: {}
    }
  ],

  professionalExperiences: [
    {
      id: "intern-ret",
      role: "R&D Aerospace Intern",
      organization: "RE&T, Muscat, Oman",
      description:
        "Executed industry grade research on turbopump design parameters. Worked on the design optimization of an 80-bar turbopump and conducted multiple comparative design and simulation iterations to arrive at a highly efficient end product.",
      duration: "Jul 2026 - Aug 2026"
    },
    {
      id: "aaeio",
      role: "Junior Director of Outreach",
      organization:
        "American Association for Engineers of Indian Origin (AAEIO)",
      description:
        "Organized events, handled a team of 20-25 students, and curated databases. Handled social media to increase viewership.",
      duration: "2026 - present"
    },
    {
      id: "agso",
      role:
        "MS Representative of Graduate and PhD Aerospace Engineering Batch",
      organization: "Aerospace Graduate Student Organization",
      description:
        "Developed a robust feedback system and created a more research-oriented community for aerospace students.",
      duration: "2025 - 2026"
    },
    {
      id: "ta",
      role: "Teaching Assistant - Material Sciences",
      organization: "Shiv Nadar Institution of Eminence",
      description:
        "Assisted in grading and planning laboratory sessions for 150+ students. Conducted lectures on crystal configurations.",
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

  profileImage:
    "https://lh3.googleusercontent.com/d/15zM68OM3zZH4TKm2L4WwD34kzYJD9XVV",

  resumeUrl:
    "https://drive.google.com/file/d/1Ccx91_vkiSLrCkEneoncJWyA-kUHzkU-/preview",

  contact: {
    email: "vsadhi70@gmail.com",
    linkedin: "https://linkedin.com/in/adhindravs",
    github: "https://github.com/Adhin575",
    website: "adhindravs.com"
  }
};
