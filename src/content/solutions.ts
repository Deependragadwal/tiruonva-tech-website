export type Solution = {
  slug: string;
  image: string;
  name: string;
  menuLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  items: string[];
  groups?: { title: string; items: string[] }[];
  cta: string;
  seoTitle: string;
  seoDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "it-networking",
    image: "/images/solutions/networking.jpg",
    name: "IT & Networking Solutions",
    menuLabel: "IT & Networking",
    eyebrow: "Connectivity",
    headline: "Enterprise networks built for reliability and growth.",
    description:
      "From structured cabling and fibre to firewalls, servers and managed Wi-Fi, Tirunova designs and maintains network infrastructure for offices, campuses, hotels, hospitals and industrial sites.",
    items: [
      "Enterprise Networking",
      "LAN/WAN Solutions",
      "Structured Cabling",
      "Routers & Switches",
      "Firewall Solutions",
      "Server Solutions",
      "WiFi & Hotspot Solutions",
      "Smart WiFi",
      "Fibre Optic Networking",
      "VPN & Remote Connectivity",
      "Network Infrastructure",
      "Network Maintenance",
    ],
    cta: "Explore Networking Solutions",
    seoTitle: "IT & Networking Solutions in Jaipur",
    seoDescription:
      "Enterprise networking, LAN/WAN, structured cabling, firewalls, servers, fibre and Wi-Fi solutions from Tirunova Technologies in Jaipur.",
  },
  {
    slug: "cctv-surveillance",
    image: "/images/solutions/cctv.jpg",
    name: "CCTV & Smart Surveillance",
    menuLabel: "CCTV & Smart Surveillance",
    eyebrow: "Surveillance",
    headline: "Protect what matters. Monitor with confidence.",
    description:
      "Complete CCTV design, supply, installation and remote monitoring for homes, businesses and institutions — with professional configuration and ongoing AMC support.",
    items: [
      "HD CCTV Cameras",
      "IP Cameras",
      "WiFi Cameras",
      "PTZ Cameras",
      "NVR & DVR Systems",
      "Remote Monitoring",
      "Smart Surveillance",
      "CCTV Networking",
      "Video Door Phones",
      "Surveillance Accessories",
      "Installation & Configuration",
      "AMC & Maintenance",
    ],
    cta: "Get CCTV Consultation",
    seoTitle: "CCTV & Smart Surveillance in Jaipur",
    seoDescription:
      "HD, IP, Wi-Fi and PTZ CCTV systems with NVR/DVR, remote monitoring, installation and AMC from Tirunova Technologies.",
  },
  {
    slug: "security-access-control",
    image: "/images/solutions/access-control.jpg",
    name: "Security & Access Control",
    menuLabel: "Security & Access Control",
    eyebrow: "Physical Security",
    headline: "Controlled access. Stronger premises security.",
    description:
      "Biometric systems, smart locks, alarms and fire safety products implemented as a coordinated security layer — not a collection of disconnected devices.",
    items: [
      "Biometric Devices",
      "Biometric Locks",
      "Smart Door Locks",
      "Access Control Systems",
      "Theft Alarm Sensors",
      "Fire Alarm Panels",
      "Fire Extinguishers",
      "Security Alarm Systems",
      "Video Door Phones",
    ],
    cta: "Plan Access Control",
    seoTitle: "Security & Access Control Systems",
    seoDescription:
      "Biometric devices, smart locks, access control, theft alarms and fire alarm systems supplied and installed by Tirunova Technologies.",
  },
  {
    slug: "cloud-computing",
    image: "/images/solutions/cloud.jpg",
    name: "Cloud Computing",
    menuLabel: "Cloud Computing",
    eyebrow: "Cloud",
    headline: "Flexible infrastructure. Secure remote access.",
    description:
      "Cloud infrastructure, backup, migration assistance and remote access solutions that help businesses stay available, recoverable and easier to support.",
    items: [
      "Cloud Infrastructure",
      "Cloud Backup",
      "Cloud Support",
      "Cloud Migration Assistance",
      "Remote Access Solutions",
    ],
    cta: "Discuss Cloud Requirements",
    seoTitle: "Cloud Computing Solutions",
    seoDescription:
      "Cloud infrastructure, backup, migration assistance and remote access solutions from Tirunova Technologies.",
  },
  {
    slug: "cybersecurity",
    image: "/images/solutions/cybersecurity.jpg",
    name: "Cybersecurity",
    menuLabel: "Cybersecurity",
    eyebrow: "Cyber Defence",
    headline: "Secure your network, endpoints and business data.",
    description:
      "Practical cybersecurity for growing organisations — firewalls, endpoint protection, assessments and consultation aligned to how your team actually works.",
    items: [
      "Network Security",
      "Firewall Security",
      "Endpoint Protection",
      "Security Assessment",
      "Data Protection",
      "Cybersecurity Consultation",
    ],
    cta: "Secure Your Business",
    seoTitle: "Cybersecurity Services in Jaipur",
    seoDescription:
      "Network security, firewalls, endpoint protection, data protection and cybersecurity consultation from Tirunova Technologies.",
  },
  {
    slug: "website-app-development",
    image: "/images/solutions/web-apps.jpg",
    name: "Website & Application Development",
    menuLabel: "Website & App Development",
    eyebrow: "Digital Presence",
    headline: "Build your digital presence. Grow your business.",
    description:
      "Business websites, e-commerce, custom web applications and Android apps — with UI/UX, hosting assistance and ongoing maintenance.",
    items: [
      "Business Website Development",
      "Corporate Websites",
      "E-Commerce Websites",
      "Custom Web Applications",
      "Android Application Development",
      "Business Management Applications",
      "Website Maintenance",
      "Application Support",
      "UI/UX Development",
      "Domain & Hosting Assistance",
    ],
    cta: "Start Your Project",
    seoTitle: "Website & Application Development",
    seoDescription:
      "Corporate websites, e-commerce, custom web apps and Android application development from Tirunova Technologies.",
  },
  {
    slug: "software-solutions",
    image: "/images/solutions/software.jpg",
    name: "Software Solutions",
    menuLabel: "Software Solutions",
    eyebrow: "Business Software",
    headline: "Software that matches the way you operate.",
    description:
      "Billing, HR, payroll and business management software, including customized solutions when off-the-shelf tools are not enough.",
    items: [
      "Billing Software",
      "HRMS Solutions",
      "Payroll Software",
      "Business Management Software",
      "Customized Software Solutions",
    ],
    cta: "Start Your Project",
    seoTitle: "Business Software Solutions",
    seoDescription:
      "Billing, HRMS, payroll, business management and customized software solutions from Tirunova Technologies.",
  },
  {
    slug: "solar-energy",
    image: "/images/solutions/solar.jpg",
    name: "Solar Energy Solutions",
    menuLabel: "Solar Energy Solutions",
    eyebrow: "Clean Energy",
    headline: "Smart energy. Sustainable future.",
    description:
      "Tirunova Technologies provides solar energy solutions designed to help customers reduce electricity costs and move towards clean, sustainable energy — from consultation through installation, maintenance and system expansion.",
    items: [
      "Residential Solar",
      "Commercial Solar",
      "Industrial Solar",
      "Rooftop Solar",
      "On-Grid Solar",
      "Solar Consultation",
      "Solar Installation",
      "Solar Maintenance",
      "Solar System Expansion",
    ],
    cta: "Request Solar Consultation",
    seoTitle: "Solar Energy Solutions in Jaipur",
    seoDescription:
      "Residential, commercial and industrial rooftop solar consultation, installation and maintenance from Tirunova Technologies.",
  },
  {
    slug: "it-consultancy",
    image: "/images/solutions/consultancy.jpg",
    name: "IT Consultancy",
    menuLabel: "IT Consultancy",
    eyebrow: "Advisory",
    headline: "Plan better. Build smarter. Perform better.",
    description:
      "Our IT consultancy services help businesses identify technology requirements and implement suitable solutions — before spend is committed and after systems are in place.",
    items: [
      "IT Infrastructure Planning",
      "Network Design",
      "Cybersecurity Assessment",
      "CCTV Planning",
      "Server & Storage Planning",
      "Cloud Consultation",
      "Software Consultation",
      "IT Hardware Consultation",
      "Technology Upgrade Planning",
      "AMC Planning",
      "Business IT Audit",
      "Project Consultation",
    ],
    cta: "Book a Consultation",
    seoTitle: "IT Consultancy Services",
    seoDescription:
      "IT infrastructure planning, network design, cybersecurity assessment, CCTV planning and technology audits from Tirunova Technologies.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
