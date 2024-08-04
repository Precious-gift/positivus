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
