import React from "react";
import "./Sidebarrow.css";

function Sidebarrow({selected,Icon,title})
{
    return(
        <div className={`sidebarRow ${selected&&"selected"}`} >
            <Icon className="sidebarrow_icon"/>
            <div className="sidebarrow_title">{title}</div>

        </div>
    )
}
export default Sidebarrow;