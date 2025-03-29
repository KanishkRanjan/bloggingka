import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'    

import './index.css'

import Home from "./pages/Home" 
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Post from './pages/Post'

const router = createBrowserRouter([
  {path:"/" , element: <Home/>},
  {path:"/:page" , element: <Home/>},

  {path:"/tag/:tag" , element: <Home/>},
  {path:"/user/:userid" , element: <Home/>},
  {path:"/contact" , element: <Contact/>},
  {path:"/about" , element: <About/>},
  {path:"/post/:id" , element: <Post/>},
  {path:"*" , element: <NotFound/>}
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
