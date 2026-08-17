import { useState, useEffect } from 'react'
import TestComp from '../../../components/testComp/TestComp';


function Selectors (){


    return(
        <>
            <div className='grid  place-content-center pt-15 pb-15 mt-20' >
                <h1 className=' text-[clamp(40px,1vw,300px)] leading-12'>Button <span>components</span></h1>
            </div>
           
            <TestComp name="Real selector" list={["privet", "pakeda", "wassap", "maboy"]} />
            
        </>
    )

}

export default Selectors;