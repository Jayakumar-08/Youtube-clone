import React from "react";
import "./Header.css";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header()
{
    return (
        <div className="header">
            <div className="header_left">
                <MenuSharpIcon />
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
            alt="" />
            </div>
            <div className="header_input">
            <input type="text" placeholder="Search"/>
            <SearchIcon  className="header_search"/>
            </div>
            <div className="header_icons">
            <VideoCallIcon className="hicons"/>
            <AppsIcon className="hicons"/>
            <NotificationsIcon className="hicons"/>
            <AccountCircleIcon className="hicons" src="https://lh3.google.com/u/0/ogw/ADea4I5SWEL8SdF-hd9eEOthaeWwWIKk9aACXNMcuQ4-=s192-c-mo"
            alt="" />
            </div>
            

        </div>
    )
}

export default Header;