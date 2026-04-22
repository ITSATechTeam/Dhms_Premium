import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import WhatIs from './components/WhatIs/WhatIs'
import Problem from './components/Problem/Problem'
import Ecosystem from './components/Ecosystem/Ecosystem'
import Features from './components/Features/Features'
import Trust from './components/Trust/Trust'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <Problem />
        <Ecosystem />
        <Features />
        <Trust />
        <HowItWorks />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

export default App
