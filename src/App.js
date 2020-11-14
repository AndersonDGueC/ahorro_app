import React from "react"
import Title_name from './components/header/Title_name'
import User_balance from './components/body/User_balance'
import Metas from './components/body/Metas'
function App() {
  return (
    <div className="App">
        <Title_name/>
        <User_balance/>
        <Metas/>
    </div>
  );
}

export default App;
