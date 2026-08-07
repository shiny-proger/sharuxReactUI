import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propsButtons } from '../../utils/utils';

function ButtonDef({text="Click", ...styleProps}){  
    let className=propsButtons(styleProps);
    return (
        <button className={className} >{text}</button>
    )
}

export default ButtonDef;


// size="1", 
// rad="rounded-full", 
// className="font-bold rounded-full text-olive-300 
// hover:text-olive-200 active:text-olive-100 bg-indigo-500 
// hover:bg-indigo-400 active:bg-indigo-300 cursor-pointer"
