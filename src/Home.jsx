import React from 'react';
import Header from './Componentes/Header';
import Card from './Componentes/Card';
import Detalhe from './Componentes/Detalhe';

export default function Home(){
 
    return(
    <div>

      <Header />
      
      <main>
        <Card />
        {lista.map((carros)=>
    <ul key={carros.id}>
        <li>
        <p>{carros.carros}</p>
        <p>{carros.marca}</p>
        <button onClick={() => remover(carros.id)}>REMOVER</button>
        </li>
    </ul>
    )};
        {/* Outras seções do corpo da página podem ser adicionadas aqui */}
      </main>
      <Detalhe />
    </div>
  );
};

