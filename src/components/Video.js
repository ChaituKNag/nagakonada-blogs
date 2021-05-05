import React from "react";
import Video from "react-player";

const VideoPlayer = (props) => {
  return (
    <div className="video-wrapper">
      <Video className="react-player" width="100%" height="100%" {...props} />
    </div>
  );
};

export default VideoPlayer;
