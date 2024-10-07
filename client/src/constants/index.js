import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
 
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
 
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },

  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },

  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

// export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [

];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];


export const collabText1 =
  "On-premises data storage guarantees your data remains secure and under your control, aligning with privacy and compliance needs.";
  export const collabText2 =
  "Leverage AI to categorize, search making information retrieval smarter and faster.";

export const collabContent = [
  {
    id: "0",
    title: "Top-notch Security",
    text: collabText1,
  },
  {
    id: "2",
    title: "Seamless Integration",
    text: collabText2,
  },
];

export const collabApps = [

  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },

  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
 
];

export const benefits = [
  {
    id: "0",
    title: "On-Premises Data Security",
    text: "Control your data. Yugm's on-premises solution ensures complete data security and compliance with data sovereignty requirements.",
    backgroundUrl: "./client/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "AI-Powered Knowledge Hub",
    text: "Automate information categorization and leverage AI for contextual search and insights generation from internal data, streamlining knowledge access across the organization.",
    backgroundUrl: "./client/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Comprehensive Internal Knowledge Management",
    text: "Focus on internal knowledge sharing to support business operations and allow employees to retrieve crucial information quickly and efficiently.",
    backgroundUrl: "./client/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Tailored for Mid-Sized Companies",
    text: "Designed to provide sophisticated solutions for growing organizations, Yugm scales with your business and meets your unique needs.",
    backgroundUrl: "./client/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },


];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
