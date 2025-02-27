import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li className="list" key={index}>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
