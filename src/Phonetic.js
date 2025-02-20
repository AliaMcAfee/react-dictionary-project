import React from "react";

export default function Phonetic(props) {
  {
    props.phonetic.map(function (phonetic, index) {
      return <div key={index}>{phonetic}</div>;
    });
  }
}
