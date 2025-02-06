import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(` Searching for the ${word} definition.....`);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateWord} />
      </form>
    </div>
  );
}
