import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../cadastrar.css';

export default function Todo() {
    
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [lista, setLista] = useState(listaLocalStorage);
    const [idCriar, setIdCriar] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
    const [carros, setCarros] = useState("");
    const [url, setUrl] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);


    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:idCriar,
            carros:carros,
            url:url,
            titulo:titulo,
            descricao:descricao
        }]);
        setCarros("")
        setUrl("")
        setTitulo("")
        setDescricao("")
        setIdCriar(idCriar + 1)
    };

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
                <p>Adicionar Url</p>
                <input type="text"
                value={url}
                onChange={(e)=>
                {setUrl(e.target.value)}} />
                <p>Adicionar Titulo</p>
                <input type="text"
                value={titulo}
                onChange={(e)=>
                {setTitulo(e.target.value)}} />
                <p>Adicionar Descrição</p>
                <input type="text"
                value={descricao}
                onChange={(e)=>
                {setDescricao(e.target.value)}} />
                <br></br>
                <br></br>
                <button>ADICIONAR</button>
            </form>
        </div>
    );
}