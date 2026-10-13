export const profile = {
  name: 'Swati R. Mestri',
  role: 'Aspiring Software Engineer',
  summary: '...',
  headline: 'Full-Stack Developer | AI/ML Enthusiast',
  intro: '...',
  email: 'swatimestri23@gmail.com',
  github: 'https://github.com/swatimestri',
  linkedin: 'https://linkedin.com/in/swatimestri',
  phone: '+91 9035700915',
  resume: '/Swati-R-Mestri-Resume.pdf',
  location: 'Hubballi, Karnataka',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories = [
  {
    title: 'Languages',
    items: ['C', 'Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Java', 'Spring Boot'],
  },
  {
    title: 'AI / ML',
    items: ['OpenCV', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'AI-powered applications'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Eclipse'],
  },
];

export const experience = [
  {
    company: 'Athreya Technologies Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    location: 'Hubballi, Karnataka',
    duration: 'January 2024 – May 2024',
    technologies: ['Java', 'Spring Boot', 'JSP', 'HTML', 'CSS', 'JavaScript', 'GitHub'],
    description:
      'Contributed to the design and implementation of a full-stack web application in a professional development environment.',
    impact: [
      'Developed a full-stack web application using Java, Spring Boot, JSP, HTML, CSS, and JavaScript.',
      'Collaborated with the development team to design and implement responsive, user-friendly interfaces.',
      'Used Git and GitHub for version control and collaborative development.',
      'Performed debugging, testing, and code optimization to improve application quality.',
      'Improved cross-browser compatibility by optimizing front-end behavior and styling.',
    ],
  },
];

export const projects = [
  {
    id: 'visiotext',
    name: 'VisioText',
    category: 'AI / Machine Learning / Computer Vision',
    status: 'AI-powered healthcare project',
    shortDescription:
      'An AI-powered system designed to generate descriptive clinical reports from medical images such as X-rays, CT scans, and MRI scans.',
    description:
      'VisioText explores how medical visual data can be translated into clinically useful textual descriptions to support faster, more efficient decision-making in healthcare workflows.',
    stack: ['CNNs', 'Transformers', 'Computer Vision', 'Python', 'AI/ML'],
    features: [
      'Medical image feature extraction using CNN architectures',
      'Transformer-based text generation for clinical descriptions',
      'Healthcare-focused AI pipeline for visual analysis and summarization',
      'Prototype for improving healthcare efficiency and decision support',
    ],
    myContribution: [
      'Designed the architecture for the AI pipeline and medical image processing workflow.',
      'Explored model choices for visual feature extraction and sequence generation.',
      'Focused on conceptual integration between computer vision and natural language generation.',
      'Worked on building a healthcare-oriented use case that demonstrates AI in real-world impact.',
    ],
    architecture: [
      'Input medical image',
      'Feature extraction through CNN layers',
      'Transformer-based language generation',
      'Clinical report output',
    ],
    developmentProcess:
      'The work focused on understanding the problem deeply, exploring appropriate model architectures, and mapping a pipeline that could convert image inputs into textual clinical summaries.',
    challenges: [
      'Designing a robust pipeline that links image understanding with language generation.',
      'Balancing model complexity with a practical healthcare-oriented concept.',
      'Ensuring the project remained grounded in a real-world diagnostic assistive use case.',
    ],
    futureImprovements: [
      'Enhance model performance with more diverse medical datasets.',
      'Add structured evaluation metrics for clinical output quality.',
      'Extend the concept to domain-specific healthcare workflows and reporting interfaces.',
    ],
    problem:
      'Healthcare professionals often need to interpret large volumes of medical images quickly. The project addresses the need for an AI-assisted way to convert visual medical data into clinically understandable textual reports.',
    solution:
      'The system combines computer vision and text-generation techniques to extract image features and generate descriptive reports that can support diagnostic workflows.',
    results: 'The project showcases an applied AI system for healthcare data interpretation and demonstrates practical use of computer vision and NLP in a high-impact domain.',
    github: 'https://github.com/swatimestri',
    demo: null,
    highlight: true,
    accent: 'AI/ML',
  },
  {
    id: 'research-paper-assistant',
    name: 'Multi-Agent Research Paper Assistant',
    category: 'AI / NLP / Multi-Agent Systems',
    status: 'Ongoing',
    shortDescription:
      'An AI-powered research assistant designed to automate research-paper retrieval, analysis, and comparative synthesis.',
    description:
      'This project aims to simplify literature review workflows by combining semantic search, multi-agent reasoning, summarization, and comparative analysis in a single research workflow.',
    stack: ['NLP', 'Multi-Agent Systems', 'Semantic Search', 'AI Integration', 'Python'],
    features: [
      'Semantic retrieval for relevant research papers',
      'Multi-agent architecture for research analysis',
      'Summarization and comparative analysis',
      'Research gap identification',
      'AI and NLP-driven workflow automation',
    ],
    myContribution: [
      'Designed the end-to-end research assistant concept and workflow.',
      'Explored multi-agent coordination for paper retrieval and synthesis.',
      'Focused on building an AI-driven knowledge workflow that can accelerate literature review.',
      'Worked on structuring the architecture for retrieval, summarization, and analysis tasks.',
    ],
    architecture: [
      'User query',
      'Agent-based retrieval layer',
      'Paper analysis and summarization agents',
      'Comparative synthesis and gap detection',
    ],
    developmentProcess:
      'The work is centered on reducing research friction by designing separate agent responsibilities for retrieval, analysis, synthesis, and gap identification.',
    challenges: [
      'Designing a system that balances information retrieval with synthesis quality.',
      'Structuring a multi-agent approach so each task has a clear purpose and output.',
      'Creating a workflow that remains useful for academic and practical research settings.',
    ],
    futureImprovements: [
      'Add deeper document ranking and search quality improvements.',
      'Integrate more advanced summarization and comparison workflows.',
      'Expand the system into a robust research productivity assistant for users.',
    ],
    problem:
      'Researchers and students often spend significant time identifying relevant papers, reading them, and extracting the key takeaways. This workflow can become slow and repetitive.',
    solution:
      'The assistant uses agent-based workflows for retrieval, summarization, and comparative analysis to reduce manual effort and improve research efficiency.',
    results: 'The project is actively evolving and focuses on building a practical AI research tool with strong future potential for academic and industry workflows.',
    github: 'https://github.com/swatimestri',
    demo: null,
    highlight: true,
    accent: 'Research AI',
  },
  {
    id: 'civictrack',
    name: 'CivicTrack',
    category: 'Full Stack / Social Impact / Hackathon',
    status: '2nd Runner-Up / 3rd Place at HackArena 2K26',
    shortDescription:
      'A smart civic issue reporting platform designed to make public complaints easier to report, track, and resolve.',
    description:
      'CivicTrack combines digital reporting, GPS-based issue capture, authority dashboards, and complaint analytics to help cities respond to civic issues more effectively.',
    stack: ['React', 'Supabase', 'Firebase Authentication', 'Maps', 'Full Stack'],
    features: [
      'Civic issue reporting with location-based details',
      'Authority dashboard for tracking issue resolution',
      'Interactive maps for issue visualization',
      'Complaint analytics and reporting insights',
      'User authentication and secure app flow',
    ],
    myContribution: [
      'Contributed to building a full-stack solution for issue reporting and dashboard workflows.',
      'Worked on interface and interaction design to make the platform user-friendly and practical.',
      'Helped shape a social-impact product with strong usability and functionality.',
    ],
    architecture: [
      'User submits issue',
      'Location and details captured',
      'Issue stored and visualized',
      'Authority dashboard monitors progress',
    ],
    developmentProcess:
      'The team focused on translating a social-impact problem into a product concept with clear user flows, reporting functionality, and an administrative dashboard.',
    challenges: [
      'Designing a product that felt useful for both citizens and authorities.',
      'Creating a clean reporting experience while also enabling structured management workflows.',
      'Balancing usability with a realistic civic product scenario in a hackathon setting.',
    ],
    futureImprovements: [
      'Add more advanced analytics and complaint trend detection.',
      'Improve dashboard usability for authority teams and city workflows.',
      'Expand with stronger map and location-based insights.',
    ],
    problem:
      'Many civic issues go unreported or remain unresolved because people lack a simple, organized way to document and track them.',
    solution:
      'The platform gives citizens a structured reporting interface while enabling authorities to manage complaints, monitor patterns, and act faster.',
    results: 'The project earned 2nd Runner-Up / 3rd Place at HackArena 2K26 and highlights strong problem-solving, product thinking, and full-stack execution.',
    github: 'https://github.com/swatimestri',
    demo: null,
    highlight: false,
    accent: 'Hackathon',
  },
  {
    id: 'pet-paradise',
    name: 'Pet Paradise',
    category: 'Full Stack / E-Commerce',
    status: 'Responsive pet shop management system',
    shortDescription:
      'A responsive e-commerce pet shop management system for managing pet sales and accessories with streamlined operations.',
    description:
      'Pet Paradise digitizes manual pet-shop workflows, making it easier to manage inventory, sales, and customer details through a clean digital interface.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Responsive UI'],
    features: [
      'Inventory management for pet products and accessories',
      'Sales tracking and customer management',
      'Responsive web interface for easy day-to-day operations',
      'Digital transformation of manual business processes',
    ],
    myContribution: [
      'Built a complete full-stack workflow covering product management and sales operations.',
      'Focused on improving business usability and front-end responsiveness.',
      'Worked on practical application design for a real-world operational use case.',
    ],
    architecture: [
      'User-facing product catalogue',
      'Inventory and sales management layer',
      'Customer and transaction records',
      'Operational dashboard',
    ],
    developmentProcess:
      'The project focused on creating a practical digital workflow for a pet shop by improving inventory visibility, sales operations, and customer management in one interface.',
    challenges: [
      'Designing a clean operational system without overwhelming the user.',
      'Mapping business needs into a user-friendly dashboard and transaction flow.',
      'Ensuring the interface remained responsive across devices.',
    ],
    futureImprovements: [
      'Add payment and order management workflows.',
      'Improve analytics for inventory trends and sales performance.',
      'Expand into a fuller commerce experience with customer-facing sections.',
    ],
    problem:
      'Small pet shops often rely on manual processes for inventory, customer data, and sales records, which can lead to inefficiencies and errors.',
    solution:
      'Pet Paradise provides a centralized and responsive management system that digitizes core operations and reduces manual effort.',
    results: 'The project demonstrates strong full-stack design thinking and practical product experience in an operational business context.',
    github: 'https://github.com/swatimestri',
    demo: null,
    highlight: false,
    accent: 'E-commerce',
  },
];

export const achievements = [
  {
    title: 'HackArena 2K26',
    subtitle: '2nd Runner-Up / 3rd Place Winner',
    meta: 'Jain College of Engineering and Technology, Hubballi • 2026',
    prize: '₹3,000 cash prize',
  },
  {
    title: 'MINDTECH Mystery Quiz — Advitiya 2024',
    subtitle: 'First Prize',
    meta: 'KLE Institute of Technology, Hubballi',
    prize: '₹5,000 cash prize',
  },
];

export const education = [
  {
    program: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Jain College of Engineering and Technology, Hubballi, Karnataka',
    period: '2024–2027',
    score: 'CGPA: 8.36 till 6th semester',
  },
  {
    program: 'Diploma in Computer Science and Engineering',
    institution: 'JSS K.H. Kabbur Institute of Engineering, Dharwad',
    period: '2021–2024',
    score: 'CGPA: 9.20',
  },
];

export const certifications = [
  {
    name: 'TCS ION Career Edge — Young Professional',
    issuer: 'TATA Consultancy Services ION',
    date: 'October 2025',
  },
  {
    name: 'Full Stack Development: Introduction',
    issuer: 'Infosys SpringBoard',
    date: 'July 2023',
  },
];

export const socialLinks = {
  github: 'https://github.com/swatimestri',
  linkedin: 'https://linkedin.com/in/swatimestri',
  email: 'mailto:swatimestri23@gmail.com',
};
