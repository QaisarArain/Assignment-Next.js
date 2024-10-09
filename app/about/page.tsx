import React from "react";
import cssStyle from "./about.module.css"

console.log(cssStyle,"CSS-Style")

const AboutPage = () => {
    return(
        <div>
            <h2 className={cssStyle.black}>This is our about page</h2>
        </div>
    )
}

export default AboutPage