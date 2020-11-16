import React from 'react'
import {CgAdd} from 'react-icons/cg'
import {IconContext} from 'react-icons'
import palmera from './images/IMG0.png'
import computador from './images/IMG2.png'
const Metas=()=>{
return(
    <section id="metas1">
        <article className="container-fluid">
        <div className="row">
        <div id="title_meta" className="col">
        Tus metas
        </div>
        <div className="col">
        <IconContext.Provider value={{size:'25px',color:'#54D1ED'}}>
                   <div id="add_intitle" >
                <CgAdd/>
                  </div> 
                    </IconContext.Provider>
        </div>
        <div>

        </div>
        </div>
        </article>
        <article className="container-fluid">
        <div className="row">
        <div id="sec_palm" className="col">
        <figure>
            <img id="palm" src={palmera} alt="palmera"></img>
        </figure>
        <p id="paragraph4">Viaje a  Islas Canarias</p>
        <div className="dv2">

        </div>
        <div className="container-fluid">
        <div className="row">
        <div id="sec_porcen" className="col">
        
            <p id="number_porcen">20%</p>
        
        </div>
        <div className="col">
        <p id="bono">$1.630.000</p>
        <p id="real_bon">$8.000.000</p>
        </div>
        </div>
        </div>
        </div>
        <div id="sec_compu" className="col">
        <figure>
            <img id="compu" src={computador} alt='computador'></img>
        </figure>
        <p id="paragraph5">Macbook Pro</p>
        <div className="dv2">

        </div>
        <div className="container-fluid">
        <div className="row">
        <div id="sec2_porcen" className="col">
        
            <p id="number_porcen2">0%</p>
        
        </div>
        <div className="col">
        <p id="bono2">$0</p>
        <p id="real_bon2">$7.000.000</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </article>
    </section>
)
}

export default Metas