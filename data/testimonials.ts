// data/testimonials.ts

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Turk Analytica's custom software solution revolutionized our workflow. The transition was seamless, and the efficiency gains were immediate. Their team is top-notch.",
    name: "Aisha Hassan",
    title: "Chief Operating Officer",
    company: "Future Retail Co.",
  },
  {
    quote: "The stability and speed of their Bulk SMS gateway were critical during our peak campaign season. Reliability is what we needed, and Turk Analytica delivered it perfectly.",
    name: "Dr. Ken Ochieng",
    title: "Marketing Director",
    company: "Global Communications Inc.",
  },
  {
    quote: "We utilized their USSD application expertise to roll out a nationwide mobile service. The execution was flawless and demonstrates their deep understanding of mobile technology.",
    name: "Omar Kundi",
    title: "Product Lead",
    company: "Pamoja Telecom",
  },
];