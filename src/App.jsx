import React from 'react'
import Contact from './Components/contacts/Contact'
import Location from './Components/location/Location'
import Contact2 from './Components/contact2/Contact2'
import About from './Components/About/About'
import Pages from './Components/Pages'

const App = () => {
  return (
    <div>
      <Contact/>
      <Location/>
      <Contact2/>
      <About/>
      <Pages />
    </div>
  )
}

export default App