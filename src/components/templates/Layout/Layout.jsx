import React from "react";
import Header from "../Header/Header";
import RoutesConfig from "../../../RoutesConfig";


const Layout = function() {
    return(
        <>
        <div className = "container">
        <div>
            <Header></Header>
        </div>
        <div><RoutesConfig></RoutesConfig></div>
        </div>
        </>
    )
}
export default Layout;