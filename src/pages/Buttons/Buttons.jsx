import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import ButtonOval from '../../components/buttons/ButtonOval.jsx';

function Buttons (){
    const [count, setCount] = useState(0)
    return(
        <>
            <div className='grid place-content-center pt-15 pb-15' >
                <h1 className='text-[clamp(40px,1vw,300px)] leading-12'>Компоненты <span>кнопок</span></h1>
            </div>
            <div className='grid grid-cols-1 items-center justify-center'>
                <div className='OvalBut'>
                    <ButtonOval/>
                </div>
                <div className='RectangBut'>

                </div>
            </div>
        </>
    )

}

export default Buttons;