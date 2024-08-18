import {
  CaseStudies,
  Hero,
  Services,
  WorkingProcess,
  Team,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
    </div>
  );
}
