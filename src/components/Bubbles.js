import React from "react";

const Bubbles = () => {
  return (
    <div>
      <iframe
        title="Bubbles"
        src="/bubbleDemo/index.html"
        frameBorder={0}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Bubbles;
