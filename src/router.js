import { createBrowserRouter } from "react-router-dom";
import ChangePassword from "./Components/ChangePassword";
import CreatePost from "./Components/CreatePost";
import ForgotPassword from "./Components/ForgotPassword";
import Login from "./Components/Login";
import PostList from "./Components/PostList";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import ResetPassword from "./Components/ResetPassword";
import Verification from "./Components/Verification";
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
