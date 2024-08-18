// Interfaces
interface ServicesInfoProps {
  title: string;
  description: string;
}

interface ServicesListProps {
  title: string;
  cardClass: string;
  arrowIconUrl: string;
  cardImageUrl: string;
}

export interface ProcessListProps {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

export interface TeamListProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const sectionList: ServicesInfoProps[] = [
  {
    title: "Services",
    description:
      "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  },
  {
    title: "Case Studies",
    description:
      "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  },
  {
    title: "Our Working Process",
    description: "Step-by-Step Guide to Achieving Your Business Goals",
  },
  {
    title: "Team",
    description:
      "Meet the skilled and experienced team behind our successful digital marketing strategies",
  },
];

export const servicesList: ServicesListProps[] = [
  {
    title: "Search engine optimization",
    cardClass: "service-card-gray-theme",
    arrowIconUrl: "/positivus_arrow_icon.svg",
    cardImageUrl: "/positivus_seo_img.svg",
  },
  {
    title: "Pay-per-click advertising",
    cardClass: "service-card-green-theme",
    arrowIconUrl: "/positivus_arrow_icon.svg",
    cardImageUrl: "/positivus_ppca_img.svg",
  },
  {
    title: "Social media marketing",
    cardClass: "service-card-black-theme",
    arrowIconUrl: "/positivus_arrow_black_icon.svg",
    cardImageUrl: "/positivus_smm_img.svg",
  },
  {
    title: "Email marketing",
    cardClass: "service-card-gray-theme",
    arrowIconUrl: "/positivus_arrow_icon.svg",
    cardImageUrl: "/positivus_em_img.svg",
  },
  {
    title: "Content creation",
    cardClass: "service-card-green-theme",
    arrowIconUrl: "/positivus_arrow_icon.svg",
    cardImageUrl: "/positivus_cc_img.svg",
  },
  {
    title: "Analytics and tracking",
    cardClass: "service-card-black-theme",
    arrowIconUrl: "/positivus_arrow_black_icon.svg",
    cardImageUrl: "/positivus_at_img.svg",
  },
];

export const caseStudiesList: String[] = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export const processList: ProcessListProps[] = [
  {
    id: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    active: true,
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    active: false,
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    active: false,
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    active: false,
  },
  {
    id: "05",
    title: "Reporting and Communication",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    active: false,
  },
  {
    id: "06",
    title: "Continual Improvement",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    active: false,
  },
];

export const teamList: TeamListProps[] = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    imageUrl: "/positivus_team_john_img.png",
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    imageUrl: "/positivus_team_jane_img.png",
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    imageUrl: "/positivus_team_michael_img.png",
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    imageUrl: "/positivus_team_emily_img.png",
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    imageUrl: "/positivus_team_brian_img.png",
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    imageUrl: "/positivus_team_sarah_img.png",
  },
];
