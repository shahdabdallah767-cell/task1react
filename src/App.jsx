
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Notfound from './Pages/Notfound/Notfound';
import Layout from './Pages/Layout';
import BlogDeatails from './Pages/BlogDeatils/BlogDeatails';







export default function App() {
  const myrouter = createBrowserRouter([

    {path: "", element: <Layout/>, children:[


      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },

      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogDeatails /> },
      { path: "*", element: <Notfound /> },

    ]},

      


  
     

  ])




  return (
    <div>
      <>

        <RouterProvider router={myrouter} />

      </>
    </div>
  )
}
