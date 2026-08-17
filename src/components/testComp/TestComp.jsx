import { useState } from 'react'



function TestComp({onChange, name="nameSelect", list=["first", "second", "fird"], ...styleProps}){  
    
    return (
        <>
            <select onChange={onChange} className='rounded-lg border bg-(--bg) px-3 py-2 pr-3 text-sm text-(--text-p) shadow-md border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' name="colors" id="colors">
                <option value="" disabled selected>{name}</option>
                {list.map((elem)=>{
                    return <option value={elem}>{elem}</option>
                })}
            </select>
        </>
)}

export default TestComp;
