import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "auth/signin",
        element: <div>signin</div>,
    },
    {
        path: "auth/signup",
        element: <div>signup</div>,
    },
]);

export default routes;