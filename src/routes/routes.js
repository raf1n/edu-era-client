import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://edu-era-server-side.vercel.app/courses-categories"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://edu-era-server-side.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://edu-era-server-side.vercel.app/course/${params.id}`),
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
