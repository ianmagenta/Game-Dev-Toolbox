import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Bubbles = () => {
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
      if (event.data.bubbles) {
        history.push("/tools/" + event.data.data);
      }
    }
  }, []);

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
