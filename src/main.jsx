import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Content from "./components/COntent/Content";
import Author from "./components/Author/Author";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/blogs',
        loader: ()=>fetch("https://dev.to/api/articles?per_page=20&top=7"),
        element: <Blogs></Blogs>,
      },
      {
        path: '/bookmarks',
        element: <BookMarks></BookMarks>
      },
      {
        path: '/blog/:blogId',
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.blogId}`) ,
        element: <BlogDetails></BlogDetails>,
        children:[
          {
            index:true,
            loader: ({params})=>fetch(`https://dev.to/api/articles/${params.blogId}`),
            element: <Content></Content>
          },
          {
            path:'author',
            loader: ({params})=>fetch(`https://dev.to/api/articles/${params.blogId}`),
            element:<Author></Author>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
