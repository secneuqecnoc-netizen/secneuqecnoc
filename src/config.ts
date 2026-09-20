import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://secneuqecnoc.runs-on.dev/",
  author: "secneuqecnoc",
  desc: "Data",
  title: "secneuqecnoc",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/secneuqecnoc-netizen/secneuqecnoc",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
];
