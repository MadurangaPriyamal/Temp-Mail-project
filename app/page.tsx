
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Inbox from "../components/Inbox";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Inbox />
        <Features />
        <HowItWorks />
      </main>
    </>
  );
}
