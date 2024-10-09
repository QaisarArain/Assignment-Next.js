import React from "react";
import cssStyle from "./service.module.css"

console.log(cssStyle,"CSS-Style")

const ServicePage = () =>{
    return(
        <div>
            <h2 className={cssStyle.black}>this is our service page</h2>
        </div>
    )
}

export default ServicePage