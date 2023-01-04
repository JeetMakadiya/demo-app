import { createBrowserRouter } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword";
import CreatePost from "./Pages/CreatePost";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import PostList from "./Pages/PostList";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Verification from "./Pages/Verification";
import RootLayout from "./Layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/verification",
        element: <Verification />,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "/createpost",
        element: <CreatePost />,
      },
      {
        path: "/postlist",
        element: <PostList />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/changepassword",
        element: <ChangePassword />,
      },
    ],
  },
]);
