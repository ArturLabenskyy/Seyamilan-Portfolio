import React from "react";

import Navbar from "./components/Navbar/Navbar.component";
import SideMenu from "./components/SideMenu/SideMenu.component";

function App() {
    return (
        <div className="full-page">
            <Navbar />
            <SideMenu />
        </div>
    );
}

export default App;
