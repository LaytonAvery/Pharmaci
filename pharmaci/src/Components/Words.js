import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Words = () => {
  const [words, setWords] = useState("");

  const buttonHandler = async () => {
    const { data } = await axios.get("http://localhost:3000");
    setWords(data);
  };

  return (
    <div>
      <h2>How can we help you today?</h2>
      <Button onClick={buttonHandler}>Generate Medication</Button>
      <h2>{words.word}</h2>
    </div>
  );
};
export default Words;
