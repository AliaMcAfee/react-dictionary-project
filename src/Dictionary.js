import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDefinition(response.data.meanings);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "04d7a4ta8ecdfa4b30ebd32f8c464o31";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateWord} />
      </form>

      {definition && <h2>{word}</h2>}

      <Definitions definition={definition} />
    </div>
  );
}
