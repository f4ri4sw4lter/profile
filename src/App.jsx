import {About, Experience, Education, Projects, Interest} from "./sections/index"
import Nav from "./components/Nav"
import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <>
      <div id="page-top">
        
        <Nav />

        <div className="container-fluid p-0">
          <About />
          <Experience />
          <Projects />
          <Education />
          <Interest />
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="./src/js/scripts.js"></script>
        <script src="./src/js/translate.js"></script>

      </div>
    </>
  )
}

export default App
