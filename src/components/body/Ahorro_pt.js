import React from 'react'
import faceph from './images/thumb_m.png'
import {BiPlayCircle} from 'react-icons/bi'
import {IconContext} from 'react-icons'
const Ahorro_pts = () =>{
return(
    <section>
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
    </section>
)

}

export default Ahorro_pts