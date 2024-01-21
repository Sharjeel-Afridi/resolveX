import ReactDOM  from "react-dom/client";
import Main from "../components/Main";
import Pyqs from "../components/Pyqs";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "../src/styles.css";

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Main />
    },
    {
        path: "/pyqs",
        element: <Pyqs />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);