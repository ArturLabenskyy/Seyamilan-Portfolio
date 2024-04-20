import React from "react";
import { RouterProvider } from "react-router-dom";

import { ContextProvider } from "./context/globalContext";

import router from "./pages/router";

function App() {
    return (
        <ContextProvider>
            <div className="full-page">
                <RouterProvider router={router} />
            </div>
        </ContextProvider>
    );
}

export default App;
