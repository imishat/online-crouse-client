
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from'./layout/Main';
import Login from './Pages/register/Login/Login';
import Register from './Pages/register/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Couress from './Pages/Couress/Couress';
import Cours from './Pages/Cours/Cours';
import { render } from "react-dom";
import All from './Pages/AllCours/All';
import PrivatRouts from './Routs/Privet/PrivatRouts';
import LeftSide from './Pages/LeftSide/LeftSide';
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
          path:'/',
          loader:()=>fetch('https://server-imishat.vercel.app/allCours'),
          element:<All></All>
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
          loader:({params})=>fetch(`https://server-imishat.vercel.app/couress/${params.id}`),
          element:<Couress></Couress>
        },
        {
          path:'/cours/:id',
          loader:({params})=>fetch(`https://server-imishat.vercel.app/cours/${params.id}`),
          element:<PrivatRouts><Cours></Cours></PrivatRouts>
        },
        {
          path:'/fqa',
          element:<LeftSide></LeftSide>

        }
      ]
    }

  ])
  return (
    <div>
      
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
