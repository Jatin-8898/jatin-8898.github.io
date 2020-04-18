
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi, I'm Jatin Varlyani ",
  subTitle: emoji("A passionate Full Stack Web Developer 🚀 | Open Source Contributor 🔥 | Technical Blogger ✍️  | Tech Enthusiast 🌈"),
  resumeLink: "https://drive.google.com/file/d/1vd7YUwRSfUuuYEv2omexGWtiMVljgQ33/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Jatin-8898",
  linkedin: "https://www.linkedin.com/in/jatin-varlyani/",
  medium: "https://www.medium.com/@Jatin_8898/",
  gmail: "varlyanijatin88@gmail.com",
  stackoverflow: "https://stackoverflow.com/story/jatin-8898",
  hackerrank: "https://www.hackerrank.com/varlyanijatin88/",
  twitter: "https://twitter.com/Jatin_8898/"
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CURIOUS DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end User Interfaces for your web and mobile applications"),
    emoji("⚡ I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly."),
    emoji("⚡ Since I love both programming and designing, I'm also interested in creating programmatic designs and creative coding projects.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gulp",
      fontAwesomeClassname: "fab fa-gulp"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "MmNjNTI5MTQxMGFiMmI5YjllMzNkZGMyOGU2YmQ2NDhlZmMzNDg3NQ==",
  githubUserName: "Jatin-8898"
};


// Some Big Projects You have worked with your company

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that i have done !!",

  achivementsCards: [
    {
      title: "Cloud Engineering with Google Cloud",
      description: "Cloud Engineering with Google Cloud",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj1cFhTq95_ricMPUUMo-p27OE_ZoNG8p_aVoaClBrXjek7y-E&usqp=CAU",
      footerLink: [{ name: "Specialization Certificate", url: "https://drive.google.com/file/d/1enPd8tasmXiBoIGzz9hUfp07UaE_BbqB/view?usp=sharing" }]
    },
    {
      title: "Google Assistant Action",
      description: "Developed a Google Assistant Action Jatin Quiz that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/0000008e42bd7130?hl=en-US" }]
    },
    {
      title: "Crash course on Python Coursera",
      description: "Crash course on Python Coursera",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/15/868c0049a911e8a11dcffe8b39d299/logo_GwG_vert_FullColor_cmykC_428x421px-copy.jpg",
      footerLink: [{ name: "Certificate", url: "https://drive.google.com/open?id=1G87fC56WmsWJVXNqnZLbl-lynEQAqBD9" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url: "https://levelup.gitconnected.com/how-to-setup-your-workflow-using-gulp-v4-0-0-5450e3d7c512",
      image: "https://miro.medium.com/max/2944/1*FH12a2fX61aHOn39pff9vA.jpeg",
      title: "How to setup your Workflow using Gulp v4.0.0",
      description: ""
    },
    {
      url: "https://levelup.gitconnected.com/best-vs-code-extensions-that-you-must-try-in-2019-7add34e7b89d",
      image: "https://miro.medium.com/max/3240/1*WvEjyy_2H-a0SuVHN8IT6g.jpeg",
      title: "Best VS Code Extensions You Need in 2019 🚀",
      description: ""
    },
    {
      url: "https://levelup.gitconnected.com/what-is-git-how-to-use-it-why-to-use-it-explained-in-depth-76a5066abaaa",
      image: "https://miro.medium.com/max/1400/1*Wjxx83j-qyiNvFBy1yOA1w.jpeg",
      title: "What is Git? An overview of Git and why you should use it",
      description: ""
    },
    {
      url: "https://levelup.gitconnected.com/how-to-create-covid-whatsapp-bot-2d424c96a4d6",
      image: "https://miro.medium.com/max/2000/1*pzTq33v4_pTuSjXuUNTB0w.jpeg",
      title: "How to Create Covid Whatsapp Bot",
      description: ""
    }
  ]
};


const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Drop me a line at",
  email_address: "varlyanijatin88@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Jatin_8898"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource,  achievementSection, blogSection, contactInfo , twitterDetails};
