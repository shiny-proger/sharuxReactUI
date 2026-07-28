import { Link } from 'react-router-dom'

function StateCard({url="/", head, date, text, image}){

    return (
        <div className="stateCard hover:-translate-y-[5px] duration-300">
            <img  src={image} alt="" />
            <div className="my-5 mr-5 ml-5">
                <Link to={url}><h1 className="mb-5 2xl:mb-2">{head}</h1></Link>
                <p className="date mb-5 2xl:mb-2">{date}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default StateCard