import { useState } from 'react'

function styleSelector(styleProps){
    let className = "transition-colors duration-100 cursor-pointer shadow-md ";
    switch(styleProps.color){
        case "black":
            className+="bg-slate-800 text-slate-200 border-slate-300 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
            break;
        case "purple":
            className+="bg-indigo-600  text-indigo-100 border-indigo-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            break;
        case "white":
            className+="bg-slate-200 text-slate-800 border-slate-300 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
            break;
        case "yellow":
            className+="bg-yellow-200 text-yellow-800 border-yellow-300 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            break;
        case "orange":
            className+="bg-orange-400 text-orange-100 border-orange-300 focus:border-orange-300 focus:outline-none focus:ring-1 focus:ring-orange-400"
            break;
        case "red":
            className+="bg-red-400 text-red-100 border-red-300 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-400"
            break;
        case "green":
            className+="bg-emerald-400 text-emerald-50 border-emerald-300 focus:border-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            break;
        case "blue":
            className+="bg-blue-400 text-blue-50 border-blue-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
            break;
        }   
    switch(styleProps.size){
        case "1":
            className+=" border px-3 py-2 pr-3 text-sm"
            break;
        case "2":
            className+=" border px-4 py-3 pr-5 text-md"
            break;
        case "3":
            className+=" border px-5 py-5 pr-7 text-2xl"
            break;
        }
    switch(styleProps.rad){
        case "1":
            className+=" rounded-lg "
            break;
        case "2":
            className+=" rounded-xl "
            break;
        case "3":
            className+=" rounded-2xl"
            break;
        }
    switch(styleProps.font){
        case "bold":
            className+=" font-bold "
            break;
        }
    
    return className;
}

function TestComp({onChange, name="nameSelect", list=["first", "second", "fird"], ...styleProps}){  
    const className = styleSelector(styleProps);
    

    return (
        <>
            <select onChange={onChange} className={className} name="colors" id="colors">
                <option className='bg-emerald-500' value="" disabled selected>{name}</option>
                {list.map((elem)=>{
                    return <option value={elem}>{elem}</option>
                })}
            </select>
        </>
)}

export default TestComp;
