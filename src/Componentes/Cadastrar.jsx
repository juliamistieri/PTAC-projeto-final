import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./style.css";

export default function Cadastrar() {
    
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [lista, setLista] = useState(listaLocalStorage);
    const [idCriar, setIdCriar] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
    const [carros, setCarros] = useState("");
    const [marca, setMarca] = useState("");

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);


    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:idCriar,
            carros:carros,
            marca:marca
        }]);
        setCarros("")
        setMarca("")
        setIdCriar(idCriar + 1)
    };

    const remover = (id) => {
        const auxLista = [];
        lista.map((carros) => {
            if (carros.id !== id) {
                auxLista.push(carros);
            }
        });
        setLista(auxLista);
    }
    return(
        <div class="container">
        <Link to="/">Voltar para o Home</Link>
        <br></br>
        <br></br>
        <h1>Lista de Carros</h1>
            <form onSubmit={salvar}>
            <p>Adicionar Carro</p>
                <input type="text"
                value={carros}
                onChange={(e)=>
                {setCarros(e.target.value)}} />
                <p>Adicionar Marca</p>
                <input type="text"
                value={marca}
                onChange={(e)=>
                {setMarca(e.target.value)}} />
                <br></br>
                <br></br>
                <button>ADICIONAR</button>
            </form>
        </div>
    );
}