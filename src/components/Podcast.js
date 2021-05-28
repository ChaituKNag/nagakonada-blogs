import React from "react";

const Podcast = ({ episode }) => {
  return (
    <div>
      <iframe
        src={`https://anchor.fm/learn-with-naga/embed/episodes/${episode}`}
        frameborder="0"
        height="161px"
        width="100%"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Podcast;
