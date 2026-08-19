import { useState, useEffect } from 'react'
import { Selector } from 'sharux-lib';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Selectors (){
    
    const [color, setColor] = useState("black");
    const colorSetter = (e)=>{
        setColor(e.target.value);
    }

    const [size, setSize] = useState("1");
    const sizeSetter = (e)=>{
        setSize(e.target.value);
    }

    const [rad, setRad] = useState("1");
    const radSetter = (e)=>{
        setRad(e.target.value);
    }
    const [font, setFont] = useState("none");
    const fontSetter = (e)=>{
        setFont(e.target.value);
    }


const butTag = `<ButtonDef name="Real selector" size='${size}' font='${font}' rad='${rad}' color='${color}' list={["privet", "pakeda", "wassap", "maboy"]} />`;

    return(
        <>
            <div className='grid  place-content-center pt-15 pb-15 mt-20' >
                <h1 className=' text-[clamp(40px,1vw,300px)] leading-12'>Button <span>components</span></h1>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <Selector name="Real selector" size={size} font={font} rad={rad} list={["privet", "pakeda", "wassap", "maboy"]} color={color}/>
            
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
            <div className='mb-10 mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-center '>
                    <div className='select'>
                        <h3 className='font-bold'>Color:</h3>
                        <select onChange={colorSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>colorVar</option>
                            <option value="white">white</option>
                            <option value="black">black</option>
                            <option value="purple">purple</option>
                            <option value="blue">blue</option>
                            <option value="yellow">yellow</option>
                            <option value="green">green</option>
                            <option value="red">red</option>
                            <option value="orange">orange</option>
                            
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
                        <h3 className='font-bold'>Rad:</h3>
                        <select onChange={radSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>rad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='select sm:col-start-2 md:col-start-4'>
                        <h3 className='font-bold'>Font:</h3>
                        <select onChange={fontSetter} className='rounded-lg border bg-(--bg) px-4 py-2.5 pr-10 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                            <option value="" disabled selected>font</option>
                            <option value="none">none</option>
                            <option value="bold">bold</option>
                       </select>
                    </div>
                </div>
            
        </>
    )

}

export default Selectors;