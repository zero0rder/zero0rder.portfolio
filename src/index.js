import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './App'
import Landing from './components/landing'
import Archives from './components/archives'
import Blog from './components/pages/blog'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import './index.less'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Landing/>}/>
            <Route path='/archives' element={<Archives/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/> {/*gonna be a nested parent route for contact methods*/}
          </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)