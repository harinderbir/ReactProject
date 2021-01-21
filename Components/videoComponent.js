import React from "react";

function videoComponent(props) {
  //let completeLink = "../src/" + { props.sourceLink } + ".js";

  return (
    <div>
      <iframe
        title="IntroVideo"
        width="480"
        height="360"
        src="https://www.youtube.com/embed/iWjNhLU2coQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default videoComponent;
