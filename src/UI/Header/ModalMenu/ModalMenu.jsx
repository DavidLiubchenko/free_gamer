import React from 'react';
import s from'./ModalMenu.module.css';

const Modalmenu = ({modMenu,setmodMenu}) => {
    return (
        <div className={modMenu ? `${s.modal} ${s.active}`: s.modal} onClick={()=>setmodMenu(false)}>
            <div className={s.modal_content} onClick={(e)=>e.stopPropagation()}>

            </div>
        </div>
    );
}

export default Modalmenu;
