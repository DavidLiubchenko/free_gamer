import React,{useState} from "react";
// eslint-disable-next-line
import appStyles from "./App.css"

import Mainbackground from "./UI/MainContent/BackGround/MainBackGround.jsx";

import Header from "./UI/Header/Header.jsx";

function App() {

  let [opac, setopac] = useState(0.2);
 

  let elem = document.getElementsByClassName("searchOpac")

  function Show (event){
    if(event.target.localName !== "input"){
      elem[0].style.opacity = 0.2;
      setopac(0.2)
    }
  }
  return (
    <div onClick={(e)=>Show(e)} className="App" style={appStyles} >
      <Mainbackground />
      <Header opac={opac} setopac={setopac} />
    </div>
  );
}

export default App;
