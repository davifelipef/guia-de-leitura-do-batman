import React from 'react';
import { Link } from 'react-router-dom';

function OComeco(){
  return (
    <div id="content">
      <p id="back"><Link to="/">Voltar</Link></p>
      <h1>Cadastre o seu quadrinho</h1>
      <p>Preencha as informações abaixo para cadastrar o seu quadrinho.</p>
    </div>
  );
}

export default OComeco;