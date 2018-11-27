var VideoPlayer = (props) => (
  console.log("VIDEOPLAYER", props);
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src=React.createElement(

  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: {props.video.snippet.thumbnails.default.url}, allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      "Video Title"
    ),
    React.createElement(
      "div",
      null,
      "Video Description"
    )
  ) allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
