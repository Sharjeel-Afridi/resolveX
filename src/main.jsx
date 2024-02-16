import ReactDOM  from "react-dom/client";
import Main from "../components/Main";
import Pyqs from "../components/Pyqs";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "../src/styles.css";
import Auth from "../components/Auth";
import Signup from "../components/SignUp";
import { DarkModeProvider } from "../utils/DarkModeContext";
import Dashboard from "../components/Dashboard";
import { UserProvider } from "../utils/UserContext";

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Main />
    },
    {
        path: "/pyqs",
        element: <Pyqs />
    },
    {
        path: "/login",
        element: <Auth />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <DarkModeProvider>
            <RouterProvider router={appRouter}/>
        </DarkModeProvider>
    </UserProvider>
    );