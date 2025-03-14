import { makeSEOTitle } from "./lib/utils";
import type {
    NavBarLink,
    SocialLink,
    Position,
    Identity,
    Technology,
    Certification,
    Experience,
    Education,
    Testimonial,
    AboutPageContent,
    ProjectPageContent,
    BlogPageContent,
    CreditsPageContent,
    PrivacyPageContent,
    ContactPageContent,
    NotFoundPageContent,
    HomePageContent,
  } from "./types/config";
  
  export const position: Position = {
    companyLogo: "/companylogo.jpg",
    companyName: "Swiss Armed Forces",
    companyLocation: "Berne, Switzerland",
    jobTitle: "ICT Systemspecialist I",
    title: "Swiss Armed Forces",
    url: "https://www.vtg.admin.ch/en",
    external: true
  };

  export const identity: Identity = {
    name: "Benjamin Tannheimer",
    avatar: "/avatar.jpg",
    email: "benjamintannheimer [at] protonmail [dot] com",
    utcDiff: 1,
    countryCode: "CH", // use the two letter iso code
    country: "Switzerland",
  };

  export const technologies: Technology[] = [
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    },
    {
      name: "JavaScript",
      image: "/JavaScript-logo.png",
    }
  ];

  export const certifications: Certification[] = [
    {
      image: "/redhat.png",
      date: new Date("03.07.2025"),
      expireDate: new Date("3.7.2028"),
      title: "RHCSA",
      url: "https://www.credly.com/badges/b6e3d75e-cb18-4729-b597-706451da7249/public_url",
      external: true,
    },
    {
      image: "/cisco.jpg",
      plannedDate: new Date("10.10.2025"),
      title: "CCNA",
      url: "https://example.com",
      external: true,
    },
    {
      image: "/itil-v4-foundation.png",
      title: "ITIL4F",
      url: "https://example.com",
      external: true,
    }
  ]
  
  export const experiences: Experience[] = [
    {
      title: "ICT System Specialist I",
      company: "Swiss Armed Forces",
      date: "Nov 2024 - Nov 2025",
      description: "Developing intuitive UIs with Astro and Tailwind CSS while collaborating on design and user experience improvements."
    },
    {
      title: "Frontend Developer",
      company: "Intersim AG",
      date: "Aug 2024 - Oct 2024",
      description: "Developing and delivering business web applications within the TYPO3 circle."
    },
    {
      title: "Apprentice Application Developer Way-Up EFZ",
      company: "Swisscom (Switzerland) AG",
      date: "Aug 2022 - Jul 2024",
      description: "During my apprenticeship at Swisscom as an Application Developer through the Way-Up EFZ program, I gained hands-on experience in designing, developing, and testing software solutions. I worked collaboratively with cross-functional teams on diverse projects, which helped me hone my skills in modern programming languages and agile methodologies. This role provided a strong foundation in real-world application development and an in-depth understanding of the telecommunications industry."
    }
  ];

  export const education: Education[] = [
    {
      degree: "Swiss Matura",
      institution: "Gymnasium Neufeld",
      date: "2018 - 2022",
      description: "Completed the Swiss Matura, a secondary school diploma that provides a broad academic foundation and prepares students for higher education in Switzerland."
    }    
  ];

  export const testimonials: Testimonial[] = [
    {
      name: "Jason Smith",
      jobTitle: "VP of Product Development at Netflix",
      text: "Working with [Name] is amazing, his ability to comprehend and explain complex topics and apply them is fantastic.",
      avatar: "/avatar.jpg",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "LinkedIn", url: "https://linkedin.com/in/jasonsmith", external: true }
      ]
    },
    {
      name: "Amanda Johnson",
      jobTitle: "CEO at Creative Solutions",
      text: "Collaborating with [Name] was a turning point for our business, bringing innovation and efficiency.",
      avatar: "/avatar.jpg",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "Twitter", url: "https://twitter.com/amandajohnson", external: true }
      ]
    },
    {
      name: "Michael Lee",
      jobTitle: "CTO at Innovative Tech",
      text: "His technical skills and visionary approach have made him an indispensable asset to our team.",
      avatar: "/avatar.jpg",
      links: [
        { title: "LinkedIn", url: "https://linkedin.com/in/michaellee", external: true },
        { title: "Portfolio", url: "https://michaelleeportfolio.com", external: true }
      ]
    },
    {
      name: "Emily Davis",
      jobTitle: "Marketing Director at Trendsetters Inc.",
      text: "His insights into digital strategy have transformed our campaigns and increased our ROI.",
      avatar: "/avatar.jpg",
      links: [
        { title: "Website", url: "https://example.com", external: true },
        { title: "LinkedIn", url: "https://linkedin.com/in/emilydavis", external: true }
      ]
    }
  ];

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
      title: "Archive",
      url: "/archive",
    },
    {
      title: "Projects",
      url: "/projects",
    },
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
      url: "mailto:benjamintannheimer [at] protonmail [dot] com",
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
  
  // Home (/)
  export const homePageContent: HomePageContent = {
    seo: {
      title: makeSEOTitle("Home", identity.name),
      description:
        "Employee from Switzerland who loves building cool things using code.",
      image: identity.avatar,
    },
    page: {
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
      title: "Hi, I'm Benjamin Tannheimer 👋",
      subtitle: "Passionate software developer with a love for web technologies, open-source projects, and automation."
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
            image: "/avatar.jpg",
            url: "https://github.com/bt18b",
          },
          date: "2021 - Present",
        },
        {
          title: "Software Developer",
          company: {
            name: "Freelance",
            image: "/avatar.jpg",
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
      title: "Projects",
      subtitle: "Check out what I've been working on"
    },
    projects: [
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
      },
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
      },
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
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
      title: "Credits",
      subtitle: "Some cool people I got inspiration from"
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
      title: "Privacy",
      subtitle: "Privacy policy"
    },
  };

  // Contact (/contact)
  export const contactPageContent: ContactPageContent = {
    seo: {
      title: makeSEOTitle("Contact", identity.name),
      description: "Contact",
      image: identity.avatar,
    },
    page: {
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
      title: "404",
      subtitle: "Page not found"
    },
  };