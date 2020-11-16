import React from 'react'
import {VscHome} from 'react-icons/vsc'
import {AiFillPlusCircle, AiOutlineBars, AiOutlineEllipsis} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {IconContext} from 'react-icons'
const Footer = () =>{
return(
    <section id="footer">
        <IconContext.Provider value={{size:'50px',color:'#54D1ED'}}>
                   <div id="add">
                <AiFillPlusCircle/>
                
                  </div> 
        </IconContext.Provider>   
        <article id="cont_footer">
        
        <IconContext.Provider value={{size:'25px',color:'#54D1ED'}}>
                   <div id="home">
                <VscHome/>
                <p id="inicio">inicio</p>
                  </div> 
                    </IconContext.Provider>

        <IconContext.Provider value={{size:'25px',color:'#DADADA'}}>
                   <div id="story">
                <AiOutlineBars/>
                <p id="historial">Historial</p>
                  </div> 
                    </IconContext.Provider>            
                    <div>
                    <p id="ahorrar1">Ahorrar</p>
                    </div>
        <IconContext.Provider value={{size:'25px',color:'#DADADA'}}>
                   <div id="user">
                <BiUserCircle/>
                <p id="mi_perfil">Mi perfil</p>
                  </div> 
                    </IconContext.Provider>     

        <IconContext.Provider value={{size:'25px',color:'#DADADA'}}>
                   <div id="points">
                <AiOutlineEllipsis/>
                <p id="mas">Más</p>
                  </div> 
        </IconContext.Provider>   

        
        </article>
    </section>
)
}

export default Footer