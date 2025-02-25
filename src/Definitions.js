import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  if (props.definition) {
    return (
      <div className="Definitions">
        <section>
          <p>/{props.definition.phonetic}/</p>
          <ul className="results">
            {props.definition.meanings.map(function (meaning, index) {
              return (
                <>
                  <li>
                    <em>{meaning.partOfSpeech}</em>
                  </li>
                  <li>
                    <strong>Definition:</strong> {meaning.definition}
                  </li>

                  <li>
                    <strong>Synonyms:</strong>
                    <Synonyms synonyms={meaning.synonyms} />
                  </li>
                  <li>
                    <strong>Example: </strong>
                    {meaning.example}
                  </li>
                </>
              );
            })}
          </ul>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
