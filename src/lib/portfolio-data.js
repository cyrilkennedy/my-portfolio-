export const siteConfig = {
  name: "Kennedy",
  title: "Full-Stack Developer, Cybersecurity Analyst, and Graphic Designer",
  summary:
    "I build polished web experiences, practical backend systems, and security-minded digital products with equal attention to clarity, resilience, and presentation.",
  location: "Based in Nigeria",
  availability: "Open to internships, freelance work, and junior developer opportunities",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1bzIzIfhGOQ4El1X6t2zp_mbCMluhqjkS",
  profileImage:
    "https://res.cloudinary.com/djj2lukes/image/upload/v1758839183/WhatsApp_Image_2025-08-05_at_14.17.10_db9d8238_g8klxm.jpg",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/graphic-design", label: "Graphic Design" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/cyril-kennedy-28130b306",
    label: "LinkedIn",
    icon: "in",
    actionLabel: "Open profile",
  },
  {
    href: "https://github.com/cyrilkennedy",
    label: "GitHub",
    icon: "gh",
    actionLabel: "Open profile",
  },
  {
    href: "https://x.com/Kennyford70?t=HGGfSpBKcOXAN_tfD3GeVw&s=09",
    label: "X",
    icon: "x",
    actionLabel: "Open profile",
  },
  {
    href: "https://wa.me/2347081135820",
    label: "WhatsApp",
    icon: "wa",
    actionLabel: "Start chat",
  },
];

export const heroStats = [
  { value: "3", label: "disciplines brought together" },
  { value: "8", label: "portfolio highlights across the site" },
  { value: "1", label: "hands-on internship completed" },
  { value: "2", label: "IBM certifications in progress" },
];

export const expertiseGroups = [
  {
    title: "Build",
    description: "Product-minded development from interface to API.",
    items: ["Next.js", "React", "Node.js", "Express", "REST APIs", "JavaScript"],
  },
  {
    title: "Secure",
    description: "Security awareness woven into the engineering process.",
    items: ["Kali Linux", "Nmap", "Metasploit", "Wireshark", "Burp Suite", "SQLmap"],
  },
  {
    title: "Design",
    description: "Brand and visual communication that supports the product story.",
    items: ["CorelDRAW X7", "Corel Designer", "Poster Design", "Logo Design", "UI Mockups"],
  },
];

export const featuredProjects = [
  {
    title: "Upgrade Financial Service Landing Page",
    description:
      "A finance-focused landing page built with React and Vite, using confident dark visuals, clear calls to action, and product storytelling to create trust quickly.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1758890622/Screenshot_38_nrev3f.png",
    tags: ["Frontend", "UI Design", "Landing Page"],
    href: "/projects",
  },
  {
    title: "CryptoTrade Demo Platform",
    description:
      "A crypto-themed product showcase with a fintech visual system, practical coin-listing patterns, and a user-friendly content structure for presenting complex information clearly.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1758890618/Screenshot_40_erseux.png",
    tags: ["React", "Fintech UI", "Deployment"],
    href: "/projects",
  },
  {
    title: "Kali Linux Troubleshooting Workflow",
    description:
      "A real-world troubleshooting case focused on package-manager repair, repository issues, and resilient command-line problem solving inside a Linux environment.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1758884532/Screenshot_From_2025-05-13_09-21-39_f82f3t.png",
    tags: ["Linux", "Troubleshooting", "Cybersecurity"],
    href: "/cybersecurity",
  },
];

export const projects = [
  {
    title: "User Registration API",
    description:
      "Built and tested a `/register` endpoint in a Node.js environment, handling structured JSON user data and returning successful responses through Postman as an early authentication workflow.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1758884904/Screenshot_50_ozvmwm.png",
    href: "https://github.com/cyrilkennedy/api-with-postman-first-.git",
    tags: ["Node.js", "Postman", "Backend"],
    writeup: [
      "This project focused on understanding how backend registration logic works in practice instead of only studying it in theory. I used Postman to send user details into the endpoint and confirmed the API responded correctly with a `200 OK` status.",
      "The work demonstrates comfort with request handling, JSON payload structure, route testing, and the early foundations of a secure authentication system that can later grow into login, validation, and persistence features.",
    ],
    highlights: ["JSON request handling", "Endpoint testing", "Authentication basics"],
  },
  {
    title: "CryptoTrade Demo Cryptocurrency Platform",
    description:
      "Developed with React and Vite, then deployed to Vercel as a demo trading platform with fintech-inspired visuals, strong calls to action, and a clear coin-listing section for assets like BTC, ETH, and XRP.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1758890618/Screenshot_40_erseux.png",
    href: "https://github.com/cyrilkennedy/firstapi.git",
    tags: ["React", "Vercel", "Product UI"],
    writeup: [
      "The aim here was to present complex financial information in a way that still feels approachable to everyday users. I structured the page like a modern product landing page so the design could lead users naturally from introduction to action.",
      "It highlights frontend development skills, deployment workflow, and the ability to package a technical idea inside a polished visual experience that feels credible and easy to understand.",
    ],
    highlights: ["Landing page storytelling", "Frontend deployment", "Fintech UI direction"],
  },
  {
    title: "Authentication and Account Management API",
    description:
      "Developed a set of RESTful routes in Node.js and Express for login, logout, registration, and password reset flows, with dynamic routing and structured JSON responses.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759162151/params_bdl8ev.png",
    href: "https://github.com/cyrilkennedy/register-login-param.git",
    tags: ["Express", "Authentication", "APIs"],
    writeup: [
      "This project moved beyond a single endpoint and into a more complete user-management flow. I worked with multiple routes and account actions to model how users interact with an application across the full authentication lifecycle.",
      "It demonstrates practical API organisation, route parameter handling, clean response design, and the kind of backend structure needed for secure account management in real web applications.",
    ],
    highlights: ["Dynamic route parameters", "Login and reset flows", "REST API structure"],
  },
  {
    title: "Drug Data Management REST API",
    description:
      "Built and tested RESTful endpoints in Node.js and Express for filtering, transforming, and logging drug data with category-based routing and JavaScript array methods.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759162009/api_t0cssy.png",
    href: "https://github.com/cyrilkennedy/med-tech.git",
    tags: ["Node.js", "REST", "JavaScript"],
    writeup: [
      "The API supports routes such as category filtering, lowercase name formatting, formatted data output, and logging for debugging. That made it a strong exercise in using code to shape data for different use cases instead of only returning raw records.",
      "It shows comfort with backend routing, data transformation, debugging output, and the practical use of JavaScript methods to deliver cleaner API responses for consumers.",
    ],
    highlights: ["Category filtering", "Data transformation", "Debug logging"],
  },
];

