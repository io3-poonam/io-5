import React from "react";
import "./style.css";
import sun from "./asserts/icons/sun.png";
import moon from "./asserts/icons/moon.png"
function Header(){
    return(
<>
<div className="main_header">
        <div className="Start_section">
<p>BlueSky</p></div>
<div className="Center_section">
<p className="Pro_center">Product</p>
<p className="Ser_center">Pricing</p>
</div>
<div className="Last_section">
<img className="img_sec" src={sun}/><p className="light_mode">Light Mode</p><img className="img_sec" src={moon}/></div>

</div>
</>)
}
export default Header;