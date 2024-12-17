import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetail from "../pages/Home/JobDetail/JobDetail";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ApplyJob from "../pages/Home/ApplyJob/ApplyJob";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/apply/:id",
        element: <ApplyJob />,
      },
      {
        path: "/view/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applications/jobs/${params.job_id}`),
      },
    ],
  },
]);

export default router;