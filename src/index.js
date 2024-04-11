import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Axios } from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import Blog from './Components/Blog';
import Search from './Components/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));

//const [slugs, setSlugs] = useState([]);
// useEffect(() => {
//   const fetchData = async () => {
//       try {
//           const response = await axios.get('http://localhost:3000/blogs');

//           const data = response.data.data;
//           const extractedData = data.map( item => ({
//               slug: item.Slug
//           }));

//           setSlugs(extractedData);
//       }
//       catch (error) {
//           console.error('Error fetching data:', error);
//       }
//   }
//   fetchData();
// }, []);



const router = createBrowserRouter([
  {
    
    element: <App/>, 
    children : [
      {path: "/",
                element: <HomePage/>},
                {
                  element: <Search/>, 
                  path: "/search"},
      {
        element: <Blog/>,
        path: "/blogs/:slug",
        
      loader:  async () => {
        try {
            const response = await Axios.get('http://localhost:3000/blogs');
  
            const data = response.data.data;
            const extractedData = data.map( item => ({
                slug: item.Slug
            }));
  
            return (extractedData);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        return {}
    },
          }],
  },
]);




root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
