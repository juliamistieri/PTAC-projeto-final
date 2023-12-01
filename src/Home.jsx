import React from 'react';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';

export default function Home(){
  {lista.map((carros)=>
    <ul key={carros.id}>
        <li>
        <p>{carros.carros}</p>
        <p>{carros.marca}</p>
        <button onClick={() => remover(carros.id)}>REMOVER</button>
        </li>
    </ul>
    )};
    return(
    <div>
      <Header />
      
      <main>
        <NavBar />
        {/* Outras seções do corpo da página podem ser adicionadas aqui */}
      </main>
      <Footer />
    </div>
  );
};

