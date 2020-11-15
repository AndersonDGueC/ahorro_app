import React from 'react'

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
            <div id="circ_robot" className="col">
            <svg className="svg" viewBox="-3 -3 106 106">
    
  <circle cx="50" cy="50" r="48" 
    strokeDasharray="25, 5" 
    fill="transparent" 
    stroke="black" 
    strokeWidth="7" />
</svg>
</div>
            <div className="col">

            </div>
            </div>
            </div>
        </article>
    </section>
)
}
export default Portafolio