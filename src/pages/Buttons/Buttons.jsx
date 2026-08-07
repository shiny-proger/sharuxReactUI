import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import ButtonDef from '../../components/buttons/ButtonDef.jsx';
import IconButton from '../../components/buttons/IconButton.jsx';



function Buttons (){
    const [count, setCount] = useState(0)

    
    return(
        <>
        



            <div className='grid  place-content-center pt-15 pb-15' >
                <h1 className=' text-[clamp(40px,1vw,300px)] leading-12'>Компоненты <span>кнопок</span></h1>
            </div>
            <h3 className='flex justify-center mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Как использовать кнопки? </h3>
            <div className='grid  grid-cols-1 items-center'>
                <div className='flex justify-between items-center mb-5'>
                    <input id='inputBut' placeholder='click the button' type='text' className="focus:border-blue-600 h-10 w-full mr-5 font-bold border-2 rounded-xl border-blue-400"  />
                    <ButtonDef text="Вставить" rad="halv" size="1" colorVar="blue" border="small" />
                </div>

                <h3 className='flex justify-center mt-10 mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Компонент &nbsp;<span> ButtonDef</span></h3>
                
                <div className='DefBut'>
                    <div className='flex flex-row gap-5'>
                        <ButtonDef text="Click!"/>
                        <ButtonDef text="Do Not Click!"/>
                        <ButtonDef text="Hello World!"/> 
                    </div>
                                       
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="black" border="none"/>
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="black" border="small"/>
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="black" border="big"/>
                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="white" border="none" />
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="white" border="small" />
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="white" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="purple" border="none" />
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="purple" border="small" />
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="purple" border="big" />

                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="blue" border="none"/>
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="blue" border="small"/>
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="blue" border="big"/>
                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="orange" border="none"/>
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="orange" border="small"/>
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="orange" border="big"/>
                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="green" border="none"/>
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="green" border="small"/>
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="green" border="big"/>
                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text="click the button" rad="none" size="3" colorVar="red" border="none"/>
                        <ButtonDef text="click the button" rad="halv" size="2" colorVar="red" border="small"/>
                        <ButtonDef text="click the button" rad="full" size="1" colorVar="red" border="big"/>
                    </div>
                </div>
                <h5 className='flex justify-center mb-5 text-[clamp(20px,1vw,150px)] text-center '>Таблица показывающая все пропсы компонента ButtonDef и варианты их использования:</h5>
                <table className='w-full leading-snug border-1 border-(--accent-span) mb-10 text-[clamp(15px,1vw,100px)]'>
                    <thead>
                        <tr>
                            <th >Название пропса</th>
                            <th >Значения</th>
                            <th>Дефолтное значение</th>
                        </tr>
                        </thead>
                    <tbody className='text-center border-1 border-(--accent-span)' >
                        <tr className='border-1 border-(--accent-span)'>
                            <td ><b>text=""</b></td>
                            <td >принимает любое текстовое значение</td>
                            <td>Click</td>
                        </tr>
                        <tr >
                            <td><b>size=""</b> <br></br>(размер кнопки)</td>
                            <td>1 | 2 | 3</td>
                            <td>1</td>
                        </tr>
                        <tr >
                            <td ><b>rad=""</b> <br></br>(закругление углов)</td>
                            <td >none | halv | full</td>
                            <td >halv</td>
                        </tr>
                        <tr >
                            <td ><b>border=""</b> <br></br>(толщина контура)</td>
                            <td >none | small | big</td>
                            <td>none</td>
                        </tr>
                        <tr >
                            <td ><b>colorVar=""</b> <br></br>(варианты расцветки)</td>
                            <td >withe | black | purple</td>
                            <td>black</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='flex justify-center mt-10 mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Компонент &nbsp;<span> IconButton</span></h3>
                <div className='IconBut'>
                    
                    <div className='InnerBut'>
                        <IconButton icon="save" text="click the button" rad="none" size="3" colorVar="black" border="none" />
                        <IconButton icon="like" text="click the button" rad="halv" size="2" colorVar="black" border="small" />
                        <IconButton icon="arrow" text="click the button" rad="full" size="1" colorVar="black" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="arrow" text="click the button" rad="none" size="3" colorVar="white" border="none" />
                        <IconButton icon="save" text="click the button" rad="halv" size="2" colorVar="white" border="small" />
                        <IconButton icon="like" text="click the button" rad="full" size="1" colorVar="white" border="big" />
                    </div>
                
                    <div className='InnerBut'>
                        <IconButton icon="like" text="click the button" rad="none" size="3" colorVar="purple" border="none" />
                        <IconButton icon="arrow" text="click the button" rad="halv" size="2" colorVar="purple" border="small" />
                        <IconButton icon="save" text="click the button" rad="full" size="1" colorVar="purple" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="save" text="click the button" rad="none" size="3" colorVar="blue" border="none" />
                        <IconButton icon="like" text="click the button" rad="halv" size="2" colorVar="blue" border="small" />
                        <IconButton icon="arrow" text="click the button" rad="full" size="1" colorVar="blue" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="save" text="click the button" rad="none" size="3" colorVar="orange" border="none" />
                        <IconButton icon="like" text="click the button" rad="halv" size="2" colorVar="orange" border="small" />
                        <IconButton icon="arrow" text="click the button" rad="full" size="1" colorVar="orange" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="save" text="click the button" rad="none" size="3" colorVar="green" border="none" />
                        <IconButton icon="like" text="click the button" rad="halv" size="2" colorVar="green" border="small" />
                        <IconButton icon="arrow" text="click the button" rad="full" size="1" colorVar="green" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="save" text="click the button" rad="none" size="3" colorVar="red" border="none" />
                        <IconButton icon="like" text="click the button" rad="halv" size="2" colorVar="red" border="small" />
                        <IconButton icon="arrow" text="click the button" rad="full" size="1" colorVar="red" border="big" />
                    </div>
                </div>
                <div className='text-red-700 '>
                

                </div>
            </div>
        </>
    )

}

export default Buttons;

