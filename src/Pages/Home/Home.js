import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table";
import axios from "axios";
import './Home.css'

const Home = () => {
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState('');
  const [submitAno, setSubmitAno] = useState('')
  const [ano, setAno] = useState('')
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (submit, submitAno) {
      axios
        .get(`http://localhost:3001/escala?mat=${submit}&ano=${submitAno}&_sort=data`)
        .then((response) => setValues(response.data));
    }
  }, [submit, submitAno]);

  function onSubmit(event) {
    event.preventDefault();
    setSubmit(input);
    setSubmitAno(ano);
  }

  function onChangeMat(event) {
    setInput(event.target.value);
  }

  function onChangeAno(event) {
    setAno(event.target.value)
  }

  return (
    <>
      <div className="home-container">
        <form onSubmit={onSubmit}>
          <h1 className="title-form">Consulta Escala</h1>
          <h2 className="subtitle-form">Empresa Vitória</h2>
          <hr />
          <h3 className="matricula-form">Matrícula</h3>
          <input
            className="matricula-input"
            onChange={onChangeMat}
            required
            placeholder="Digite sua matrícula"
          />
          <h3 className="ano-form">Ano de Nascimento</h3>
          <input 
            onChange={onChangeAno} 
            className="ano-input" 
            required
            type="password" 
            placeholder="Ex: 1991"
           />
          <h5>Digite o Ano com 4 digitos! (ex: 1991)</h5>
          <button className="button-form" type="submit">Consultar</button>
          <hr />
          <p>
            <Link to="/feedback"> Deixe sua opnião </Link>
          </p>
          <h6>2020 - Empresa Vitória - Desenvolvido por Equipe de T.I</h6>
        </form>
      </div>
      {values.length > 0 && <Table Result={values} />}
    </>
  );
};

export default Home;
