import React from 'react';
import imgLeftBG from '../../../imgs/backGroung/left_freeG.png'
import imgRightBG from '../../../imgs/backGroung/right_freeG.png'

const Mainbackground = () => {
    return (
        <div>
            <img src={imgLeftBG} style={{position:"absolute",top:"9%", left:"0px",zIndex:"-500", maxWidth:"35%", height:"105%" }} alt='game'/>
            <img src={imgRightBG} style={{position:"absolute",top:"9%", right:"0px",zIndex:"-500",maxWidth:"35%", height:"105%"}} alt='games'/>
        </div>
    );
}

export default Mainbackground;
