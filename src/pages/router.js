import { createBrowserRouter } from "react-router-dom";

import HomePage from "./home.page";
import ServicePage from "./service.page";
import ContactPage from "./contact.page";
import DesignPage from "./design.page";

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
    {
        path: "/services/design",
        element: <DesignPage />,
    },
]);

export default router;
