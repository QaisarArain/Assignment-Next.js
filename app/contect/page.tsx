import React from "react";
import cssStyle from "./contect.module.css"

console.log(cssStyle,"CSS-Style")

const ContectPage = () =>{
    return(
        <div>
            <h2 className={cssStyle.black}>this is our contect page</h2>
        </div>
    )
}

export default ContectPage