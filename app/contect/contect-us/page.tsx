import React from "react";
import cssStyle from "./contect-us.module.css"

console.log(cssStyle,"CSS-Style")

const Page = () =>{
    return(
        <div>
            <h2 className={cssStyle.black}>this is our contect us page</h2>
        </div>
    )
}

export default Page