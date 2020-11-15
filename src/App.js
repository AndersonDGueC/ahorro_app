import React from "react"
import Title_name from './components/header/Title_name'
import User_balance from './components/body/User_balance'
import Metas from './components/body/Metas'
import Portafolio from './components/body/Portafolio'
function App() {
  return (
    <div className="App">
        <Title_name/>
        <User_balance/>
        <Metas/>
        <Portafolio/>
    </div>
  );
}

export default App;
