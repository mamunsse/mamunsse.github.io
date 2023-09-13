// gitprofile.config.js

const config = {
  github: {
    username: 'mamunsse', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mamun-rwth',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+49 15730175534',
    email: 'md.al.mamun@rwth-aachen.de',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1gUA6LJpCbyabhKdsTK-fDAHz6rzXh3hJ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'OOP',
    'Django',
    'Django REST Framework',
    'JavaScript',
    'ReactJS',
    'Redux',
    'JQuery',
    'AJAX',
    'PHP',
    'PHPUnit',
    'CodeIgniter',
    'Laravel',
    'MySQL',
    'SQLite',
    'SQL Server',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'MUI',
    'GitHub Actions',
    'Docker',
    'Jira',
    'Confluence',
    'Agile',
    'Scrum',
    'Teamwork',
    'Software Architecture',
    'RESTful APIs',
    'Data Structures',
    'Algorithms',
  ],
  experiences: [
    {
      company: 'EICe Aachen GmbH',
      position: 'Software Developer - Part-time',
      from: 'March 2020',
      to: 'Present',
      companyLink: 'https://www.center-iba.com/en/',
    },
    {
      company: 'Fraunhofer Institute for Production Technology',
      position: 'Working Student - Part-time',
      from: 'September 2021',
      to: 'March 2022',
      companyLink: 'https://www.ipt.fraunhofer.de/',
    },
    {
      company: 'Apsis Solutions',
      position: 'Software Engineer - Full-time',
      from: 'November 2016',
      to: 'October 2019',
      companyLink: 'https://apsissolutions.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'RWTH Aachen University',
      degree: 'Master, Software Systems Engineering ',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Daffodil International University',
      degree: 'Bachelor, Software Engineering',
      from: '2012',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'CAASP - Computer Aided Assembly Sequence Planning',
      description:
        'Developed next-generation computer-aided assembly sequence planning app for electronic appliance manufacturers. Collaboratively worked with team members from a Hong-Kong based Artificial Intelligence and Robotics company called FLAIR',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Parcel Booking System',
      description:
        'Developed parcel management system for SR group which provides courier services all over Bangladesh. This system contains different modules like parcel booking process, Accounts & finance, Admin, Master Entry. Particularly SR parcel booking process and Accounts and finance module has been developed by me and I was the core responsible person for this project.'
        ,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Eastern Motors Ltd (EML) ERP Solution',
      description:
        'The purpose of the Wings Software is to provide the customer with an effective way to manage their current inventory. System provides an easy to purchase process, Sales, tracking, Accounts and provides a history of previous inventory.'
        ,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Bangladesh Open University ERP Solution',
      description:
        'This university ERP solution provides lots of different functionality. Bangladesh open university have lots of campuses all over Bangladesh. From student registration to result publish system users are able to do everything using this system. I have integrated online payment, Re-examination, Re-scrutiny features in this system.'
        ,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Discovery Tours & Travel',
      description:
        'Tours & Travel Agency Management solution. As part of continuous development of the system, I have integrated accounts module in this system.'
        ,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },

    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
