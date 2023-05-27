import React from "react"
import style from '../styles/Detail.module.css'
import img from '../images/Pizza1.jpg'
import { pizzas } from '../data';
import { useParams } from 'react-router-dom';

export default function Detail() {
    
    const { id } = useParams();
    console.log(id);

    const pizza = pizzas.find(e => e.id === id)
    
    return(
        <div className={style.Container}>
            <h3>{pizza.tipo.toUpperCase()}</h3>
            <img src={img} />
            <img/>
            <p>{pizza.ingredientes}</p>
            <div>
                <p>Cantidad:</p>
            </div>
            <p>{pizza.precio}</p>
            <button>Agregar al pedido</button>
        </div>
    )
}