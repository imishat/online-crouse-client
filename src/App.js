
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from'./layout/Main';
import Login from './Pages/register/Login/Login';
import Register from './Pages/register/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Couress from './Pages/Couress/Couress';
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
        },
        {
          path:'/couress/:id',
          loader:({params})=>fetch(`http://localhost:5000/couress/${params.id}`),
          element:<Couress></Couress>
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
