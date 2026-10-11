export const site = {
  name: "Tirunova Technologies",
  shortName: "Tirunova",
  tagline: "Innovate • Integrate • Elevate",
  taglinePlain: "Innovate | Integrate | Elevate",
  descriptor:
    "Innovating World-Class Technology. Securing Businesses. Empowering Growth.",
  positioning:
    "Your single technology partner for IT, security, software and solar solutions.",
  founded: "7 June 2024",
  founder: {
    name: "Deependra Gadwal",
    title: "Founder & Director",
  },
  url: "https://tirunovatechnologies.co.in",
  email: "tirunovainfo@gmail.com",
  phones: [
    { display: "+91 77409 96909", href: "tel:+917740996909", raw: "7740996909" },
    { display: "+91 86197 71383", href: "tel:+918619771383", raw: "8619771383" },
  ],
  whatsapp: "917740996909",
  address: {
    line1: "G-27, Govindam Tower, Kalwar Road",
    line2: "Kardhani, Jaipur – 302012",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    full: "G-27, Govindam Tower, Kalwar Road, Kardhani, Jaipur – 302012, Rajasthan, India",
  },
  mapEmbed:
    "https://maps.google.com/maps?q=Govindam%20Tower%20Kalwar%20Road%20Kardhani%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions", childrenKey: "solutions" as const },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const values = [
  "Innovation",
  "Quality",
  "Integrity",
  "Customer Satisfaction",
  "Professional Service",
  "Security",
  "Long-Term Relationships",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand your requirements.",
    image: "/images/process/consultation.jpg",
  },
  {
    number: "02",
    title: "Site Survey",
    description: "Analyse the existing infrastructure and requirements.",
    image: "/images/process/site-survey.jpg",
  },
  {
    number: "03",
    title: "Solution Design",
    description: "Prepare the appropriate technical solution.",
    image: "/images/process/design.jpg",
  },
  {
    number: "04",
    title: "Quotation",
    description: "Provide a transparent commercial proposal.",
    image: "/images/process/quotation.jpg",
  },
  {
    number: "05",
    title: "Installation",
    description: "Professional implementation by our technical team.",
    image: "/images/services/installation.jpg",
  },
  {
    number: "06",
    title: "Configuration",
    description: "Configure and test the complete system.",
    image: "/images/services/configuration.jpg",
  },
  {
    number: "07",
    title: "Handover",
    description: "System demonstration and customer handover.",
    image: "/images/process/handover.jpg",
  },
  {
    number: "08",
    title: "Support",
    description: "Continued technical assistance and AMC.",
    image: "/images/services/support.jpg",
  },
] as const;

export const whyChoose = [
  {
    title: "One Technology Partner",
    description: "IT + Networking + Security + Software + Cloud + Solar.",
    image: "/images/why/partner.jpg",
  },
  {
    title: "Professional Team",
    description:
      "Experienced technical support for installation, configuration and maintenance.",
    image: "/images/why/team.jpg",
  },
  {
    title: "Quality Products",
    description:
      "Solutions selected according to customer requirements, performance and budget.",
    image: "/images/why/products.jpg",
  },
  {
    title: "Customized Solutions",
    description: "We don't believe in one-size-fits-all technology.",
    image: "/images/why/custom.jpg",
  },
  {
    title: "End-to-End Support",
    description:
      "From consultation and installation to maintenance and technical support.",
    image: "/images/why/support.jpg",
  },
  {
    title: "Business-Focused Approach",
    description:
      "Solutions designed around reliability, security, scalability and business continuity.",
    image: "/images/why/business.jpg",
  },
] as const;

export const benefits = [
  {
    title: "Reliable Technology",
    description: "Solutions designed for dependable performance.",
  },
  {
    title: "Secure Infrastructure",
    description: "Security-focused technology implementation.",
  },
  {
    title: "Scalable Solutions",
    description: "Infrastructure that can grow with your business.",
  },
  {
    title: "Professional Installation",
    description: "Proper installation and configuration.",
  },
  {
    title: "After-Sales Support",
    description: "Technical assistance even after project completion.",
  },
] as const;

export const industries = [
  {
    name: "Homes & Residences",
    description: "Smart, secure and connected living.",
    image: "/images/industries/homes.jpg",
  },
  {
    name: "Corporate Offices",
    description: "Reliable networks, security and workplace IT.",
    image: "/images/industries/offices.jpg",
  },
  {
    name: "Hotels & Resorts",
    description: "Guest Wi-Fi, surveillance and operations technology.",
    image: "/images/industries/hotels.jpg",
  },
  {
    name: "Hospitals & Healthcare",
    description: "Secure connectivity and monitored facilities.",
    image: "/images/industries/hospitals.jpg",
  },
  {
    name: "Schools & Institutions",
    description: "Campus networking, CCTV and digital systems.",
    image: "/images/industries/schools.jpg",
  },
  {
    name: "Industries & Manufacturing",
    description: "Plant connectivity, security and solar.",
    image: "/images/industries/manufacturing.jpg",
  },
  {
    name: "Retail & Showrooms",
    description: "Surveillance, billing and store networking.",
    image: "/images/industries/retail.jpg",
  },
  {
    name: "Residential Projects",
    description: "Society-level security, intercom and Wi-Fi.",
    image: "/images/industries/residential.jpg",
  },
  {
    name: "Construction Projects",
    description: "Temporary and permanent site technology.",
    image: "/images/industries/construction.jpg",
  },
  {
    name: "Commercial Buildings",
    description: "Integrated infrastructure for multi-tenant sites.",
    image: "/images/industries/commercial.jpg",
  },
] as const;

export const oemPartners = [
  "Cisco",
  "Dell Technologies",
  "Microsoft",
  "Fortinet",
  "Aruba",
  "Hikvision",
  "Dahua",
  "UNV",
  "CP Plus",
  "D-Link",
  "TP-Link",
  "APC",
  "Tenda",
  "Lenovo",
] as const;

export const solarBrands = ["TATA Solar", "Adani Solar", "Waaree", "INA"] as const;

export const approach = [
  "Consultation",
  "Design",
  "Supply",
  "Installation",
  "Configuration",
  "Support",
  "AMC",
] as const;

export const projectCategories = [
  { name: "CCTV Projects", image: "/images/solutions/cctv.jpg" },
  { name: "Networking Projects", image: "/images/solutions/networking.jpg" },
  { name: "WiFi Projects", image: "/images/solutions/wifi.jpg" },
  { name: "Server Projects", image: "/images/services/configuration.jpg" },
  { name: "Cybersecurity Projects", image: "/images/solutions/cybersecurity.jpg" },
  { name: "Solar Projects", image: "/images/solutions/solar.jpg" },
  { name: "Access Control", image: "/images/solutions/access-control.jpg" },
  { name: "EPABX Projects", image: "/images/products/communication.jpg" },
  { name: "Software Projects", image: "/images/solutions/software.jpg" },
  { name: "Website & Application Projects", image: "/images/solutions/web-apps.jpg" },
] as const;
