export type BaseLink = {
    title: string;
    url: string;
    external?: boolean;
  };

  export type NavBarLink = BaseLink & {};
  
  export type SocialLink = BaseLink & {
    icon: string;
  };
  
  export type Company = {
    logo: string;
    name: string;
    location: string;
  };

  export type Position = BaseLink & {
    company: Company;
    jobTitle: string;
  }

  export enum TechnologyType {
    Language = "Language",
    Framework = "Framework",
    Library = "Library",
    RuntimePlatform = "Runtime / Platform",
    Database = "Database",
    Storage = "Storage",
    ORMQueryTool = "ORM / Query Tool",
    CloudPlatform = "Cloud Platform",
    DevOpsTool = "DevOps Tool",
    VersionControl = "Version Control",
    Testing = "Testing",
    Security = "Security",
    Scripting = "Scripting",
    APIIntegration = "API / Integration",
    DataAI = "Data & AI",
    Visualization = "Visualization",
    IDEEditor = "IDE / Editor",
    Collaboration = "Collaboration",
    OtherTool = "Other Tool",
    OperatingSystem = "Operating System",
    Vendor = "Vendor"
  }


  export type Technology = {
    name: string;
    color?: string;
    image?: string;
    type: TechnologyType;
  }

  export type Software = Partial<BaseLink> & {
    details?: string;
  }

  export type Hardware = Partial<BaseLink> & {
    usage?: string;
    details?: string;
  }

  export type Friend = BaseLink & {
    description: string;
    image: string;
  }

  export type Certification =
  | (BaseLink & {
      image: string;
      plannedDate?: Date;
    })
  | (BaseLink & {
      image: string;
      date: Date;
      expireDate?: Date;
    });

  export type Experience = BaseLink & {
    logo: string;
    company: string;
    date: string;
    current?: boolean;
    country: string;
    description: string[];
    technologies: Technology[];
  }

  export type Education = BaseLink & {
    degree: string;
    logo: string;
    country: string;
    date: string;
    description: string[];
  }

  export type Testimonial = {
    name: string;
    jobTitle: string;
    text: string;
    avatar: string;
    links: BaseLink[];
  }

  export type Figure = Partial<BaseLink> & {
    figure: number;
    description: string;
    lastUpdated?: Date;
  }

  export type Recognition = Partial<BaseLink> & {
    issuedBy: string;
    date: Date;
  }

  export type Interest = {
    title: string;
    details: string;
  }

  export type Identity = {
    name: string;
    avatar: string;
    blogUrl: string;
    email: string;
  };
  
  export type SEOInfo = {
    title: string;
    description: string;
    image: string;
  };
  
  export type PageContent = {
    name: string;
    title: string;
    subtitle?: string;
  }

  export type BasePage = {
    seo: SEOInfo;
    page: PageContent;
    backlink?: BaseLink;
  }

  export type HomePageContent = BasePage & {
    role: string;
    description: string;
    socialLinks: SocialLink[];
    links: {
      title: string;
      url: string;
      external?: boolean;
    }[];
  };
  
  export type AboutPageContent = BasePage & {
    about: {
      description: string;
    };
    work: {
      description: string;
      items: ResumeItem[];
    };
    connect: {
      description: string;
      links: SocialLink[];
    };
  };
  
  export type Project = {
    title: string;
    description: string;
    image: string;
    year: string;
    url: string;
    tech: string[];
  };

  export type Credit = {
    name: string;
    role: string;
    comment?: string;
  };
  
  export type ProjectPageContent = BasePage & {
    projects: Project[];
  };
  
  export type BlogPageContent = BasePage & {};
  
  export type HomelabPageContent = BasePage & {};

  export type CreditsPageContent = BasePage & {
    description: string;
    creditsList: {
      intro: string;
      items: Credit[];
      thankYou: string;
    };
  };
  
  export type PrivacyPageContent = BasePage & {
    statement: string;
  };

  export type ContactPageContent = BasePage & {};

  export type NotFoundPageContent = BasePage & {};

  export type ResumeItem = {
    title: string;
    company: {
      name: string;
      image: string;
      url: string;
    };
    date: string;
  };