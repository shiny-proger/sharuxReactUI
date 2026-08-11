import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';


function Shiny (){
    const [count, setCount] = useState(0)
    return(
        <>
            <div className='grid place-content-center pt-15 pb-15' >
                <h1 className='text-[clamp(40px,1vw,300px)] leading-12'>Немного о <span>shiny</span></h1>
            </div>
            
        </>
    )

}

export default Shiny