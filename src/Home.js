import React from 'react';
import pic from './media/batman-symbol.png';

function Home(){
  return (
    <div id="content">
      <img src={pic} id="batman-symbol" alt="batman-symbol"/>
      <h1>Guia de Leitura do Batman</h1>
        <h2><i>Escrito por Davi Felipe F. L. Rodrigues</i></h2>
          <p>O Batman tem sido um dos meus heróis favoritos há muito tempo.</p>
          <p>Recentemente, com a oportunidade de construir uma coleção em quadrinhos dele, estou reunindo 
          histórias que, lidas em uma certa sequência, apresentam as aventuras do Cavaleiro das Trevas da 
          forma que faz mais sentido do ponto de vista cronológico.</p>
          <p>Vem comigo.</p>
    </div>
  );
}

export default Home;