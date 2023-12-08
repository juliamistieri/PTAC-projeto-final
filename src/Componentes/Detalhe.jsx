import { useParams } from "react-router-dom"
import Card from "./Componente/Card";
export default function Detalhe() {

    const { id } = useParams()
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const carros = lista.filter((objeto) => {
        if (objeto.id == id) {
            return objeto
        }
        return null
    })
    return (
        <Card carro={carros[0]} />
    )
}