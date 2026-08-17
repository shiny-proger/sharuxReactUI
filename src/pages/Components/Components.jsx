import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import StateCard from '../../components/StatesCard';
import state1 from '../../assets/buttons.png'
import state2 from '../../assets/state2.png'
import state3 from '../../assets/state3.png'

function Components (){
    const [count, setCount] = useState(0)
    return(
        <>
            <div className='grid place-content-center pt-15 pb-15 mt-20' >
                <h1 className='text-[clamp(40px,1vw,300px)] leading-12'>Компоненты <span>sharux</span></h1>
            </div>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-10 mt-15 mb-15'>
                <StateCard url="/components/buttons" head="Кнопки" date="27.07.2026" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state1}  />
                <StateCard url="/components/selectors" head="Selectors" date="April 03, 2022" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state2}  />
                <StateCard head="Lorem " date="March 12, 2022" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state3}  />
                <StateCard head="Lorem " date="April 24, 2022" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state1}  />
                <StateCard head="Lorem " date="April 03, 2022" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state2}  />
                <StateCard head="Lorem " date="March 12, 2022" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state3}  />
            </div>
        </>
    )

}

export default Components