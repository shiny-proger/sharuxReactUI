import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faSquareCaretDown, faSquareCaretRight } from '@fortawesome/free-regular-svg-icons';
import { ButtonDef } from 'sharux-lib';
import { IconButton } from "sharux-lib";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TestComp from '../../../components/testComp/TestComp';


function Buttons (){

    // при нажатии вписывает текст во все кнопки
    const [butTextState, setButTextState]=useState("");
    function renameText(event){
        setButTextState(event.target.value)
    }

    // запоминает текст в инпуте
    const [butText, setButText]=useState("Click the button");
    function textBut(){
        setButText(butTextState)
    }

    // конструктор кнопки

    const [color, setColor] = useState("black");
    const colorSetter = (e)=>{
        setColor(e.target.value);

    }

    const [size, setSize] = useState("1");
    const sizeSetter = (e)=>{
        setSize(e.target.value);

    }

    const [border, setBorder] = useState("none");
    const borderSetter = (e)=>{
        setBorder(e.target.value);

    }

    const [rad, setRad] = useState("none");
    const radSetter = (e)=>{
        setRad(e.target.value);

    }

    const [icon, setIcon] = useState("arrow");
    const iconSetter = (e)=>{
        setIcon(e.target.value);

    }
    
    const butTag = `<ButtonDef text="${butText}" colorVar="${color}" size="${size}" border="${border}" rad="${rad}"/>
<IconButton text="${butText}" colorVar="${color}" size="${size}" border="${border}" rad="${rad}" icon="${icon}"/> `;

    

    return(
        <>
            
            <div className='grid  place-content-center pt-15 pb-15 mt-20' >
                <h1 className=' text-[clamp(40px,1vw,300px)] leading-12'>Button <span>components</span></h1>
            </div>
       

            <h3 className='flex justify-center mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>How to use buttons? </h3>
            


            

                <div className='flex justify-between items-center mb-5'>
                    <input value={butTextState} onChange={renameText} placeholder='Test button text' type='text' className="text-(--text-p) placeholder-(--text-p)/80  focus:ring-2 outline-none focus:ring-blue-800 h-10 w-full mr-5 font-bold border-2 rounded-2xl border-blue-500"  />
                    <IconButton onClick={textBut} icon="arrow" text="Insert" rad="halv" size="1" colorVar="darkBlue" border="big" />
                </div>

                

                <h3 className='flex justify-center mt-10 mb-10 text-[clamp(30px,1vw,200px)] font-bold text-center'>Components &nbsp;<span> ButtonDef</span></h3>
                
                <div className='grid col-end-2 gap-5 justify-around my-5'>
                    <ButtonDef text={butText} colorVar={color} size={size} border={border} rad={rad}/>
                    <IconButton text={butText} colorVar={color} size={size} border={border} rad={rad} icon={icon}/> 
                </div>

                <div className="max-w-4xl mx-auto my-6 rounded-lg overflow-hidden shadow-xl border border-gray-700">
                    {/* Шапка блока кода */}
                    <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between items-center border-b border-gray-700">
                        <span>JSX</span>
                        <span>component</span>
                    </div>
        
                    {/* Контейнер с ограничением высоты и вертикальной прокруткой Tailwind */}
                    <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#282a36]">
                        <SyntaxHighlighter 
                        language="javascript" 
                        style={dracula}
                        showLineNumbers={true}
                        customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                        >
                        {butTag}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center'>
                    <div className='select'>
                        <h3 className='font-bold'>Color:</h3>
                        <select onChange={colorSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>colorVar</option>
                            <option value="white">white</option>
                            <option value="black">black</option>
                            <option value="purple">purple</option>
                            <option value="darkBlue">darkBlue</option>
                            <option value="darkOrange">darkOrange</option>
                            <option value="darkGreen">darkGreen</option>
                            <option value="darkRed">red</option>
                            <option value="blue">blue</option>
                            <option value="orange">orange</option>
                            <option value="green">green</option>
                            <option value="red">red</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h3 className='font-bold'>Size:</h3>
                        <select onChange={sizeSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>size</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h3 className='font-bold'>Border:</h3>
                        <select onChange={borderSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>border</option>
                            <option value="none">none</option>
                            <option value="small">small</option>
                            <option value="big">big</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h3 className='font-bold'>Radius:</h3>
                        <select onChange={radSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>rad</option>
                            <option value="none">none</option>
                            <option value="halv">halv</option>
                            <option value="full">full</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h3 className='font-bold'>Icon:</h3>
                        <select onChange={iconSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>icon</option>
                            <option value="like">like</option>
                            <option value="save">save</option>
                            <option value="arrow">arrow</option>
                        </select>
                    </div>
                </div>
                
                 
        
                <h5 className='flex justify-center mb-5 text-[clamp(20px,1vw,150px)] text-center text-(--text-p)'>Table showing all props of the ButtonDef component and examples of how to use them:</h5>
                <table className='w-full leading-snug border-1 border-(--accent-span) mb-10 text-[clamp(15px,1vw,100px)]'>
                    <thead>
                        <tr>
                            <th >Prop Name</th>
                            <th >Values</th>
                            <th>Default Value</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th colSpan={3} >Component <span><code>{"<ButtonDef/>"}</code></span></th>
                        </tr>
                    </thead>
                    <tbody className='text-center border-1 border-(--accent-span)' >
                        <tr className='border-1 border-(--accent-span)'>
                            <td ><b>text=""</b></td>
                            <td >accepts any string value</td>
                            <td>Click</td>
                        </tr>
                        <tr >
                            <td><b>size=""</b> <br></br>(button size)</td>
                            <td>1 | 2 | 3</td>
                            <td>1</td>
                        </tr>
                        <tr >
                            <td ><b>rad=""</b> <br></br>(corner rounding)</td>
                            <td >none | halv | full</td>
                            <td >halv</td>
                        </tr>
                        <tr >
                            <td ><b>border=""</b> <br></br>(outline thickness)</td>
                            <td >none | small | big</td>
                            <td>none</td>
                        </tr>
                        <tr >
                            <td ><b>colorVar=""</b> <br></br>(color variants)</td>
                            <td >withe | black | purple</td>
                            <td>black</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={3} >Components <span><code>{"<IconButton/>"}</code></span></th>
                        </tr>
                    </thead>
                    <tbody className='text-center border-1 border-(--accent-span)' >
                        <tr className='border-1 border-(--accent-span)'>
                            <td ><b>text=""</b></td>
                            <td >accepts any string value</td>
                            <td>Click</td>
                        </tr>
                        <tr >
                            <td><b>size=""</b> <br></br>(button size)</td>
                            <td>1 | 2 | 3</td>
                            <td>1</td>
                        </tr>
                        <tr >
                            <td ><b>rad=""</b> <br></br>(corner rounding)</td>
                            <td >none | halv | full</td>
                            <td >halv</td>
                        </tr>
                        <tr >
                            <td ><b>border=""</b> <br></br>(outline thickness)</td>
                            <td >none | small | big</td>
                            <td>none</td>
                        </tr>
                        <tr >
                            <td ><b>colorVar=""</b> <br></br>(color variants)</td>
                            <td >withe | black | purple</td>
                            <td>black</td>
                        </tr>
                        <tr >
                            <td ><b>icon=""</b> <br></br>(icons)</td>
                            <td >like | save | arrow</td>
                            <td>arrow</td>
                        </tr>
                    </tbody>
                </table>

                
           
            
        </>
    )

}

export default Buttons;

