import { makeSEOTitle } from "./lib/utils";
import type {
    NavBarLink,
    SocialLink,
    Company,
    Position,
    Identity,
    Technology,
    Friend,
    Certification,
    Experience,
    Education,
    Testimonial,
    Hardware,
    Software,
    AboutPageContent,
    ProjectPageContent,
    BlogPageContent,
    CreditsPageContent,
    PrivacyPageContent,
    ContactPageContent,
    NotFoundPageContent,
    HomePageContent,
  } from "./types/config";

  // Common ===========================================================================
  export const position: Position = {
    company: {
      logo: "/companylogo.jpg",
      name: "Swiss Armed Forces",
      location: "Berne, Switzerland",
    },
    jobTitle: "ICT Systemspecialist I",
    title: "Swiss Armed Forces",
    url: "https://www.vtg.admin.ch/en",
    external: true
  };

  export const identity: Identity = {
    name: "Benjamin Tannheimer",
    avatar: "/common/avatar.jpg",
    blogUrl: "benjamint.io",
    email: "benjamintannheimer [at] protonmail.com",
    utcDiff: 1,
    countryCode: "CH", // use the two letter iso code
    country: "Switzerland",
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
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Homelab",
      url: "/homelab",
    },
  ];
  
  export const friends: Friend[] = [
    {
      description: "The web framework for content-driven websites",
      image: "placeholder/no-image.jpg",
      title: "Astro",
      url: "https://astro.build",
      external: true,
    },
    {
      description: "Beautifully designed components built using Radix UI and Tailwind CSS",
      image: "placeholder/no-image.jpg",
      title: "ShadCN",
      url: "https://shadcn.com",
      external: true,
    }
  ];
  

  export const socialLinks: SocialLink[] = [
    {
      title: "GitHub",
      url: "https://github.com/bt18b",
      icon: "Github",
      external: true,
    },
    {
      title: "Mail",
      url: "mailto:benjamintannheimer [at] protonmail.com",
      icon: "Mail",
      external: true,
    },
    {
      title: "LinkedIn",
      url: "https://example.com",
      icon: "Linkedin",
      external: true,
    },
  ];
  
  // ComponentContent =================================================================

  export const technologies: Technology[] = [
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    }
  ];

  export const hardware: Hardware[] = [
    {
      title: "MacBook Pro 2021",
      url: "https://affiliate.example.com/macbookpro2021",
      external: true,
      usage: "Work",
      details: "14-inch, Apple M1 Pro with 10‑Core CPU, 16‑Core GPU and 16‑Core Neural Engine, 32 GB RAM, 512 GB SSD, QWERTY = English (International)"
    },
    {
      title: "Backup MacBook Pro 2015",
      url: "https://affiliate.example.com/macbookpro2015",
      external: true,
      usage: "Backup",
      details: "13-inch, 2.7 GHz Intel Core i5, 16 GB RAM, 256 GB SSD, QWERTY = English (International)"
    },
    {
      title: "Mobile Laptop Stand",
      url: "https://affiliate.example.com/mobile-laptop-stand",
      external: true,
      usage: "Ergonomics",
      details: ""
    },
    {
      title: "Trackpad and Keyboard",
      url: "https://affiliate.example.com/trackpad-keyboard",
      external: true,
      usage: "Input",
      details: ""
    },
    {
      title: "Headphones: Sennheiser Pro Audio Professional HD 25",
      url: "https://affiliate.example.com/sennheiser-hd25",
      external: true,
      usage: "Audio",
      details: ""
    },
    {
      title: "Display: Dell UltraSharp 32 4k UHD",
      url: "https://affiliate.example.com/dell-ultrasharp-32",
      external: true,
      usage: "Display",
      details: ""
    },
    {
      title: "Microphone: Blue Yeti USB Microphone",
      url: "https://affiliate.example.com/blue-yeti",
      external: true,
      usage: "Recording",
      details: ""
    }
  ];
  
  export const software: Software[] = [
    {
      title: "Fastmail",
      url: "https://affiliate.example.com/fastmail",
      external: true,
      pricing: "PAID",
      usage: "Email",
      // details: ""
    },
    {
      title: "Digital Ocean",
      url: "https://affiliate.example.com/digitalocean",
      external: true,
      pricing: "PAID",
      usage: "Hosting",
      // details: ""
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
    {
      title: "Termius",
      url: "https://affiliate.example.com/fastmail",
      external: true,
      pricing: "PAID",
      usage: "SSH Connections"
    },
    // {
    //   title: "",
    //   url: "https://affiliate.example.com/fastmail",
    //   external: true,
    //   pricing: "FREE",
    //   usage: ""
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
    {
      image: "/certifications/cisco.jpg",
      plannedDate: new Date("10.10.2025"),
      title: "CCNA",
      url: "https://example.com",
      external: true,
    },
    {
      image: "/certifications/itil-v4-foundation.png",
      title: "ITIL4F",
      plannedDate: new Date("10.10.2025"),
      url: "https://example.com",
      external: true,
    }
  ]

  export const experiences: Experience[] = [
    {
      title: "ICT System Specialist I",
      url: "https://example.com",
      external: true,
      logo: "/placeholder/no-image.jpg",
      company: "Swiss Armed Forces",
      date: "Nov 2024 - Nov 2025",
      description: "Developing intuitive UIs with Astro and Tailwind CSS while collaborating on design and user experience improvements.",
      technologies: [
        { name: "RedHat" },
        { name: "Cisco" },
        { name: "Django" },
      ]
    },
    {
      title: "Frontend Developer",
      url: "https://example.com",
      external: true,
      logo: "/placeholder/no-image.jpg",
      company: "Intersim AG",
      date: "Aug 2024 - Oct 2024",
      description: "Developing and delivering business web applications within the TYPO3 circle.",
      technologies: [
        { name: "Typo3" },
        { name: "PHP" },
        { name: "Docker" },
      ]
    },
    {
      title: "Apprentice Application Developer Way-Up EFZ",
      url: "https://example.com",
      external: true,
      logo: "/placeholder/no-image.jpg",
      company: "Swisscom (Switzerland) AG",
      date: "Aug 2022 - Jul 2024",
      description: "During my apprenticeship at Swisscom as an Application Developer through the Way-Up EFZ program, I gained hands-on experience in designing, developing, and testing software solutions. I worked collaboratively with cross-functional teams on diverse projects, which helped me hone my skills in modern programming languages and agile methodologies. This role provided a strong foundation in real-world application development and an in-depth understanding of the telecommunications industry.",
      technologies: [
        { name: "Next.js" },
        { name: "Nest.js" },
        { name: "FastAPI" },
        { name: "MariaDB" },
        { name: "MongoDB" },
        { name: "MinIO" },
        { name: "Docker" },
      ]
    }
  ];

  export const education: Education[] = [
    {
      title: "Gymnasium Neufeld",
      url: "https://example.com",
      external: true,
      logo: "/placeholder/no-image.jpg",
      degree: "Swiss Matura",
      date: "2018 - 2022",
      description: "Completed the Swiss Matura, a secondary school diploma that provides a broad academic foundation and prepares students for higher education in Switzerland."
    }    
  ];

  export const testimonials: Testimonial[] = [
    {
      name: "Jason Smith",
      jobTitle: "VP of Product Development at Netflix",
      text: "Working with [Name] is amazing, his ability to comprehend and explain complex topics and apply them is fantastic.",
      avatar: "/common/avatar.jpg",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "LinkedIn", url: "https://linkedin.com/in/jasonsmith", external: true }
      ]
    },
    {
      name: "Amanda Johnson",
      jobTitle: "CEO at Creative Solutions",
      text: "Collaborating with [Name] was a turning point for our business, bringing innovation and efficiency.",
      avatar: "/common/avatar.jpg",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "Twitter", url: "https://twitter.com/amandajohnson", external: true }
      ]
    },
    {
      name: "Michael Lee",
      jobTitle: "CTO at Innovative Tech",
      text: "His technical skills and visionary approach have made him an indispensable asset to our team.",
      avatar: "/common/avatar.jpg",
      links: [
        { title: "LinkedIn", url: "https://linkedin.com/in/michaellee", external: true },
        { title: "Portfolio", url: "https://michaelleeportfolio.com", external: true }
      ]
    },
    {
      name: "Emily Davis",
      jobTitle: "Marketing Director at Trendsetters Inc.",
      text: "His insights into digital strategy have transformed our campaigns and increased our ROI.",
      avatar: "/common/avatar.jpg",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "LinkedIn", url: "https://linkedin.com/in/emilydavis", external: true }
      ]
    }
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
      title: "Hi, I'm Ben. I'm a developer.",
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
            image: "/common/avatar.jpg",
            url: "https://github.com/bt18b",
          },
          date: "2021 - Present",
        },
        {
          title: "Software Developer",
          company: {
            name: "Freelance",
            image: "/common/avatar.jpg",
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
        title: "Project 1",
        description: "Project 1 Description",
        image: "/placeholder/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
        tech: [
          "Django",
        ]
      },
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/placeholder/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
        tech: [
          "Django",
        ]
      },
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/placeholder/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
        tech: [
          "Django",
        ]
      },
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