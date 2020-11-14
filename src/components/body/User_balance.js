import React from 'react'
import IMG from './images/IMG.png'
const User_balance=()=>{
return (
    <section>
         
        <article id="face_start">
       <figure >
        <img id="img1" src={IMG} alt='logo'></img>
    </figure>
        <p id='paragraph1'>
        Eres <br/>
        estratega
        </p>
        <br/>
        <p id="paragraph2">Tu saldo</p>
        <p id="paragraph3">$1.570.000</p>
        </article>
        <article id="counts">
        <div className="container-fluid">
        <div className="row">
        <div id="inver" className="col">
            Inversión
        </div>
        <div id="balan_inver" className="col">
            $1.600.000
        </div>

        </div>
        <div className="row">
        <div id="rendi" className="col">
             Rendimiento
        </div>
        <div id="balan_rendi" className="col">
            -$30.000
        </div>
        
        </div>

        </div>
        
        </article>
    </section>
)
}

export default User_balance