import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Cadastrar() {
    
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [lista, setLista] = useState(listaLocalStorage);
    const [idCriar, setIdCriar] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);

    const [carro, setCarro] = useState({
    idCriar: "",
    titulo: "",
    urllink: "",
    descricao: ""
    });
    
    const carrosGuardados = JSON.parse(localStorage.getItem('carros')) || [null];
    carrosGuardados.push(titulo);
    localStorage.setItem('carros', JSON.stringify(carrosGuardados));
    const navigate = useNavigate('/');

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:idCriar,
            titulo:titulo,
            urlLink:urlLink,
            descricao:descricao
        }]);
        setTitulos("")
        seturlLink("")
        setDescricao("")
        setIdCriar(idCriar + 1)
        navigate("/")
    };

    return(
        <div class="container">
        <Link to="/">Voltar para o Home</Link>
        <br></br>
        <br></br>
        <h1>Lista de Carros</h1>
            <form onSubmit={salvar}>
            <p>Adicionar Titulo</p>
                <input type="text"
                value={carro.titulo}
                onChange={(e)=>
                {setCarro(e.target.value)}} />
                <p>Adicionar Url</p>
                <input type="text"
                value={carro.urlLink}
                onChange={(e)=>
                {setCarro(e.target.value)}} />
                <p>Adicionar Descrição</p>
                <input type="text"
                value={carro.descricao}
                onChange={(e)=>
                {setCarro(e.target.value)}} />
                <br></br>
                <br></br>
                <button>ADICIONAR</button>
            </form>
        </div>
    );
}