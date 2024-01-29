import ReactDOM  from "react-dom/client";
import Main from "../components/Main";
import Pyqs from "../components/Pyqs";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "../src/styles.css";
import Auth from "../components/Auth";
import Signup from "../components/SignUp";
import { DarkModeProvider } from "../utils/DarkModeContext";

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
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DarkModeProvider>
        <RouterProvider router={appRouter}/>
    </DarkModeProvider>);