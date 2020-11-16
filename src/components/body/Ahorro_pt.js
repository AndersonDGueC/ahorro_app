import React from 'react'
import faceph from './images/thumb_m.png'
import {BiPlayCircle} from 'react-icons/bi'
import {IconContext} from 'react-icons'
import plata from './images/IMG3.png'
import manos from './images/IMG4.png'
import tarjeta from './images/IMG5.png'
const Ahorro_pts = () =>{
return(
    <section id="ah_sec">
        <div id="pts_">
            Los P*t@s del ahorro
            </div>
        <article>
            <figure>
                <img id="iface" src={faceph} alt="faceph"></img>
            </figure>
            <div id="maquet">
                <p id="paragraph10">Esto es AHORRO</p>
                <p id="paragraph11">Conoce como nuestro RoboAdvisor crea el mejor  portafolio de inversión para ti</p>
            </div>
        </article>
        <article id="cont_cir" >
        
        <div id="cir1">

        </div>
        <div id="cir2" >

        </div>
        <div  id="cir3">

        
        </div>
        </article>
        <article id="play">
        <IconContext.Provider value={{size:'35px',color:'#FFFFFF'}}>
                   <div>
                < BiPlayCircle/>
                  </div> 
                    </IconContext.Provider>
        </article>
        <article id="test">
        <div className ="conten_test">
            <div>
        <p className="gastos_tit">
        10 gastos que debes evitar 
        </p>
        <p className="paragraph_gast">
            <br/>
        Aunque el 66% de los adultos recibió <br/> educación para el ahorro, apenas el 44% <br/>ahorra de manera fomal.
        </p>
        </div>
        <figure className="fig_pl">
        <img src={plata} alt="plata"></img>
        </figure>
        </div>
        <div className="divisor">

        </div>
        
        <div className ="conten_test">
            <div>
        <p className="gastos_tit">
        10 gastos que debes evitar 
        </p>
        <p className="paragraph_gast">
            <br/>
        Aunque el 66% de los adultos recibió <br/> educación para el ahorro, apenas el 44% <br/>ahorra de manera fomal.
        </p>
        </div>
        <figure className="fig_pl">
        <img src={manos} alt="manos"></img>
        </figure>
        </div>
        <div className="divisor">

        </div>

        <div className ="conten_test">
            <div>
        <p className="gastos_tit">
        10 gastos que debes evitar 
        </p>
        <p className="paragraph_gast">
            <br/>
        Aunque el 66% de los adultos recibió <br/> educación para el ahorro, apenas el 44% <br/>ahorra de manera fomal.
        </p>
        </div>
        <figure className="fig_pl">
        <img src={tarjeta} alt="tarjeta"></img>
        </figure>
        </div>
        
        </article>
    </section>
)

}

export default Ahorro_pts