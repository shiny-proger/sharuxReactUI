import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonOval({text="Click", size="1"}){
    
    return (
        <button className='bg-amber-300 cursor-pointer' id={size}>{text}</button>
    )
}

export default ButtonOval;