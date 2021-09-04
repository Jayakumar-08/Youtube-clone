import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos()
{
    return (
        <div className="recommended">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                <VideoCard title="Let's buid a full stack amazon clone" views="2.3M Views" timestamp="3 days ago" 
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
                channelImage="https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem" channel="Clever programmer"/>
                  <VideoCard title="Elon Musk Replied Me" views="100K Views" timestamp="1 week ago" 
                image="https://i.ytimg.com/vi/5bJqqXkLT9A/maxresdefault.jpg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRvBDE7oFIPE5ppfvKEulIVZtoC6eFD57aNGJUySfc=s900-c-k-c0x00ffffff-no-rj" channel="Madan Gowri"/>
                 <VideoCard title="National Award Winner Vetrimaaran" views="2M Views" timestamp="5 days ago" 
                image="https://i.ytimg.com/vi/pnwqj5UzgPE/maxresdefault.jpg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQY0eV-bqjGB6Y3zWsST24RJEx5oQNFCz6vLoriZQ=s900-c-k-c0x00ffffff-no-rj" channel="Ashwin"/>
                 <VideoCard title="Learn Python -Full course for Beginners" views="227k Views" timestamp="1 month ago" 
                image="https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s176-c-k-c0x00ffffff-no-rj-mo" channel="freeCodeCamp.org"/>
                 <VideoCard title="Get a Job into FAANG Companies" views="30K Views" timestamp="2 days ago" 
                image="https://i.ytimg.com/vi/Q4xVty26je0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDR3GimGQ1z2yBvvLeJqR2c0BhH7Q"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTo2kOFBwhH7k8R2IHTm_pvKz_uEx9yxNZGzStp=s176-c-k-c0x00ffffff-no-rj-mo" channel="Yudi J"/>
                 <VideoCard title="Rohit Sharma Hits 140!" views="2.3M Views" timestamp="3 days ago" 
                image="https://i.ytimg.com/vi/AFEZzf9_EHk/maxresdefault.jpg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQW1DW8YJh1nhWtC3uVnvqZ4lzjiMXUoxbp_U4mfjs=s176-c-k-c0x00ffffff-no-rj-mo" channel="ICC"/>
                 <VideoCard title="Jagamae Thandhiram -Bujji Video" views="100M Views" timestamp="5 days ago" 
                image="https://i.ytimg.com/vi/7Y6GrgSJnNQ/maxresdefault.jpg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRSu0SoelpGmqyAj7H-l9AvN_a4GiV145VwyF4yqA=s900-c-k-c0x00ffffff-no-rj" channel="Sony Music South"/>
                 <VideoCard title="Rachit Jain-Youtube" views="1M Views" timestamp="1 year ago" 
                image="https://i.ytimg.com/vi/Q_2TwBhqHPg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBd1vYzt70sVN2uVdZ9-PFra4QXYQ"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh5pRu7pvFXdh9R8iWmZqrQC6vh6iIwv476YZTmIw=s900-c-k-c0x00ffffff-no-rj" channel="Rachit Jain"/>

            </div>

        </div>
    )
}

export default RecommendedVideos;