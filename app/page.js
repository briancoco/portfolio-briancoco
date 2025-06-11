import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Interest from "@/components/Interest";
import Intro from "@/components/Intro";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Intro />
      <section className="flex flex-col gap-10">
        <PortfolioSection title="About">
          <p className="text-gray-400 text-md">
            Lifetime Learner, Software Engineer
            <br/>
            Love skateboarding & climbing
            <br/>
            Graduated Summa Cum Laude @ Texas A&M University 
          </p>
        </PortfolioSection>

        <PortfolioSection title="Interests">
          <section className="flex items-start gap-5">
            <Interest  interest="Distributed Systems"/>
            <Interest  interest="Operating Systems"/>
            <Interest  interest="Networking"/>
          </section>
        </PortfolioSection>

        <PortfolioSection title="Experience">
          <section className="flex flex-col gap-5">
            <Experience image='/meta-exp.png' title='Software Engineer' company='Meta' dates='June 2025 - Present'>
              <div className="text-sm pt-2">Video Infrastructure & Product Reliability</div>
            </Experience>

            <Experience image='/tamu-exp.jpg' title='Undergraduate Researcher' company='Global Cybersecurity Research Institute' dates='January 2025 - May 2025'>
              <div className="text-sm pt-2">Secure Real Estate Transactions using Blockchain</div>
            </Experience>

            <Experience image='/paycom-exp.png' title='Software Engineer Intern' company='Paycom' dates='May 2023 - August 2024'>
              <div className="text-sm pt-2">
                Productivity Analysis<br />
                CRM Data Visualization
              </div>
            </Experience>

            <Experience image='/frogslayer-exp.jpg' title='Junior Software Developer' company='Frogslayer' dates='January 2024 - April 2024'>
              <div className="text-sm pt-2">Venture Capital Automation</div>
            </Experience>
          </section>
        </PortfolioSection>
      </section>
    </div>
  );
}
