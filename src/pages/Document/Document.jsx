import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { IconButton } from "sharux-lib";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Выберите любую тему оформления из доступных в библиотеке
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';



const npmInstall = `npm install sharux-lib`;
const npmInstallLegacy = `npm install sharux-lib --legacy-peer-deps`;
const npmLibsForSharux = `npm install react-router-dom @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons`;

const npmImportCss = `import 'sharux-lib/style.css';`;
const largeCodeString = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'sharux-lib/style.css'; // ← library component styles
import './index.css';          // your own styles — import after
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

function Document (){
    const [count, setCount] = useState(0)
    return(
        <>
            <div className='grid place-content-center pt-15 pb-15 mt-20' >
                <h1 className='text-[clamp(40px,1vw,300px)] leading-12'><span>sharux</span> documentation</h1>
            </div>
            <h3 className='text-[clamp(20px,1vw,150px)] font-bold leading-7 mb-10 text-center'>Step-by-Step Guide to Installing the UI Component Library: <span>sharux-lib</span></h3>
            
            <h2 className='text-[clamp(20px,1vw,150px)] font-bold leading-7 mb-2 text-start '>1. Requirements </h2>
            <h3>Before installing, make sure your project already has:</h3>
            <table className='w-full leading-snug border-1 border-(--accent-span) mb-10 text-[clamp(15px,1vw,100px)]'>
                <thead>
                    <tr>
                        <th >Package</th>
                        <th >Supported versions</th>
                    </tr>
                </thead>
                <tbody className='text-center border-1 border-(--accent-span)' >
                    <tr className='border-1 border-(--accent-span)'>
                        <td ><b>react</b></td>
                        <td >18.x or 19.x</td>
                    </tr>
                    <tr >
                        <td><b>react-dom</b></td>
                        <td>18.x or 19.x</td>
                    </tr>
                    <tr >
                        <td ><b>react-router-dom</b> </td>
                        <td >6.x or 7.x</td>
                    </tr>
                    <tr >
                        <td ><b>@fortawesome/react-fontawesome</b> </td>
                        <td >any version compatible with the icon packages below</td>
                    </tr>
                    <tr >
                        <td ><b>@fortawesome/free-regular-svg-icons</b> </td>
                        <td >required for button icons (save/like/arrow)</td>
                    </tr>
                </tbody>
            </table>
            <h3>If any of these are missing, install them before installing the library:</h3>
            
            
            <div className="max-w-4xl mx-auto my-6 rounded-lg overflow-hidden shadow-xl border border-gray-700">
                {/* Шапка блока кода */}
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between items-center border-b border-gray-700">
                    <span>cmd/bash</span>
                    <span>npm Command</span>
                </div>

                {/* Контейнер с ограничением высоты и вертикальной прокруткой Tailwind */}
                <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#282a36]">
                    <SyntaxHighlighter 
                    language="javascript" 
                    style={dracula}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                    >
                    {npmLibsForSharux}
                    </SyntaxHighlighter>
                </div>
            </div>  
            <h3 className='my-5'>The styling is written in Tailwind CSS, but you don't need Tailwind set up in your own project for this — all styles are already bundled into the library's prebuilt CSS file (see step 3).</h3>
        
            <h2>2. Installation</h2>
            
            <div className="max-w-4xl mx-auto my-6 rounded-lg overflow-hidden shadow-xl border border-gray-700">
                {/* Шапка блока кода */}
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between items-center border-b border-gray-700">
                    <span>cmd/bash</span>
                    <span>npm Command</span>
                </div>

                {/* Контейнер с ограничением высоты и вертикальной прокруткой Tailwind */}
                <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#282a36]">
                    <SyntaxHighlighter 
                    language="javascript" 
                    style={dracula}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                    >
                    {npmInstall}
                    </SyntaxHighlighter>
                </div>
            </div>  
            <h3 className='my-5'>If you see an error like `ERESOLVE unable to resolve dependency tree`, it means the react/react-dom/react-router-dom versions in your project fall outside the table in section 1. Temporary workaround:</h3>

            
            <div className="max-w-4xl mx-auto my-6 rounded-lg overflow-hidden shadow-xl border border-gray-700">
                {/* Шапка блока кода */}
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between items-center border-b border-gray-700">
                    <span>cmd/bash</span>
                    <span>npm Command</span>
                </div>

                {/* Контейнер с ограничением высоты и вертикальной прокруткой Tailwind */}
                <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#282a36]">
                    <SyntaxHighlighter 
                    language="javascript" 
                    style={dracula}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                    >
                    {npmInstallLegacy}
                    </SyntaxHighlighter>
                </div>
            </div>   

            <h3 className='my-5'>but it's best to check against the table above first.</h3>

            <h2 className='my-5'>3. Importing styles (required step)</h2>
            <h3 className='my-5'>Without this step, the components will work but will render with no styling at all (as plain, unstyled HTML).</h3>
            <h3 className='my-5'>Open your project's main entry file (usually `src/main.jsx` or `src/index.jsx`) and add this line once, at the very top:</h3>
           
            <div className="max-w-4xl mx-auto my-6 rounded-lg overflow-hidden shadow-xl border border-gray-700">
                {/* Шапка блока кода */}
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between items-center border-b border-gray-700">
                    <span>jsx</span>
                    <span>import styles</span>
                </div>

                {/* Контейнер с ограничением высоты и вертикальной прокруткой Tailwind */}
                <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#282a36]">
                    <SyntaxHighlighter 
                    language="javascript" 
                    style={dracula}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                    >
                    {npmImportCss}
                    </SyntaxHighlighter>
                </div>
            </div>           
            <h3 className='my-5'>Example of a complete `main.jsx` file:</h3>
            

            <div className="max-w-4xl mx-auto my-6 rounded-lg overflow-hidden shadow-xl border border-gray-700">
                {/* Шапка блока кода */}
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 flex justify-between items-center border-b border-gray-700">
                    <span>JSX</span>
                    <span>main.jsx code</span>
                </div>

                {/* Контейнер с ограничением высоты и вертикальной прокруткой Tailwind */}
                <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#282a36]">
                    <SyntaxHighlighter 
                    language="javascript" 
                    style={dracula}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                    >
                    {largeCodeString}
                    </SyntaxHighlighter>
                </div>
            </div>

        </>
    )
}

export default Document;
