import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./VideoCard.css";

function VideoCard({image,title,timestamp,views,channelImage,channel})
{
    return (
        <div className="videocard">
            <img className="videocard_thumbnail" src={image} alt=""/>
            <div className="videocard_text">
                <Avatar className="videocard_avatar" alt={channel} src={channelImage} />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}&middot;{timestamp}</p>


                </div>


            </div>
            
        </div>


    )
}

export default VideoCard;