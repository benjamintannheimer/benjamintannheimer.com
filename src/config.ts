import { makeSEOTitle } from "./lib/utils";
import {
    type NavBarLink,
    type SocialLink,
    type Position,
    type Identity,
    type Technology,
    type Friend,
    type Certification,
    type Experience,
    type Education,
    type Testimonial,
    type Figure,
    type Recognition,
    type Hardware,
    type Software,
    type Interest,
    // PageContent
    type AboutPageContent,
    type ProjectPageContent,
    type BlogPageContent,
    type CreditsPageContent,
    type PrivacyPageContent,
    type ContactPageContent,
    type NotFoundPageContent,
    type HomePageContent,
    type HomelabPageContent,
    TechnologyType,
  } from "@/types/config";

  // Common ===========================================================================
  export const position: Position = {
    company: {
      logo: "/experiences/swissarmedforces.png",
      name: "Swiss Armed Forces",
      location: "Berne, Switzerland",
    },
    jobTitle: "ICT Systemspecialist",
    title: "Swiss Armed Forces",
    url: "https://www.vtg.admin.ch/en",
    external: true
  };

  export const identity: Identity = {
    name: "Benjamin Tannheimer",
    avatar: "/common/avatar.png",
    blogUrl: "benjamintannheimer.com",
    email: "benjamin.tannheimer@proton.com",
  };

  export const navBarLinks: NavBarLink[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Homelab",
      url: "/homelab",
    },
    {
      title: "Projects",
      url: "/projects",
    },
  ];
  
  export const friends: Friend[] = [
    {
      description: "The web framework for content",
      image: "placeholder/no-image.jpg",
      title: "Astro",
      url: "https://astro.build",
      external: true,
    },
    {
      description: "Beautifully designed components",
      image: "placeholder/no-image.jpg",
      title: "ShadCN",
      url: "https://shadcn.com",
      external: true,
    },
    {
      description: "Want to be added? Contact me.",
      image: "placeholder/avatar.jpg",
      title: "You",
      url: "https://example.com",
      external: true,
    }
  ];
  
  /*
    // include links for other platforms as well maybe?
    options:
      - leetcode
      - codeforces
      - kaggle
      - tryhackme
      - hackthebox
  */
  export const socialLinks: SocialLink[] = [
    {
      title: "Resume",
      url: "/resume.pdf",
      icon: "FileUser",
      external: false,
    },
    {
      title: "Mail",
      url: "mailto:benjamin.tannheimer@proton.me",
      icon: "Mail",
      external: true,
    },
    {
      title: "Phone",
      url: "tel:+41782472198",
      icon: "Phone",
      external: true,
    },
    {
      title: "GitHub",
      url: "https://github.com/benjamintannheimer",
      icon: "Github",
      external: true,
    },
    {
      title: "Dotfiles",
      url: "https://github.com/benjamintannheimer/dotfiles",
      icon: "Keyboard",
      external: true,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/benjamintannheimer",
      icon: "Linkedin",
      external: true,
    },
    {
      title: "X",
      url: "https://x.com/bentannheimer",
      icon: "X",
      external: true,
    },
    {
      title: "buymeacoffee",
      url: "https://buymeacoffee.com/benjamintannheimer",
      icon: "Coffee",
      external: true,
    },
  ];
  
  // ComponentContent =================================================================
  export const biography: string[] = [
    "This space is a snapshot of what I've been hacking on — projects, thoughts, workflows, and the occasional deep-dive blog post. I care about clarity, clean systems, and pushing my skills in the right direction, whether that's through fullstack dev, cloud-native infra, or something entirely unexpected.",
    "I'm open to internships and full-time roles. If you're building something ambitious and want someone who's thoughtful, technical, and not afraid to go deep, let's talk."
  ];
  
  export const technologies: Technology[] = [
    {
      name: "JavaScript",
      image: "/technologies/JavaScript.png",
      type: TechnologyType.Language,
    },
    {
      name: "TypeScript",
      image: "/technologies/TypeScript.jpg",
      type: TechnologyType.Language,
    },
  ];

  export const hardware: Hardware[] = [
    {
      title: "HP EliteBook 850 G7 (Work)",
      details: '15.60", Intel Core i7-10710U, 32 GB, 1000 GB, CH'
    },
    {
      title: "ThinkPads (Private)",
      details: "Various models"
    },
    {
      title: "Trackpad and Keyboard",
      url: "https://www.digitec.ch/en/s1/product/lenovo-thinkpad-trackpoint-keyboard-ii-us-wireless-keyboard-17487598",
      external: true,
      details: "Input",
    },
    {
      title: "Headphones: HyperX Cloud 2",
      url: "https://www.digitec.ch/en/s1/product/hyperx-cloud-ii-cable-gaming-headset-3517140",
      external: true,
      details: "Audio",
    },
    {
      title: "Display: HP X34",
      url: "https://www.digitec.ch/en/s1/product/hp-x34-3440-x-1440-pixels-34-monitor-16615682",
      external: true,
      details: "Display",
    },
    {
      title: "Monitor arm: Ergotron LX Dual Stacking Arm",
      url: "https://www.digitec.ch/en/s1/product/ergotron-lx-dual-stacking-arm-table-40-monitor-mount-21282933",
      external: true,
      details: "Monitor arm",
    },
    {
      title: "Microphone: HyperX QuadCast",
      url: "https://www.digitec.ch/en/s1/product/hyperx-quadcast-microphones-10714120",
      external: true,
      details: "Recording",
    }
  ];
  
  export const software: Software[] = [
    {
      title: "Proton",
      url: "https://pr.tn/ref/PDV27SPPMSBG",
      external: true,
      details: "Email, storage, calendar, password management"
    },
    {
      title: "JetBrains",
      url: "https://jetbrains.com",
      external: true,
      details: "Various IDEs for Software Development"
    },
    {
      title: "Bookmer",
      url: "https://bookmer.com/home",
      external: true,
      details: "Bookmarks"
    },
    {
      title: "Notesnook",
      url: "https://notesnook.com/",
      external: true,
      details: "Notetaking"
    },
    {
      title: "Cryptpad",
      url: "https://cryptpad.fr",
      external: true,
      details: "Cloud document collaboration suite"
    },
    {
      title: "ChatGPT",
      url: "https://chatgpt.com",
      external: true,
      details: "Generative artificial intelligence chatbot "
    },
    // {
    //   title: "Termius",
    //   url: "https://affiliate.example.com/fastmail",
    //   external: true,
    //   details: "SSH connection manager"
    // },
    {
      title: "SoBrief",
      url: "https://sobrief.com/?via=benjamin-tannheimer",
      external: true,
      details: "Book summaries"
    },
    // {
    //   title: "",
    //   url: "",
    //   external: true,
    //   details: ""
    // },
    {
      title: "getcracked",
      url: "https://getcracked.io",
      external: true,
      details: "Coding questions - 10% with the code MG4URN6A"
    },
    {
      title: "Leetcode",
      url: "https://leetcode.com/",
      external: true,
      details: "Coding questions"
    },

    // {
    //   title: "tmux",
    //   url: "https://affiliate.example.com/fastmail",
    //   external: true,
    //   pricing: "FREE",
    //   usage: "Terminal"
    // },
    // {
    //   title: "vim",
    //   url: "https://affiliate.example.com/fastmail",
    //   external: true,
    //   pricing: "FREE",
    //   usage: "Terminal"
    // },
  ];  

  export const certifications: Certification[] = [
    {
      image: "/certifications/redhat.png",
      date: new Date("03.07.2025"),
      expireDate: new Date("3.7.2028"),
      title: "RHCSA",
      url: "https://www.credly.com/badges/b6e3d75e-cb18-4729-b597-706451da7249/public_url",
      external: true,
    },
    // {
    //   image: "/certifications/cisco.jpg",
    //   plannedDate: new Date("10.10.2025"),
    //   title: "CCNA",
    //   url: "https://example.com",
    //   external: true,
    // },
    // {
    //   image: "/certifications/itil-v4-foundation.png",
    //   title: "ITIL4F",
    //   plannedDate: new Date("10.10.2025"),
    //   url: "https://example.com",
    //   external: true,
    // }
  ]

  export const experiences: Experience[] = [
    {
      title: "ICT System Specialist I",
      url: "https://jobs.admin.ch/offene-stellen/Lehrgang-als-ICT-Systemspezialist-in-Junior-an-der-ICT-Warrior-Academy/e2eb79bf-13b6-40c4-8f4d-bb982ed8541e",
      external: true,
      logo: "/experiences/swissarmedforces.png",
      company: "Swiss Armed Forces",
      date: "Nov 2024 - Nov 2025",
      current: true,
      country: "Switzerland",
      description: [
        "Further training to become an ICT Systems Specialist at the ICT Warrior Academy with the following technical specializations:",
        "Network technology; Server and storage systems; Databases and middleware; Automation and scripting; Monitoring and logging; Cyber security",
      ],
      technologies: [
        { name: "RedHat", type: TechnologyType.Vendor },
        { name: "Cisco",  type: TechnologyType.Vendor },
        { name: "Python",  type: TechnologyType.Language },
        { name: "PowerShell",  type: TechnologyType.Scripting },
      ]
    },
    {
      title: "Frontend Developer",
      url: "https://intersim.ch",
      external: true,
      logo: "/experiences/intersim.png",
      company: "Intersim AG",
      date: "Aug 2024 - Oct 2024",
      country: "Switzerland",
      description: ["Developing and delivering business web applications within the TYPO3 circle."],
      technologies: [
        { name: "Typo3",  type: TechnologyType.Framework },
        { name: "PHP",  type: TechnologyType.Language },
        { name: "Docker",  type: TechnologyType.DevOpsTool },
      ]
    },
    {
      title: "Apprentice Application Developer Way-Up EFZ",
      url: "https://swisscom.ch",
      external: true,
      logo: "/experiences/swisscom.jpg",
      company: "Swisscom (Switzerland) AG",
      date: "Aug 2022 - Jul 2024",
      country: "Switzerland",
      description: ["During my Swisscom apprenticeship as a Way-Up EFZ Application Developer, I gained practical experience in software development, agile teamwork, and the telecommunications industry."],
      technologies: [
        { name: "Next.js", type: TechnologyType.Framework },
        { name: "Nest.js", type: TechnologyType.Framework },
        { name: "FastAPI", type: TechnologyType.Framework },
        { name: "MariaDB", type: TechnologyType.Database },
        { name: "MongoDB", type: TechnologyType.Database },
        { name: "MinIO", type: TechnologyType.Storage },
        { name: "Docker", type: TechnologyType.DevOpsTool },
      ]
    }
  ];

  export const education: Education[] = [
    {
      title: "Gymnasium Neufeld",
      url: "https://gymneufeld.ch",
      external: true,
      logo: "/education/gymneufeld.png",
      degree: "Swiss Matura",
      country: "Switzerland",
      date: "Aug 2018 - Aug 2022",
      description: [
        "Completed the Swiss Matura, a secondary school diploma that provides a broad academic foundation and prepares students for higher education in Switzerland",
        "Main subject: philosophy, education, psychology; supplementary subject: economics and law"
      ]
    }    
  ];

  export const testimonials: Testimonial[] = [
    {
      name: "Jason Smith",
      jobTitle: "VP of Product Development at Netflix",
      text: "Working with [Name] is amazing, his ability to comprehend and explain complex topics and apply them is fantastic.",
      avatar: "/common/avatar.png",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "LinkedIn", url: "https://linkedin.com/in/jasonsmith", external: true }
      ]
    },
    {
      name: "Amanda Johnson",
      jobTitle: "CEO at Creative Solutions",
      text: "Collaborating with [Name] was a turning point for our business, bringing innovation and efficiency.",
      avatar: "/common/avatar.png",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "Twitter", url: "https://twitter.com/amandajohnson", external: true }
      ]
    },
    {
      name: "Michael Lee",
      jobTitle: "CTO at Innovative Tech",
      text: "His technical skills and visionary approach have made him an indispensable asset to our team.",
      avatar: "/common/avatar.png",
      links: [
        { title: "LinkedIn", url: "https://linkedin.com/in/michaellee", external: true },
        { title: "Portfolio", url: "https://michaelleeportfolio.com", external: true }
      ]
    },
    {
      name: "Emily Davis",
      jobTitle: "Marketing Director at Trendsetters Inc.",
      text: "His insights into digital strategy have transformed our campaigns and increased our ROI.",
      avatar: "/common/avatar.png",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "LinkedIn", url: "https://linkedin.com/in/emilydavis", external: true }
      ]
    }
  ];

  export const figures: Figure[] = [
    { 
      figure:  ~~((Date.now() - +new Date('2003-07-03')) / (31557600000)), 
      description: "years old", 
    },
    // { 
    //   figure: 1595, 
    //   description: "CHF earned through bug bounty", 
    //   lastUpdated: new Date("03.07.2025"),
    //   title: "something",
    //   url: "https://example.com",
    //   external: true,
    // },
  ];

  export const recognitions: Recognition[] = [
    { 
      issuedBy: 'Institute for Excellence', 
      title: "Mastery Award", 
      date: new Date("03.07.2025") 
    },
    { 
      issuedBy: 'University of Bagdad', 
      title: "Magna Cum Laude", 
      date: new Date("03.07.2025")
    },
  ];

  export const interests: Interest[] = [
    { title: 'Traveling', details: 'Exploring new places, experiencing different cultures, and enjoying local cuisines—each journey fuels my creativity.' },
    { title: 'Photography', details: 'Capturing moments and landscapes through my lens is not only a hobby but a way to express my artistic side.' },
    { title: 'Music & Concerts', details: 'Whether I’m playing an instrument or attending live shows, music is a constant source of inspiration and relaxation.' },
    { title: 'Cooking & Culinary Experiments', details: 'I enjoy experimenting in the kitchen, discovering new recipes, and sharing delicious meals with friends and family.' },
    { title: 'Sports & Outdoor Activities', details: 'From hiking and cycling to a friendly game of soccer, staying active is key to keeping my mind and body balanced.' },
  ];

  // PageContent =====================================================================

  // Home (/)
  export const homePageContent: HomePageContent = {
    seo: {
      title: makeSEOTitle("Home", identity.name),
      description:
        "Employee from Switzerland who loves building cool things using code.",
      image: identity.avatar,
    },
    page: {
      name: "home",
      title: "Hi, I'm Ben, a Software Engineer.",
      subtitle: "I like building stuff."
    },
    role: "Student & Software Developer",
    description:
      "I'm Benjamin Tannheimer, a employee from Switzerland who also loves building cool things using code.",
    socialLinks: socialLinks,
    links: [
      {
        title: "Projects",
        url: "/projects",
      },
      {
        title: "About",
        url: "/about",
      },
    ],
  };
  
  // About (/about)
  export const aboutPageContent: AboutPageContent = {
    seo: {
      title: makeSEOTitle("About", identity.name),
      description:
        "employee from Switzerland who loves building cool things using code.",
      image: identity.avatar,
    },
    page: {
      name: "about",
      title: "About me",
      subtitle: "Passionate software developer."
    },
    about: {
      description: `
  I'm Benjamin Tannheimer, a employee from Switzerland who also loves building cool things using code.
  <br/><br/>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
  Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`
    },
    work: {
      description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
      items: [
        {
          title: "Software Developer",
          company: {
            name: "Freelance",
            image: "/common/avatar.png",
            url: "https://github.com/bt18b",
          },
          date: "2021 - Present",
        },
        {
          title: "Software Developer",
          company: {
            name: "Freelance",
            image: "/common/avatar.png",
            url: "https://github.com/bt18b",
          },
          date: "2019 - 2021",
        },
      ],
    },
    connect: {
      description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
      links: socialLinks,
    },
  };
  
  // Blog (/blog)
  export const homelabPageContent: HomelabPageContent = {
    seo: {
      title: makeSEOTitle("Homelab", identity.name),
      description: "Homelab iterations.",
      image: identity.avatar,
    },
    page: {
      name: "homelab",
      title: "Homelab",
      subtitle: "Homelab iterations."
    },
  };

  // Projects (/projects)
  export const projectsPageContent: ProjectPageContent = {
    seo: {
      title: makeSEOTitle("Projects", identity.name),
      description: "Check out what I've been working on.",
      image: identity.avatar,
    },
    page: {
      name: "projects",
      title: "Projects",
      subtitle: "Check out what I've been working on"
    },
    projects: [
      {
        title: "Portfolio",
        description: "Personal website (you are looking at it right now)",
        image: "/projects/astro-portfolio.png",
        year: "2025",
        url: "https://github.com/benjamintannheimer/benjamintannheimer.com",
        tech: [
          "Astro",
          "React",
          "Tailwind",
          "Shadcn/ui",
        ]
      },
      // {
      //   title: "Next project",
      //   description: "Something",
      //   image: "/placeholder/no-image.jpg",
      //   year: "2025",
      //   url: "https://github.com/benjamintannheimer",
      //   tech: [
      //     "Python",
      //   ]
      // },
    ],
  };
  
  // Blog (/blog)
  export const blogPageContent: BlogPageContent = {
    seo: {
      title: makeSEOTitle("Blog", identity.name),
      description: "Thoughts, stories and ideas.",
      image: identity.avatar,
    },
    page: {
      name: "blog",
      title: "Blog",
      subtitle: "Thoughts and ideas"
    },
  };

  // Credits (/credits)
  export const creditsPageContent: CreditsPageContent = {
    seo: {
      title: makeSEOTitle("Credits", identity.name),
      description: "Credits",
      image: identity.avatar,
    },
    page: {
      name: "credits",
      title: "Credits",
      subtitle: "Sources of inspiration for building this blog.",
    },
    description: `
      This website is a personal portfolio, blog, and development hub created and maintained by me. I built it using modern web technologies and a passion for coding.
    `,
    creditsList: {
      intro: `
        I would like to extend my gratitude to the open-source community and the many talented individuals whose work has inspired and enabled this project. Below are some of the key contributions:
      `,
      items: [
        {
          name: "Astro",
          role: "A great web framework for building blogs.",
        },
        {
          name: "Tailwind CSS",
          role: "Utility-first styling.",
        },
        {
          name: "Open Source Community",
          role: "Inspiration and support.",
        },
      ],
      thankYou: `
        Thank you to everyone who has contributed to making this website a reality. Your work and support are truly appreciated.
      `,
    },
  };  

  // Privacy (/privacy)
  export const privacyPageContent: PrivacyPageContent = {
    seo: {
      title: makeSEOTitle("Privacy", identity.name),
      description: "Privacy",
      image: identity.avatar,
    },
    page: {
      name: "privacy",
      title: "Privacy",
      subtitle: "Privacy policy"
    },
    statement: `
      <p>Your privacy is important to me. This privacy policy explains how I collect, use, and safeguard your personal information when you visit this website, which serves as my personal portfolio, blog, and development hub.</p>
      <p>As an individual maintaining this website, I only collect information that you voluntarily provide, such as through contact forms or newsletter sign-ups. I also use analytics tools solely to understand site traffic and improve the overall user experience. Rest assured, your data is never shared with third parties or used for commercial purposes.</p>
      <p>I am committed to protecting your privacy and have implemented reasonable security measures to keep your information safe. If you have any questions or concerns about this privacy policy or how your data is handled, please feel free to get in touch.</p>
    `
  };

  // Contact (/contact)
  export const contactPageContent: ContactPageContent = {
    seo: {
      title: makeSEOTitle("Contact", identity.name),
      description: "Contact",
      image: identity.avatar,
    },
    page: {
      name: "contact",
      title: "Contact",
      subtitle: "Wanna talk? Reach out to me"
    },
  };

  // 404 (/404)
  export const notFoundPageContent: NotFoundPageContent = {
    seo: {
      title: makeSEOTitle("404", identity.name),
      description: "404",
      image: identity.avatar,
    },
    page: {
      name:"notFound",
      title: "404",
      subtitle: "Page not found"
    },
  };