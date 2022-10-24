
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Pages/Sharde/Header/Header';
import Main from'./layout/Main'
import Login from './Pages/register/Login/Login';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
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
