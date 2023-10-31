import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Event from './components/Event'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Book from './components/Book'
import Blog from './components/Blog'
import Team from './components/Team'
import Testmonial from './components/Testmonial'



const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='service' element={<Service/>}/>
      <Route path='event' element={<Event/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='book' element={<Book/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='testimonial' element={<Testmonial/>}/>
      <Route path='contact' element={<Contact/>}/>
 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
