import "./styles.css";
import React from "react";
import TextField from "@mui/material/TextField";

export default function App() {
  const [word, changeWord] = React.useState("");
  const [value, changeValue] = React.useState(0);
  React.useEffect(() => {
    // Good!
    var res = 0;
    for (var i = 0; i < word.length; i++) {
      // console.log(word[i].toLowerCase());
      if (
        word[i].toLowerCase() === "a" ||
        word[i].toLowerCase() === "i" ||
        word[i].toLowerCase() === "j" ||
        word[i].toLowerCase() === "q" ||
        word[i].toLowerCase() === "y"
      )
        res += 1;
      else if (
        word[i].toLowerCase() === "b" ||
        word[i].toLowerCase() === "k" ||
        word[i].toLowerCase() === "r"
      )
        res += 2;
      else if (
        word[i].toLowerCase() === "c" ||
        word[i].toLowerCase() === "g" ||
        word[i].toLowerCase() === "l" ||
        word[i].toLowerCase() === "s"
      )
        res += 3;
      else if (
        word[i].toLowerCase() === "d" ||
        word[i].toLowerCase() === "m" ||
        word[i].toLowerCase() === "t"
      )
        res += 4;
      else if (
        word[i].toLowerCase() === "e" ||
        word[i].toLowerCase() === "h" ||
        word[i].toLowerCase() === "n" ||
        word[i].toLowerCase() === "x"
      )
        res += 5;
      else if (
        word[i].toLowerCase() === "u" ||
        word[i].toLowerCase() === "v" ||
        word[i].toLowerCase() === "w"
      )
        res += 6;
      else if (word[i].toLowerCase() === "o" || word[i].toLowerCase() === "z")
        res += 7;
      else if (word[i].toLowerCase() === "f" || word[i].toLowerCase() === "p")
        res += 8;
    }
    var sum = 0;
    while (res) {
      sum += res % 10;
      res = Math.floor(res / 10);
    }
    changeValue(sum);
  }, [word]);

  return (
    <div className="App">
      <TextField
        onChange={(str) => {
          changeWord(str.target.value);
          console.log(word);
        }}
      />
      <h2>Destiny Number:{value}</h2>
    </div>
  );
}
