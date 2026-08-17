import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';

function MainMenu({ but1 = "Docs", but2 = "Components", but3 = "About me" }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            
            <div className="fixed top-0 left-0 right-0 z-50 bg-(--bg)/80 p-1  xl:p-10 md:p-7 flex justify-between py-5 px-9">
                <Link to="/" onClick={closeMenu}>
                    <span className="pr-5 lg:text-2xl md:text-xl active:text-amber-500">
                        <b>ShinY_SitE</b>
                    </span>
                </Link>
                <div>
                    <FontAwesomeIcon
                        onClick={() => setIsOpen(open => !open)}
                        className="iconMenu cursor-pointer"
                        icon={isOpen ? faXmark : faSquareCaretDown}
                    />
                    <Link to="/docs"><button className="butMen">{but1}</button></Link>
                    <Link to="/components" ><button className="butMen">{but2}</button></Link>
                    <Link to="/shiny"><button className="butMen">{but3}</button></Link>
                </div>
            </div>

             {/* Мобильное меню  */}
            <div
                className={`  
                    fixed inset-0 bg-(--bg-menu) 
                    flex flex-col z-40 items-center justify-center gap-10 font-bold
                    transition-all duration-500 ease-in-out
                    ${isOpen
                        ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <Link to="/docs" onClick={closeMenu}>
                    <button className="text-(--but-min-menu) text-2xl hover:cursor-pointer active:text-amber-500">{but1}</button>
                </Link>
                <Link to="/components" onClick={closeMenu}>
                    <button  className="text-(--but-min-menu) text-2xl hover:cursor-pointer active:text-amber-500">{but2}</button>
                </Link>
                <Link to="/shiny" onClick={closeMenu}>
                        <button onClick={closeMenu} className="text-(--but-min-menu) text-2xl hover:cursor-pointer active:text-amber-500">{but3}</button>
                </Link>
                
            </div>
        </>
    )
}

export default MainMenu;