import { createBrowserRouter } from "react-router-dom";

import HomePage from "./home.page";
import ServicePage from "./service.page";
import ContactPage from "./contact.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/services",
        element: <ServicePage />,
    },
    {
        path: "/contacts",
        element: <ContactPage />,
    },
]);

export default router;
