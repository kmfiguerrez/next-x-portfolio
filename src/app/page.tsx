import Footer from "@/components/footer/footer";
import NavLinks from "@/components/header/nav";
import AboutMeSection from "@/components/sections/about-me/aboutme";
import ContactSection from "@/components/sections/contacts/contacts";
import HomeSection from "@/components/sections/home/home";
import ProjectSection from "@/components/sections/projects/projects";

export default function Home() {
  return (
  <>
    <NavLinks />
    <main className="px-1 sm:container">
      <HomeSection />
      <AboutMeSection />
      <ProjectSection />
      <ContactSection />        
      <Footer />
    </main>
  </>
  );
}
