import React from "react";

const Podcast = ({ episode }) => {
  return (
    <div className="podcast-container">
      <iframe
        src={`https://anchor.fm/learn-with-naga/embed/episodes/${episode}`}
        frameBorder="0"
        height="161px"
        width="100%"
        scrolling="no"
        loading="eager"
      ></iframe>
    </div>
  );
};

export default Podcast;
