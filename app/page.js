import Header from "./_components/LandingPage.jsx/Header"
import Banner from "./_components/LandingPage.jsx/Banner"
import Fetures from "./_components/LandingPage.jsx/Fetures"
import Testimonials from "./_components/LandingPage.jsx/Testimonials"
import CallToAction from "./_components/LandingPage.jsx/CallToAction"
import Footer from "./_components/LandingPage.jsx/Footer"

export default function page() {
  return (
    <div className="flex flex-col min-h-[100dvh] dark:bg-[#0f172a] dark:text-white">
      <Header />
      <main className="flex-1">
        <Banner />
        <Fetures />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

