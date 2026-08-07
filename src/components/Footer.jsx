import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){

    return(
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
            <div>
                <h1 className="text-[clamp(16px,1vw,158)]">Подпишись на мой <span>TG канал</span></h1>
                <p>В телеграм канале рассказываю как создавать полноценные веб-приложения</p>
                <hr className="absolute left-0 right-0 w-screen border-gray-300 mt-3 sm:mt-0 sm:hidden" />
                <p className="text-[clamp(5px,2.5vw,18px)] mt-3">© Сайт разработан ShInY в 2026 году</p>
                
            </div>
            <div className='flex flex-col items-center'>    
                <button className="hover:bg-blue-300 hover:text-blue-900 active:bg-amber-500 active:border-b-blue-900 active:text-blue-900 rounded-4xl p-2 mb-3 font-bold border-2 hover:border-b-blue-900 duration-300 border-b-blue-300 bg-blue-900 text-blue-300">Подписаться</button>
                
                <div className='text-2xl mt-3 mb-5 '>
                        <FontAwesomeIcon className='hover:text-blue-200 mx-1 sm:mx-0 lg:mx-2' icon={faAnglesRight}/>
                        <FontAwesomeIcon className='hover:-translate-y-[5px] duration-300 hover:text-amber-500 mx-1 sm:mx-0 lg:mx-2' icon={faTelegram}/>
                        <FontAwesomeIcon className='hover:-translate-y-[5px] duration-300 hover:text-amber-500 mx-1 sm:mx-0 lg:mx-2' icon={faYoutube}/>
                        <FontAwesomeIcon className='hover:text-blue-200 mx-1 sm:mx-0 lg:mx-2' icon={faAnglesLeft}/>
                </div>
            </div>
            
          
            

        </div>
    )
}

export default Footer

