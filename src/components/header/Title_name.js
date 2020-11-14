import React from 'react'
import {FaRegBell} from 'react-icons/fa'
import {IconContext} from 'react-icons'
const Title_name=()=>{
    return(
        <section className="container-fluid">
            <div className="row">
            <div className="col-sm" id="user_name">Hola, Camila </div>
            <div className="col-sm" id="user_notification">
                <IconContext.Provider value={{size:'25px',color:'#54D1ED'}}>
                   <div>
                <FaRegBell />
                  </div> 
                    </IconContext.Provider>
                </div> 
            </div>
           
        </section>
    )
}

export default Title_name