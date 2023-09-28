import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import PhoneDetails from "../components/Phones/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', loader: () => fetch('/phones.json'), element: <Home /> },
            { path: `/phones/:phoneId`, loader: () => fetch('/phones.json'), element: <PhoneDetails /> },
            { path: '/favorites', loader: () => fetch('/phones.json'), element: <Favorites /> },
            { path: '/login', element: <Login /> },
        ]
    },
]);

export default MyCreatedRouter