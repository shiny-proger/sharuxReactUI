import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';

function MainMenu({ but1 = "Дока", but2 = "Компоненты", but3 = "Другое" }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <div className="p-1 pt-5 xl:p-10 md:p-7 flex justify-between relative z-50">
                <Link to="/" onClick={closeMenu}>
                    <span className="pr-5 text-blue-300 lg:text-2xl md:text-xl active:text-amber-300">
                        <b>ShinY_SitE</b>
                    </span>
                </Link>
                <div>
                    <FontAwesomeIcon
                        onClick={() => setIsOpen(prev => !prev)}
                        className="iconMenu cursor-pointer"
                        icon={isOpen ? faXmark : faSquareCaretDown}
                    />
                    <Link to="/docs"><button className="butMen">{but1}</button></Link>
                    <Link to="/components" ><button className="butMen">{but2}</button></Link>
                    <button className="butMen">{but3}</button>
                </div>
            </div>

             {/* Мобильное меню  */}
            <div
                className={`
                    fixed inset-0 bg-blue-900/95
                    flex flex-col z-40 items-center justify-center gap-10 font-bold
                    transition-all duration-500 ease-in-out
                    ${isOpen
                        ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <Link to="/docs" onClick={closeMenu}>
                    <button className="text-white text-2xl hover:cursor-pointer active:text-amber-300">{but1}</button>
                </Link>
                <Link to="/components" onClick={closeMenu}>
                    <button  className="text-white text-2xl hover:cursor-pointer active:text-amber-300">{but2}</button>
                </Link>
                <button onClick={closeMenu} className="text-white text-2xl hover:cursor-pointer active:text-amber-300">{but3}</button>
            </div>
        </>
    )
}

export default MainMenu;