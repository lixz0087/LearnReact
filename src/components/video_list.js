import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // Using etag as the key is very good 
        return <VideoListItem
            // Here we just pass this function down to the video list item
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;