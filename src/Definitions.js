import React from "react";

export default function Definitions(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="Definitions">
        <h2>{props.definition.word}</h2>
        {props.definition.map(function (meanings, index) {
          return meanings[0];
        })}
      </div>
    );
  } else {
    return null;
  }
}
