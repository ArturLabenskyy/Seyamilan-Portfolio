import { createBrowserRouter } from "react-router-dom";

import HomePage from "./home.page";
import ServicePage from "./service.page";
import ContactPage from "./contact.page";
import DesignPage from "./design.page";
import ShootingPage from "./shooting.page";
import GalleryPage from "./gallery.page";
import GuidePage from "./guide.page";

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
    {
        path: "/services/shooting",
        element: <ShootingPage />,
    },
    {
        path: "/gallery",
        element: <GalleryPage />,
    },
    {
        path: "/guide",
        element: <GuidePage />,
    },
]);

export default router;
