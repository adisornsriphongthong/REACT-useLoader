import React from "react";
import { createBrowserRouter, RouterProvider, useLoaderData} from "react-router-dom";

import Error from "./Error";

import Content from './Content'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
       {
        index: true,
        element: <Content/>,
        errorElement: <Error/>,
        loader: 
        async () => {
          const res = fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((data) => data.json());
          
    
          return res; 
        }
       },
       {
        path: 'good',
        element: <h1>hello Good</h1>
      }
    ]
    
  },
  {
    path: '/hello',
    element: <h1>hello girl</h1>,
    errorElement: <Error/>,
    loader: async () => {
      const res = fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data) => data.json());

      return res;
    }
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;