import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Table from '../../Components/Table/Table'
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (submit) {
      axios
        .get(`http://localhost:3001/escala?mat=${submit}&_sort=data`)
        .then((response) => setValues(response.data));
    }
  }, [submit]);

  function onSubmit(event) {
    event.preventDefault();
    setSubmit(input);
  }

  function onChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="home-container">
        <form onSubmit={onSubmit} className="home-form">
          <h1>Escala Diária</h1>
          <h2>Empresa Vitória</h2>
          <input className="home-input" onChange={onChange} required placeholder="Digite sua matrícula" />
          <button className="home-button" type="submit">Consultar</button>
          <p className="home-feedback">
            <Link  to="/feedback"> Deixe sua opnião </Link>
          </p>
        </form>
      </div>
      {values.length > 0 && <Table Result={values} />}
    </>
  );
};

export default Home;
