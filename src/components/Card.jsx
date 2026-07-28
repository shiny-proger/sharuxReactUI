import lamp from '../assets/WesternMan.png'
import './components.css'

function CardProj({image, head, text, minText, className="text-emerald-800 bg-emerald-400"}){
    
    return (
        <div className="cardProj">
            <img  src={image} alt="" />
            <div className='pt-10'>
                <div className='head flex justify-center mb-5'>
                    <h1 className='text-[clamp(28px,1vw,158px)] mr-5'>{head}</h1>
                    <p className={className}>{minText}</p>
                    
                </div>
                <p className='text-[clamp(12px,2.5vw, 52px)] mb-5 mr-10 ml-10'>{text}</p>
            </div>
        </div>
    )
}

export default CardProj

