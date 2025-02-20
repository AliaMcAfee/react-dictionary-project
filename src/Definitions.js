import React from "react";

export default function Definitions(props) {
  if (props.definition) {
    return (
      <div className="Definitions">
        <ul className="results">
          <li>
            {" "}
            <strong>Part of Speech:</strong> {props.definition.partOfSpeech}
          </li>
          <li>
            <strong>Synonyms:</strong> {props.definition.synonyms}
          </li>
          <li>
            {" "}
            <strong>Definition:</strong> {props.definition.definition}
          </li>
          <li>
            <strong>Example:</strong>
            {props.definition.example}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
