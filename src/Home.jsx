import React from 'react';
import Header from './Componentes/Header';
import Card from './Componentes/Card';
import Footer from './Componentes/Footer';

export default function Home(){
    return(
    <div>
      <Header />
      
      <main>
        <Card />
        {/* Outras seções do corpo da página podem ser adicionadas aqui */}
      </main>
      <Footer />
    </div>
  );
};