import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <section className='p-6 flex gap-10 items-center justify-center flex-wrap'>
        <Cards img="https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhY3Rqc3xlbnwwfHwwfHx8MA%3D%3D" title="React JS Course" desc="Black Magic of JS"/>
        <Cards img="https://images.unsplash.com/photo-1756830242843-7642e98ab5a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="MERN Course" desc="Black Magic of MERN Stack"/>
      </section>
    </div>
    
  )
}

export default App
