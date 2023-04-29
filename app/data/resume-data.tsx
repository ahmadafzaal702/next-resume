// personal data interface
interface personalData {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
}

export const personalData: personalData = {
  name: "Afzaal Ahmad",
  role: "Frontend Developer",
  education: [
    "Bachelor of Science in Information Technology, University of Gujrat (2014-2018).",
    "Master of Science in Information Technology, University of Gujrat (2018-2021).",
  ],
  contactLinks: [
    "mailto:ahmadafzaal703@gmail.com",
    "https://twitter.com/afzaalahmad845",
    "https://www.linkedin.com/afzaalahmad845/",
  ],
};

// aboutMe data interface
export interface aboutMeInterface {
  title: string;
  body: string[];
}

export const aboutMe: aboutMeInterface = {
  title: "About Me",
  body: [
    "As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.",
    "When I'm not working, I love hiking, reading, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team.",
  ],
};

// skills data interface
export interface skillsDataInterface {
  soft: { icon: string; text: string }[];
  hard: { icon: string; text: string }[];
}

export const skillsData: skillsDataInterface = {
  soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Problem Solving" },
    { icon: "⌛️", text: "Time management" },
  ],
  hard: [
    { icon: "💻", text: "Javascript" },
    { icon: "ʦ", text: "TypeScript" },
    { icon: "🚀", text: "React" },
    { icon: "💾", text: "SQL" },
    { icon: "💾", text: "noSQL" },
    { icon: "📈", text: "NextJs" },
  ],
};

// Professional Experience Data Interface
export interface proExpInterface {
  title: string;
  experiences: {
    role: string;
    description: string;
    current: boolean;
  }[];
}

export const proExpData: proExpInterface = {
  title: "Professional Experience",
  experiences: [
    {
      role: "Data Scientist, Acme Inc. (2021-Present)",
      description:
        "Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
      current: true,
    },
    {
      role: "Machine Learning Engineer, XYZ Corp. (2019-2021)",
      description:
        "Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
      current: false,
    },
    {
      role: "Machine Learning Engineer, ABX Corp. (2020-2021)",
      description:
        "Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
      current: false,
    },
  ],
};
