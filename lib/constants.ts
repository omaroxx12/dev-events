export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  Date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    Date: "June 13-17, 2025",
    time: "9:00 AM - 6:00 PM CET",
  },
  {
    title: "Google I/O Extended",
    image: "/images/event2.png",
    slug: "google-io-extended",
    location: "San Francisco, CA",
    Date: "May 20-21, 2025",
    time: "10:00 AM - 5:00 PM PST",
  },
  {
    title: "HackMIT 2025",
    image: "/images/event3.png",
    slug: "hackmit-2025",
    location: "Cambridge, MA",
    Date: "September 14-15, 2025",
    time: "12:00 PM - 12:00 PM EST",
  },
  {
    title: "Next.js Conf",
    image: "/images/event4.png",
    slug: "nextjs-conf",
    location: "San Francisco, CA",
    Date: "October 26, 2025",
    time: "9:00 AM - 6:00 PM PST",
  },
  {
    title: "AWS re:Invent",
    image: "/images/event5.png",
    slug: "aws-reinvent",
    location: "Las Vegas, NV",
    Date: "December 1-5, 2025",
    time: "8:00 AM - 8:00 PM PST",
  },
  {
    title: "DevOps Days London",
    image: "/images/event6.png",
    slug: "devops-days-london",
    location: "London, UK",
    Date: "March 20-21, 2025",
    time: "9:30 AM - 5:30 PM GMT",
  },
];

