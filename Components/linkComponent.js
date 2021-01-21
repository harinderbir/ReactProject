import React from "react";

function linkComponent(props) {
  //let completeLink = "../src/" + { props.sourceLink } + ".js";

  return (
    <div>
      <a href={props.sourceLink}>{props.divLabel}</a>
    </div>
  );
}

export default linkComponent;
