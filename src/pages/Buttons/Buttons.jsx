import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faSquareCaretDown, faSquareCaretRight } from '@fortawesome/free-regular-svg-icons';
import ButtonDef from '../../components/buttons/ButtonDef.jsx';
import IconButton from '../../components/buttons/IconButton.jsx';



function Buttons (){


    const [butTextState, setButTextState]=useState("");
    function renameText(event){
        setButTextState(event.target.value)
    }

    const [butText, setButText]=useState("Click the button");
    function textBut(){
        setButText(butTextState)
    }


    // открытие списков с кнопкой
    const [darkOpen, setDarkOpen]= useState(true);
    function openDarkBut(){
        setDarkOpen(!darkOpen);
    }

    const [lightOpen, setLightOpen]= useState(true);
    function openLightBut(){
        setLightOpen(!lightOpen);
    }

    const [darkIcon, setDarkIconOpen]= useState(true);
    function darkIconOpen(){
        setDarkIconOpen(!darkIcon);
    }

    const [lightIcon, setLightIconOpen]= useState(true);
    function lightIconOpen(){
        setLightIconOpen(!lightIcon);
    }

    return(
        <>

            <div className='grid  place-content-center pt-15 pb-15' >
                <h1 className=' text-[clamp(40px,1vw,300px)] leading-12'>Компоненты <span>кнопок</span></h1>
            </div>

            <h3 className='flex justify-center mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Как использовать кнопки? </h3>
            
            <div className='grid  grid-cols-1 items-center'>

                <div className='flex justify-between items-center mb-5'>
                    <input value={butTextState} onChange={renameText} placeholder='Текст кнопки для теста' type='text' className="focus:border-blue-600 h-10 w-full mr-5 font-bold border-2 rounded-xl border-blue-400"  />
                    <ButtonDef onClick={textBut} text="Вставить" rad="halv" size="1" colorVar="darkBlue" border="small" />
                </div>

                <h3 className='flex justify-center mt-10 mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Компонент &nbsp;<span> ButtonDef</span></h3>
                
                <div className='DefBut'>
                    <div className='flex flex-row gap-5'>
                        <ButtonDef text="Click!"/>
                        <ButtonDef text="Do Not Click!"/>
                        <ButtonDef text="Hello World!"/> 
                    </div>
                    <h1 className='mt-10 mb-3'><span>Базовые</span> цвета:</h1>            
                    <div className='InnerBut'>
                        <ButtonDef text={butText} rad="none" size="3" colorVar="black" border="none"/>
                        <ButtonDef text={butText} rad="halv" size="2" colorVar="black" border="small"/>
                        <ButtonDef text={butText} rad="full" size="1" colorVar="black" border="big"/>
                    </div>
                    <div className='InnerBut'>
                        <ButtonDef text={butText} rad="none" size="3" colorVar="white" border="none" />
                        <ButtonDef text={butText} rad="halv" size="2" colorVar="white" border="small" />
                        <ButtonDef text={butText} rad="full" size="1" colorVar="white" border="big" />
                    </div> 
                    <div className='InnerBut'>
                        <ButtonDef text={butText} rad="none" size="3" colorVar="purple" border="none" />
                        <ButtonDef text={butText} rad="halv" size="2" colorVar="purple" border="small" />
                        <ButtonDef text={butText} rad="full" size="1" colorVar="purple" border="big" />
                    </div>
                    
                    <h1 className='h1But' onClick={openDarkBut}><span>Темные</span> расцветки <FontAwesomeIcon icon={darkOpen ? faSquareCaretRight : faSquareCaretDown} /></h1> 
                    <div className={`darkBut ease-in-out transition-all overflow-hidden duration-500 ${darkOpen ? "h-0" : "sm:h-78 h-180"}`}>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="darkBlue" border="none"/>
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="darkBlue" border="small"/>
                            <ButtonDef text={butText} rad="full" size="1" colorVar="darkBlue" border="big"/>
                        </div>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="darkOrange" border="none" />
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="darkOrange" border="small" />
                            <ButtonDef text={butText} rad="full" size="1" colorVar="darkOrange" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="darkGreen" border="none" />
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="darkGreen" border="small" />
                            <ButtonDef text={butText} rad="full" size="1" colorVar="darkGreen" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="darkRed" border="none" />
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="darkRed" border="small" />
                            <ButtonDef text={butText} rad="full" size="1" colorVar="darkRed" border="big" />
                        </div>
                    </div>

                    <h1 className='h1But' onClick={openLightBut}><span>Светлые</span> расцветки <FontAwesomeIcon  icon={lightOpen ? faSquareCaretRight : faSquareCaretDown} /></h1> 
                    <div className={`lightBut ease-in-out transition-all overflow-hidden duration-500 ${lightOpen ? "h-0" : "sm:h-78 h-180"}`}>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="blue" border="none"/>
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="blue" border="small"/>
                            <ButtonDef text={butText} rad="full" size="1" colorVar="blue" border="big"/>
                        </div>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="orange" border="none"/>
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="orange" border="small"/>
                            <ButtonDef text={butText} rad="full" size="1" colorVar="orange" border="big"/>
                        </div>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="green" border="none"/>
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="green" border="small"/>
                            <ButtonDef text={butText} rad="full" size="1" colorVar="green" border="big"/>
                        </div>
                        <div className='InnerBut'>
                            <ButtonDef text={butText} rad="none" size="3" colorVar="red" border="none"/>
                            <ButtonDef text={butText} rad="halv" size="2" colorVar="red" border="small"/>
                            <ButtonDef text={butText} rad="full" size="1" colorVar="red" border="big"/>
                        </div>
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
                    <thead>
                        <tr>
                            <th colSpan={3} >Компонент <span><code>{"<ButtonDef/>"}</code></span></th>
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
                    <thead>
                        <tr>
                            <th colSpan={3} >Компонент <span><code>{"<IconButton/>"}</code></span></th>
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
                        <tr >
                            <td ><b>icon=""</b> <br></br>(иконки)</td>
                            <td >like | save | arrow</td>
                            <td>arrow</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='flex justify-center mt-10 mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Компонент &nbsp;<span> IconButton</span></h3>
                
                <div className='IconBut'> 
                    <div className='InnerBut'>
                        <IconButton icon="save" text={butText} rad="none" size="3" colorVar="black" border="none" />
                        <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="black" border="small" />
                        <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="black" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="arrow" text={butText}  rad="none" size="3" colorVar="white" border="none" />
                        <IconButton icon="save" text={butText} rad="halv" size="2" colorVar="white" border="small" />
                        <IconButton icon="like" text={butText} rad="full" size="1" colorVar="white" border="big" />
                    </div>
                    <div className='InnerBut'>
                        <IconButton icon="like" text={butText} rad="none" size="3" colorVar="purple" border="none" />
                        <IconButton icon="arrow" text={butText}  rad="halv" size="2" colorVar="purple" border="small" />
                        <IconButton icon="save" text={butText} rad="full" size="1" colorVar="purple" border="big" />
                    </div>

                    <h1 className='h1But' onClick={darkIconOpen}><span>Темные</span> с иконкой<FontAwesomeIcon  icon={darkIcon ? faSquareCaretRight : faSquareCaretDown} /></h1> 
                    <div className={`darkBut ease-in-out transition-all overflow-hidden duration-500 ${darkIcon ? "h-0" : "sm:h-78 h-180"}`}>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="darkBlue" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="darkBlue" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="darkBlue" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="darkOrange" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="darkOrange" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="darkOrange" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="darkGreen" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="darkGreen" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="darkGreen" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="darkRed" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="darkRed" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="darkRed" border="big" />
                        </div>
                    </div>

                    <h1 className='h1But' onClick={lightIconOpen}><span>Светлые</span> с иконкой <FontAwesomeIcon  icon={lightIcon ? faSquareCaretRight : faSquareCaretDown} /></h1> 
                    <div className={`lightBut ease-in-out transition-all overflow-hidden duration-500 ${lightIcon ? "h-0" : "sm:h-78 h-180"}`}>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="blue" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="blue" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="blue" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="orange" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="orange" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="orange" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="green" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="green" border="small" />
                            <IconButton icon="arrow" text={butText} rad="full" size="1" colorVar="green" border="big" />
                        </div>
                        <div className='InnerBut'>
                            <IconButton icon="save" text={butText} rad="none" size="3" colorVar="red" border="none" />
                            <IconButton icon="like" text={butText} rad="halv" size="2" colorVar="red" border="small" />
                            <IconButton icon="arrow" text={butText}  rad="full" size="1" colorVar="red" border="big" />
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </>
    )

}

export default Buttons;

