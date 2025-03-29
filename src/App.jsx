import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

import "./App.css"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:page", element: <Home /> },
  { path: "/tag/:tag", element: <Home /> },
  { path: "/user/:userid", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/post/:id", element: <Post /> },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return    <div className="app-container">
  <RouterProvider router={router} />
</div>
}
