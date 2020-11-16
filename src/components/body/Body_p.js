import React from 'react'
import User_balance from './User_balance'
import Metas from './Metas'
import Portafolio from './Portafolio'
import Ahorro_pts from './Ahorro_pt'

const Body_p=()=>{
    return(
        <section>
        <User_balance/>
        <Metas/>
        <Portafolio/>
        <Ahorro_pts/>
        </section>
    )
}

export default Body_p