import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Prizes from "@/components/prizes"
import Team from "@/components/team"
import Sponsors from "@/components/sponsors"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Registration from "@/components/registration"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Team />
      <Sponsors />
      <FAQ />
      <Contact />
      <Registration />
      <Footer />
    </main>
  )
}
