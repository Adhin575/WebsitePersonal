
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
        "Conceptual spacecraft mission for autonomous surveillance, tracking, and interception operations near Earth–Moon L2, requiring resilient flight software and fault protection during limited ground contact.",
      technicalDetails: {
        overview:
          "Led the spacecraft Fault Detection, Isolation, and Recovery (FDIR) design and served as Flight/Simulation Software second. Developed subsystem fault logic, escalation and containment strategies, Safe Hold configurations, and mode-dependent responses for proximity operations and loss of communications.",
        results:
          "Produced the preliminary-design Fault Protection Design Document, including fault classifications, subsystem response matrices, Level 3/4 requirements, single-point failure analysis, and verification approach. Contributed to flight-software architecture, operational modes, and state-machine planning."
      },
      impact:
        "Established a traceable, mission-wide fault protection framework intended to protect spacecraft survivability and mission continuity during autonomous cislunar operations.",
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
        "Simulation study of autonomous attitude control for a nanosatellite in 400-km low Mars orbit, coordinating surface observation, solar-power generation, and relay communications with a geosynchronous Mars orbiter.",
      technicalDetails: {
        overview:
          "Developed the Sun-, nadir-, and GMO-pointing reference frames, Modified Rodrigues Parameter attitude dynamics, and analytically tuned PD feedback control. Implemented an RK4 propagator with MRP shadow-set switching and autonomous mission-mode selection.",
        results:
          "Validated torque-free dynamics and closed-loop pointing behavior across all three modes. The 6,500-second mission simulation demonstrated five operating phases with autonomous transitions, stable tracking, and gain designs satisfying the prescribed 120-second decay-time requirements."
      },
      impact:
        "Demonstrated a reproducible multi-mode attitude-control architecture for small Mars-orbiting spacecraft with changing science, power, and communication demands.",
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
        "Computational research on fuel-efficient autonomous station-keeping for Earth–Moon near-rectilinear halo orbits, examining orbital instability, invariant manifolds, and solar gravitational perturbations.",
      technicalDetails: {
        overview:
          "Modeled a periodic NRHO using the Earth–Moon CR3BP, differential correction, state-transition matrices, and Floquet analysis. Extended the stability investigation to solar perturbations and compared full-state LQR with invariant/Floquet-mode-aligned feedback.",
        results:
          "Converged the reference periodic orbit to about 2.94 × 10⁻¹¹ closure error and identified an unstable Floquet multiplier magnitude of 2.214. Both controllers tracked the test disturbance; the tuned LQR used less total ΔV (0.03406 versus 0.05498 in the reported simulation)."
      },
      impact:
        "Quantified the trade-off between manifold-aware control and full-state LQR, informing autonomous station-keeping strategies for future cislunar platforms such as Lunar Gateway.",
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
        "Narrative review of Spaceflight Associated Neuro-ocular Syndrome (SANS), examining how microgravity-related fluid shifts, cerebral venous drainage, and optic-nerve biomechanics may contribute to astronauts’ ocular changes.",
      technicalDetails: {
        overview:
          "Co-authored a literature synthesis comparing evidence from spaceflight observations, terrestrial analogs, animal studies, and computational models. Examined venous outflow, translaminar pressure gradients, glymphatic clearance, and cellular factors alongside potential countermeasures.",
        results:
          "The review identified venous outflow impairment and translaminar pressure-gradient disruption as comparatively well-supported contributors, while glymphatic, immune, and mitochondrial processes remain less established. It also found that currently studied countermeasures have incomplete efficacy."
      },
      impact:
        "Synthesized competing SANS mechanisms into an evidence-based framework to guide future multi-target countermeasures, research priorities, and individualized risk assessment.",
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
        "FLAIR is a UAV-mounted atmospheric research payload developed to measure water-vapor isotopes (δ¹⁸O) alongside humidity, temperature, and altitude for studies of moisture transport and boundary-layer mixing.",
      technicalDetails: {
        overview:
          "Led development of the Python/PyQt ground-station interface for Arduino telemetry, live plotting, diagnostics, recording, and fan control. Supported structural fabrication, 3D-printed enclosure and bulkhead testing, and integration of the isotope payload into the Black Swift S3 platform.",
        results:
          "Delivered and demonstrated the ground-station interface with raw-packet diagnostics, fan-speed commands, and offline analysis capability. Supported mechanical fit, loading and integration tests; the ORR documented an as-built payload and verification results ahead of operational flight activities."
      },
      impact:
        "Advanced a compact airborne isotope-sampling payload toward operational readiness by linking telemetry and airflow control with practical fabrication, test, and UAV integration.",
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
        presentation1:
          "https://drive.google.com/file/d/1YQfDouzujvs3Z--T90m6GpDX9jf0biVw/view?usp=drive_link",
        presentationLabel1: "CDR Presentation",
        presentation2:
          "https://docs.google.com/presentation/d/1bEegOnieLgfwRlbI-9eGp5pLfArBd0Ye/edit?usp=sharing&ouid=113711368431435030458&rtpof=true&sd=true",
        presentationLabel2: "ORR Presentation",
        github:
          "https://github.com/Adhin575/FLAIRGroundStation"
      }
    },

    {
      id: "shine",
      title:
        "SHINE (Survey of Hidden water-Ice in Non-illuminated Environments)",
      role: "Principal Investigator / Project Manager / Lead Engineer",
      duration: "Sep 2025 - Dec 2025",
      thumbnail:
        "https://lh3.googleusercontent.com/d/1OOvuHuVljF1qNh9sKtfDQhA8hgF3Y48C",
      technologies: [
        "Mission Design",
        "ConOps",
        "Budgeting",
        "V&V Plans",
        "TRL Management"
      ],
      description:
        "SHINE is a proposed NASA Class-D lunar small-spacecraft mission to detect, map, and distinguish water-ice deposits in permanently shadowed regions near the Moon’s south pole.",
      technicalDetails: {
        overview:
          "Served as Principal Investigator, Project Manager, and Lead Engineer on the mission concept. Coordinated science traceability, near-infrared spectrometer/camera selection, spacecraft and mission architecture, concepts of operations, subsystem interfaces, budgets, schedules, risks, and verification planning.",
        results:
          "Delivered a comprehensive preliminary mission proposal with requirements, a phased trajectory and operations plan, spacecraft sizing and subsystem trades, a programmatic budget, risk register, and verification matrix. The proposed payload targets ≤500-m mapping resolution for PSRs at least 10 km across."
      },
      impact:
        "Developed a traceable, resource-conscious lunar water-ice mapping concept intended to inform volatile science and future Artemis in-situ resource utilization planning.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1OOvuHuVljF1qNh9sKtfDQhA8hgF3Y48C",
          caption: "SHINE Spacecraft Configuration"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1v-bfmQeBnIFPsqXnL_03PORGrHo5CYm9",
          caption: "Mission Trajectory Map"
        }
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1aTLuHDFcZ6lvg7uppIZET9K9iL7dEu6A",
          caption: "Mission Path and Timeline Simulator"
        }
      ],
      attachments: {
        pdf:
          "https://drive.google.com/file/d/1qrxZ6ymutSDUYI0pE8ztbpcn5wjD9tf0/view?usp=drive_link",
        pdfLabel: "Mission Proposal",
        presentation:
          "https://docs.google.com/presentation/d/12lcgb_0XOjSiEmUWDgdtAf_bDMTOfeWn/edit?usp=sharing&ouid=113711368431435030458&rtpof=true&sd=true",
        presentationLabel: "PDR Presentation"
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
        "Mass, Volume, and Power Budgeting",
        "ECLSS",
        "Human Factors"
          ],
      description: "Horizon Nexus is a conceptual design for a long-duration human habitat in Low Earth Orbit.",
      technicalDetails: {
        overview: "I was responsible for ideating, designing and calculating the requirements and concept study for the Power/Thermal, Crew Accomodation and EVA subsystems/tasks. I also assisted in doing the same tasks for the ECLSS and C3/Avionics Subsystem.",
        results: "Conceptualized a thermal management system that improved efficiency and reduced the required power to make the habitat more sustainable and feasible to operate over longer durations in space. I optimized the mass budget for a crew of six over a 5-year operational lifespan, while taking into account consumables, ECLSS system subordinates, avionics, power, thermal, EVA,PA,CA additions."
      },
      impact: "We ended up with a highly feasible and highly convincing space habitat design that finished among the top 2 designs.",
      gallery: [
        {
          type: "image",
          url:
            "https://lh3.googleusercontent.com/d/1fMHF6CnJZwDaRZXhd1JaQzMgltJPlq3B",
          caption: "Habitat Interior Design Concept"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/1IPotEyr8oXok4LDVrjVYg-X2hACt9x9J",
          caption: "Horizon Nexus Concept of Operations"
        },
        {
          type: "image",
          url: "https://lh3.googleusercontent.com/d/18u0iFkWktkucAnGJm9xGhFnhyykFCgdL",
          caption: "Habitat System Flowchart"
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
          description: "Two university CubeSat programs focused on spacecraft assembly, integration, testing, and systems readiness: the Maxwell 6U satellite and the SWARM-Ex multi-satellite mission.",
          technicalDetails: {
        overview: "Supported Maxwell PLDC design, installation, and structural, thermal, and vibration testing as part of spacecraft AI&T. For SWARM-Ex, developed systems-engineering readiness documentation, verification and validation test plans, and interface requirements to support preliminary design review.",
        results: "Completed PLDC-level structural, thermal, and vibration verification activities and supported installation within the Maxwell spacecraft chassis. Prepared SWARM-Ex readiness and V&V documentation for system-level design review.",
        techStack: "Vibration and Thermal Testing using ANSYS, Thermal Vacuum (TVAC) Chamber, Systems Engineering, JIRA/Confluence."
      },
      impact: "Linked hardware verification and flight-system integration with traceable systems-engineering documentation across two CubeSat development programs.",
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
      description: "Undergraduate research on improving the mechanical performance and sustainability of fused-deposition-modeled polymer components through interlocking interfaces, thermal post-processing, and recycled feedstocks.",
      technicalDetails: {
        overview: "Led experimental studies of PLA–TPU interlocking composites and virgin/recycled polypropylene specimens under Dr. Ankit Gupta. Investigated interlock density, printing orientation, and heat-treatment effects using tensile testing, microscopy, ABAQUS-based analysis, and ANSYS Granta sustainability assessment.",
        results: "Denser PLA–TPU interlocks improved strength and stiffness; polypropylene tensile strength and modulus peaked near 80°C heat treatment. Treated recycled PP approached virgin-PP performance, while the Granta assessment estimated over 70% lower production energy use and carbon emissions for recycled PP.",
        techStack: "ABAQUS (Finite Element Analysis), ANSYS Granta, Tensile Testing Machines, 3D printing, and Scanning Electron Microscopy (SEM)."
      },
      impact: "Contributed to two research publications exploring stronger multi-material prints and lower-impact recycled polymer components for additive manufacturing.",
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
      description: "Undergraduate research project at Shiv Nadar University exploring an electromagnetic apparatus for synthesizing functionally graded materials with controlled material distribution.",
      technicalDetails: {
        overview: "Developed the apparatus concept with faculty guidance, modeled its mechanical assembly in SolidWorks, designed the electrical control mock-up, and worked on solenoid-assisted material separation and automated handling of iron filings. Participated in fabrication and patent documentation.",
        results: "Produced a detailed CAD assembly, electrical prototype concept, and fabricated apparatus for controlled material placement in FGM synthesis. The design received an Indian design patent; a utility-patent application was also pursued.",
        techStack: "Electromagnetic Simulation, SolidWorks CAD, Arduino-based PID control, Thermal Analysis, Industry Research"
      },
      impact: "Advanced a prototype approach to FGM fabrication that combines electromagnetic material handling with an integrated, documented apparatus design.",
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
        "Baja SAE is a collegiate engineering competition in which student teams design, manufacture, inspect, and test off-road all-terrain vehicles; this entry covers an electric ATV built for the Indian competition.",     
      technicalDetails: {
        overview: "Co-led wheel assembly, suspension, and CAE work for the electric ATV. Conducted suspension-geometry trade studies in Lotus Shark, supported chassis and wheel-assembly design and ANSYS analysis, prepared technical reports, and participated in subsystem assembly and testing.",
        results: "The team completed vehicle fabrication about two weeks ahead of its deadline and reported approximately ₹12,000–₹15,000 in fabrication savings through COTS-based design choices. It placed among the top 15 CAE submissions from 150+ teams and the top 50 overall after inspections and the off-road event.",
        techStack: "Lotus Shark - Suspension Analysis, Wheel Assembly Design, CAE, Engineering Trade Studies, Mechanical Assembly & Testing."
      },
      impact: "Supported faster design convergence and practical subsystem integration, contributing to the team’s cost, schedule, and competition outcomes.",
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
