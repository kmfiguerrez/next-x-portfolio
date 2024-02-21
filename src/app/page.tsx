import NavLinks from "@/components/header/nav";
import HomeSection from "@/components/sections/home/home";
import Image from "next/image";

export default function Home() {
  return (
  <>
    <NavLinks />
    <main className="container">
      <HomeSection />
    </main>
  </>
  );
}
