
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";

import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from "react-router";

const router=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {path:"about",
        element:<About />

      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"user/:id",
        element:<User />
      }
      
    ]
  }
])
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<App />}/>
//         <Route path="" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="user/:id" element={<User />} />
//       </Route>
//   )
// );
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
  
)
