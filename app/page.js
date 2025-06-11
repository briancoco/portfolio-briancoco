import Header from "@/components/Header";
import Intro from "@/components/Intro";
import PortfolioSection from "@/components/PortfolioSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Intro />
      <PortfolioSection />
    </div>
  );
}
