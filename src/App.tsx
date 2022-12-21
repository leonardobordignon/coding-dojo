import React, { useState } from "react";
import classes from "./App.module.scss";
import { InputBase } from "junto-design-system";

function App() {
  const [inputCep, setInputCep] = useState("");

  return (
    <div className={classes.changecolor}>
      <InputBase
        placeholder="digite seu Cep"
        onChange={(e) => setInputCep(e.target.value)}
        value={inputCep}
      />
    </div>
  );
}

export default App;
