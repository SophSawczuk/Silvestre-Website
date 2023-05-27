import banner from '../images/Component1.png'
import style from '../styles/Home.module.css'
import CardHome from './CardHome'
import { pizzas } from '../data';

export default function Home() {
   
    console.log(pizzas)
    return(
        
        <div>
            <img src={banner} alt='banner' className={style.Banner}/>
            {
                pizzas && pizzas.map(e => {
                    return(
                        <CardHome id={e.id} name={e.tipo} ingredientes={e.ingredientes} precio={e.precio} />
                    )
                }) 
            }
        </div>
    )
}