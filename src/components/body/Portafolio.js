import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import robot from './images/IMG1.png'
import logo from './images/logo.png'
const Portafolio =()=>{
return(
    <section id="portafolio1">
        <article className="container-fluid">
        <div className="row">
        <div id="portafolio_title" className="col">
        Conoce tu portafolio
        </div>
        <div id="button_estrategia" className="col">
        <p id="estrategia_text">Estrategia</p>
        </div>
        </div>
        </article>
        <article id="cont_portafolio">
            <div className="container-fluid">
            <div className="row">
            <div  className="col">

            <svg  id="circ_robot" className="svg" viewBox="-3 -3 106 106">
           
            
  <circle cx="50" cy="50" r="48" 
    
    fill="transparent"
    stroke="black" 
    strokeWidth="7"
    
    />

    <circle cx="50" cy="50" r="48"  
    fill="none"
    stroke="#41CF69" 
    strokeWidth="7"
    transform={`rotate(-60 50 50)`}
            style={{
              strokeDasharray: "25",
              strokeDashoffset: "18.75"
            }}
    />

    <circle
            cx="50"
            cy="50"
            r="48"
            stroke="#b0aeac"
            fill="transparent"
            strokeWidth="7"
            transform={`rotate(53 50 50)`}
            style={{
                
              strokeDasharray: "187, 50"
            }} />
           <circle cx="50" cy="50" r="48" 
    
    fill="transparent"
    stroke="white" 
    strokeWidth="7"
    strokeDasharray="1,30"
    transform={`rotate(-89 50 50)`}
    />
    
   
</svg>
<figure id="fig_robot">
<img src={robot} alt="robot"></img>
</figure>
<p id="paragraph6">
RoboAdvisor
</p>
<p id="paragraph7">
10 Fondos
</p>
</div>
            <div className="col">
                <div id="skan_sec">
                <div className="container-fluid">
                <div className="row">
                <div className="col">
                <figure>
                <img src={logo} alt="logo"></img>
                </figure>
                </div>
                <div id="box_porc" className="col">
                <p id="paragraph8">15%</p>
                </div>
                </div>
                </div>
                <p id="efect"> FIC Old Mutual Efectivo</p>
                <p id="dinero_efec">$240.000</p>
                <p id="tipo_act">Tipo de activo</p>
                <p id="rent_fij">Renta fija <br/>
                Depósito a la fija
                </p>
                </div>
                <div id="flechas" className="container-fluid">
                <div className="row">
                <div id="izq" className="col">
                <IconContext.Provider value={{size:'15px',color:'#817699'}}>
                   <div>
                <AiOutlineLeft />
                  </div> 
                    </IconContext.Provider>
                </div>
                <div id="der" className="col">
                <IconContext.Provider value={{size:'15px',color:'#817699'}}>
                   <div>
                <AiOutlineRight />
                  </div> 
                    </IconContext.Provider>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </article>
        <p id="paragraph9">Tu dinero se invierte de la forma más eficiente de acuerdo <br/> al perfil de riesgo asignado por nuestro RoboAdvisor</p>
    </section>
)
}
export default Portafolio