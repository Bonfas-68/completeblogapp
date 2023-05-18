import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogContent from './pages/BlogContent'
import BlogContent1 from './pages/BlogContent1'
import BlogContent2 from './pages/BlogContent2'


import Jokes from './pages/Jokes'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/blogs' element={<Blogs/>}/>
        <Route  path='/about' element={<About/>}/>
        {/* <Route  path='/jokes' element={<Jokes/>}/> */}
        <Route  path='/blogContent' element={<BlogContent/>}/>
        <Route  path='/blogContent1' element={<BlogContent1/>}/>
        <Route  path='/blogContent2' element={<BlogContent2 />}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