export const designWorks = [
  {
    title: "Book Bucks Campaign Artwork",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759163167/BOOKBUCKS_ej0phj.jpg",
    description:
      "Bold promotional artwork with high-contrast typography, clear callouts, and a layout designed to make the offer visible immediately.",
  },
  {
    title: "Poster Design Exploration",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759163163/sommy_ukesxs.jpg",
    description:
      "An editorial-style poster composition designed to pull attention quickly through contrast, type scale, and controlled spacing.",
  },
  {
    title: "Hub Brand Visual",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759163167/HUB_1_ijjhjc.jpg",
    description:
      "A cleaner brand-forward composition shaped around clarity, balance, and recognisable identity for a memorable first impression.",
  },
];

export const cyberHighlights = [
  {
    title: "Nmap Network Scan on Kali Linux",
    description:
      "Executed an advanced Nmap scan against a lab target using service detection, OS fingerprinting, and traceroute to document a practical reconnaissance workflow.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759160477/nmap_efcmxy.png",
    tags: ["Reconnaissance", "Kali Linux", "Nmap"],
    writeup: [
      "The scan used flags such as `-sC`, `-sV`, `-O`, `-T4`, `-A`, and `-p-` to push deeper into discovery and fingerprinting. That made the exercise valuable for understanding how different Nmap options change the quality of information returned.",
      "It reflects hands-on practice with enumeration, port analysis, and lab-based target assessment rather than only conceptual cybersecurity study.",
    ],
  },
  {
    title: "Payload Generation and Metasploit Setup",
    description:
      "Captured an ethical-lab workflow for payload creation, encoding, and Metasploit setup to demonstrate authorized offensive-security practice in a controlled environment.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759160710/Screenshot_From_2025-06-24_17-18-53_xi9cnl.png",
    tags: ["Metasploit", "Lab Workflow", "Testing"],
    writeup: [
      "This exercise covered payload generation steps, XOR encoding, obfuscation, and preparation of a controlled command-and-control environment using Metasploit.",
      "It demonstrates familiarity with ethical testing workflow, payload preparation concepts, and the importance of keeping all offensive-security practice inside an authorised lab environment.",
    ],
  },
  {
    title: "APT Package Error Debugging",
    description:
      "Resolved real Kali Linux package-manager failures, including 404 errors and broken dependency issues, using practical troubleshooting steps and repair flags.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759160982/Screenshot_From_2025-05-13_15-37-59_v23zzs.png",
    tags: ["Linux", "Package Management", "Troubleshooting"],
    writeup: [
      "This was strong systems practice because it involved dealing with operating-system issues that interrupt real workflows. Fixing APT problems required understanding repositories, package states, and recovery options rather than trying random commands.",
      "It shows patience, command-line confidence, and the ability to debug technical issues that sit below the application layer.",
    ],
  },
  {
    title: "Reverse Shell Multi-Handler Configuration",
    description:
      "Configured a Metasploit multi-handler in a controlled environment to receive a reverse TCP connection and prepare the listener side of the workflow.",
    image:
      "https://res.cloudinary.com/djj2lukes/image/upload/v1759161207/Screenshot_From_2025-06-24_17-27-55_kwikn9.png",
    tags: ["Reverse Shell", "Handler Setup", "Ethical Testing"],
    writeup: [
      "The setup included listener configuration with `LHOST` and `LPORT`, validating the options before waiting for an authorised connection inside the lab environment.",
      "It highlights careful configuration, operational readiness, and familiarity with how post-exploitation tooling is prepared for ethical testing demonstrations.",
    ],
  },
];

export const timeline = [
  {
    title: "Smart Hub Tech School Internship",
    body:
      "Worked across full-stack web development, cybersecurity research, and graphic design, gaining experience with collaboration, delivery, and hands-on technical problem solving.",
  },
  {
    title: "IBM Learning Path",
    body:
      "Currently advancing through IBM Cybersecurity Analyst and IBM Full Stack JavaScript Developer certifications to deepen both technical tracks in parallel.",
  },
  {
    title: "Current Focus",
    body:
      "Sharpening the ability to build secure, polished web products that communicate clearly and perform reliably under real usage conditions.",
  },
];

export const principles = [
  "Build products that feel polished, not just functional.",
  "Treat security as part of engineering quality, not an afterthought.",
  "Use design to make technical work easier to understand and trust.",
];
