import { createBrowserRouter } from "react-router-dom";

import HomePage from "./home.page";
import ServicePage from "./service.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/services",
        element: <ServicePage />,
    },
]);

export default router;
