import React from "react";
import Scroll from "./Components/Scroll";
import NavbarMain from "./Components/Navbar"
import Backdrop from "./Components/Backdrop";
import Subnav from "./Components/Subnav";
import Login from "./Components/Login"

function App(){
    return (
        <>
            {/* <Login/> */}
            <NavbarMain/>
            <Backdrop/>
            <div className="main">
                <Subnav/>
                <Scroll/>
            </div>

        </>
    )
}

export default App;