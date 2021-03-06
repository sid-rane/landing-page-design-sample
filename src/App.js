import React from 'react'
import AOS from 'aos';
import Header from "../src/components/header/Header"
import HeroBanner from "../src/components/home/HeroBanner"
import ClientsLogo from "../src/components/home/ClientsLogo"
import SupperApp from "../src/components/home/SupperApp"
import AllFeature from "../src/components/home/AllFeature"
import Footer from "../src/components/footer/Footer"

AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});
AOS.init({ disable: 'mobile' });

function App() {
  return (
    <div className="wrapper amazing_mobile">
      <Header headerId='header' />
      <main>
        <HeroBanner heroId='section1' />
        <ClientsLogo clientsLogoId="section2" />
        <SupperApp superId="section3" />
        <AllFeature allFeatureId="section4" />
      </main>
      <Footer foterId="footer" />
    </div>
  )
}

export default App
