
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from'./layout/Main';
import Login from './Pages/register/Login/Login';
import Register from './Pages/register/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>

        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }
      ]
    }

  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
