import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/services/Services'
import WhereToBuy from './components/WhereToBuy/whereToBuy'
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner />
      <Footer/>

    </div>
  )
}

export default App
