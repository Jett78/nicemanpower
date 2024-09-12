// import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import FeatureJobs from "./FeatureJobs";
import HowItWorks from "./HowItWorks";
import HomeServices from "./HomeServices";
import Testimonials from "./Testimonials";
import HomeHero from "./HomeHero";
import CTA from "./cta";
import JobsFeature from "./JobsFeature";
type Props = {};

export default function HomeMain({}: Props) {
  return (
    <>
      {/* <Hero /> */}
      <HomeHero />
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <HomeAbout />
        <JobsFeature/>
        <FeatureJobs />
        <HowItWorks />
        <HomeServices />
      </div>
      <div className="w-full mx-auto">
        <CTA />
      </div>
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <Testimonials />
      </div>
    </>
  );
}
