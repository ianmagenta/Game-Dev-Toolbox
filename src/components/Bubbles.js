import React from "react";

const Bubbles = () => {
  return (
    <div>
      <iframe
        title="Bubbles"
        src="/bubbleDemo/index.html"
        frameBorder={0}
        allowtransparency="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Bubbles;
