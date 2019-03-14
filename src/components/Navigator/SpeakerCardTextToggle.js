import React from "react";

const SpeakerCardTextToggle = (props) => {
  const color = props.focused ? "#a5a5a5" : "#c81c2e";
  return (
    <div>
      <button
        css={{
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "default",
          transition: "1s",
          textTransform: "uppercase",
          background: "none",
          border: "none",
          color,
          ":hover": {
            color: "#00205b"
          }
        }}
        onClick={props.onClick}
      >
        {props.focused ? props.focusedText : `${props.defaultText} >>`}
      </button>
    </div>
  );
};

export default SpeakerCardTextToggle;
