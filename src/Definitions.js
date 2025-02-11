import React from "react";

export default function Definitions(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="Definitions">
        <ul>
          <li>Part of Speech: {props.definition.partOfSpeech}</li>
          <li>Definition: {props.definition.definition}</li>
          <li>Example: {props.definition.example}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
