import style from "../styles/Burguer.module.css"
import { useNavigate } from "react-router-dom";


export default function Burguer({setOpen}) {
    const navigate = useNavigate();

    function closeMenu(e) {
        e.preventDefault()
        setOpen(false)
    }
    return(
        <div className={style.Container}>
            <h5 onClick={(e) => {navigate("/"); closeMenu(e)}}>Inicio</h5>
            <h5 onClick={(e) => {navigate("/amenities"); closeMenu(e)}}>Información</h5>
            <h5 onClick={(e) => {navigate("/location"); closeMenu(e)}}>Cómo llegar</h5>
           
        </div>
    )
}

