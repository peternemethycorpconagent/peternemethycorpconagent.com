import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
  return (
    <div className="responsive-player">
      <div className="video-frame">
          <ReactPlayer
            light={true}
            className="react-player"
            url={props.url}
            width="100%"
            height="calc(100vh - 100px)"
            // height="100%"
            onStart={() => {
              try {
                typeof window !== "undefined" &&
                  window.gtag("event", "play", {
                    event_category: "Videos",
                    event_label: `${props.title}`,
                  });
              } catch (err) {
                console.error(`failed to track event`, err);
              }
            }}
          />
      </div>
      <div className="video-content">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

export default VideoPlayer;
