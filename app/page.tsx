import { CaseStudies, Hero, Services } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CaseStudies />
    </div>
  );
}
