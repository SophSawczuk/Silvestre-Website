import style from '../styles/CardHome.module.css'
import {IoIosArrowForward} from 'react-icons/io'
import { useNavigate } from "react-router-dom";

export default function CardHome({id, name, ingredientes, precio}) {
    const navigate = useNavigate();
    return(
        <div className={style.Container} onClick={() => navigate("/detail/" + id)}>
            <h3>{name.toUpperCase()}</h3>
            <div className={style.Detail}>
                <p>{ingredientes}</p>
                <IoIosArrowForward size='40px' className={style.Icon}/>
            </div>
            <p><b>{precio}</b></p>
        </div>
    )
}