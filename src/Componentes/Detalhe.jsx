import { useParams } from "react-router-dom"
import Card from './Card';

export default function Detalhe() {

    const { id } = useParams()
    const lista = JSON.parse(localStorage.getItem("Lista")) || [];
    const filtrarItem = lista.find((carrosObj)=> carrosObj.id == id) || null;

    return (
        <Card carro={filtrarItem} />
    )
}