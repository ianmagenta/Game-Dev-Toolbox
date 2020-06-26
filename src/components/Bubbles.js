import React, { useEffect } from "react";

const Bubbles = (props) => {
  useEffect(() => {
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
      if (event.data.bubbles) {
        if (props.history.location.state) {
          props.history.replace("/tools/" + event.data.data, { type: "redirect" });
        } else {
          props.history.push("/tools/" + event.data.data, { type: "redirect" });
        }
      }
    }
  }, [props.history]);

  return (
    <div>
      <iframe
        name="0"
        title="Bubbles"
        src="/bubbleDemo/index.html"
        frameBorder={0}
        allowtransparency="true"
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
