import React, { useState } from "react";
import classes from "./App.module.scss";
import axios from "axios";

function App() {
  const [inputCep, setInputCep] = useState("");
  const [inputLogradouro, setInputLogradouro] = useState("");
  const [inputComplemento, setInputComplemento] = useState("");
  const [inputBairro, setInputBairro] = useState("");
  const [inputLocalidade, setInputLocalidade] = useState("");
  const [inputUf, setInputUf] = useState("");
  const [invalidCep, setInvalidCep] = useState(false);

  const getCepOnBlur = () => {
    if (inputCep.match(/^[0-9]{8}$/)) {
      axios
        .get(`https://viacep.com.br/ws/${inputCep}/json/`)
        .then(function (response) {
          setInvalidCep(false);
          setInputLogradouro(response.data.logradouro);
          setInputComplemento(response.data.complemento);
          setInputBairro(response.data.bairro);
          setInputLocalidade(response.data.localidade);
          setInputUf(response.data.uf);
        });
    } else {
      setInvalidCep(true);
    }
  };

  return (
    <div className={classes.changecolor}>
      <input
        placeholder="digite o cep"
        onChange={(e) => setInputCep(e.target.value)}
        value={inputCep}
        onBlur={(e) => getCepOnBlur()}
      />
      {!invalidCep && (
        <form>
          <input placeholder="logradouro" value={inputLogradouro} />
          <input placeholder="complemento" value={inputComplemento} />
          <input placeholder="bairro" value={inputBairro} />
          <input placeholder="localidade" value={inputLocalidade} />
          <input placeholder="UF" value={inputUf} />
        </form>
      )}
      {invalidCep && <p>CEP INVALIDO</p>}
    </div>
  );
}

export default App;
