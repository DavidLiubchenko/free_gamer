import React,{useState} from 'react';
import menuImg from "../../imgs/hamburger-menu-icon-18.png"
import Input from "./Input.jsx";
import searchIco from '../../imgs/luppa.png'
import heartIco from '../../imgs/heartLikes.png'
import shopIco from "../../imgs/shop.png"
import logIco from "../../imgs/Login.png"
import Logo from "./Logo.jsx";
import Button from "../Button/Button.jsx";
import Modalmenu from './ModalMenu/ModalMenu.jsx';

const Header = ({opac,setopac}) => {
    
  let elem = document.getElementsByClassName("searchOpac")
  const [modMenu, setmodMenu] = useState(false)
  function changeOpac(e) {
    e.preventDefault()
    console.log(e);

    if (opac === 0.2) {
      elem[0].style.opacity = 1;
      // elem[0].style.backgroundColor ='white'
      elem[1].style.color ='black'
      setopac(1)
    }
    
  }
    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", backgroundColor: '#808080', alignItems: "center",height:"10%" }}>
            <Modalmenu modMenu={modMenu} setmodMenu={setmodMenu}/>
        <Logo />
        <div></div>
        <div></div>
        <Button onClick={()=>setmodMenu(!modMenu)} style={{ backgroundColor: '#808080', maxWidth: "2.22%" }}><img src={menuImg} style={{ maxWidth: "100%", minHeight: "20px", minWidth: "20px", borderRadius: "50%" }} alt="" /></Button>
        <form onClick={changeOpac} className="searchOpac" style={{ width: "40%", height: "50px",opacity:"0.2", backgroundColor: "white ", display: "flex", alignItems: 'center', borderRadius: "25px", justifyContent: "center" }}>
          <Input className="searchOpac" type={"text"} style={{ minHeight: "60%", minWidth: "90%", fontSize: "25px" }} />
          <Button  style={{ backgroundColor: 'white', width: "4%", position: "relative", right: "2%" }}><img src={searchIco} style={{ maxWidth: "100%", flexBasis: "w 10%", backgroundColor: 'white' }} alt="" /></Button>
        </form>
        <div></div>
        <div></div>
        <div></div>
        <Button style={{ backgroundColor: '#808080', width: "2%", position: "relative", right: "2%" }}><img src={heartIco} style={{ maxWidth: "100%", flexBasis: "w 10%", backgroundColor: 'white' }} alt="" /></Button>
        <Button style={{ backgroundColor: '#808080', width: "2%", position: "relative", right: "2%" }}><img src={shopIco} style={{ maxWidth: "100%", flexBasis: "w 10%", backgroundColor: 'white' }} alt="" /></Button>
        <Button style={{ backgroundColor: '#808080', width: "2%", position: "relative", right: "2%" }}><img src={logIco} style={{ maxWidth: "100%", flexBasis: "w 10%", backgroundColor: 'white',border:"2px solid #808080" }} alt="" /></Button>

      </div>
    );
}

export default Header;
