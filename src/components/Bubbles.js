import React from "react";
import { Link } from "react-router-dom";

const Bubbles = () => {
  return (
    <div>
      <iframe
        title="Bubbles"
        src="/bubbleDemo/index.html"
        frameBorder={0}
        allowtransparency="true"
        link={Link}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default Bubbles;
