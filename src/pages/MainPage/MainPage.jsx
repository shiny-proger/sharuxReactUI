import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';

import youtube from '../../assets/Youtube.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/Twitter.png'
import facebook from '../../assets/facebook.png'
import proger from '../../assets/WesternMan.png'
import lamp from '../../assets/lamp.png'
import down from '../../assets/down.png'
import champ from '../../assets/champ.png'
import strel from '../../assets/Frame.png'
import state1 from '../../assets/buttons.png'
import state2 from '../../assets/state2.png'
import state3 from '../../assets/state3.png'


import Card from '../../components/Card.jsx'
import StateCard from '../../components/StatesCard.jsx'

import './MainPage.css'


function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>    
        <div className="main flex flex-col items-center sm:justify-between mb-15 mt-30 sm:flex  sm:flex-row-reverse">
          
          <img className='w-30  sm:w-40 md:w-70' src={proger} alt="logo" />

          <div className="info flex flex-col justify-items-start">  
            <h1 className='mb-5'>Hi everyone, I'm <span>ShInY</span>👋</h1>
            
            <p className='mb-5 text-[clamp(12px,2.5vw, 52px)]  )'>This site is my portfolio and a showcase of my projects!
            My stack: <span>JavaScript</span>, <span>react.js</span>, <span>tailwindcss</span> — and that's about it for now...<br></br>
            These projects were originally built purely for practice, 
            but I'll probably keep developing some of them further someday :)</p>
            <div className="images flex ">
              <img className='w-10 h-10 hover:-translate-y-[5px] duration-300' src={twitter} alt="" />
              <img className='w-10 h-10 ml-5 hover:-translate-y-[5px] duration-300' src={facebook} alt="" />
              <img className='w-10 h-10 ml-5 hover:-translate-y-[5px] duration-300' src={linkedin} alt="" />
              <img className='w-10 h-10 ml-5 hover:-translate-y-[5px] duration-300' src={youtube} alt="" />
            </div>
          </div> 
        </div>

        <h1>Recent <span>Projects</span></h1>
        <div className='lg:mr-30 lg:ml-30'>
          <Card image={lamp} head="Calculator" text="My first pet project in JavaScript, built to practice JS fundamentals. The focus was purely on functionality, so the calculator isn't optimized for mobile!" minText="JavaScript" className="text-amber-600 bg-amber-300"/>
          <Card image={down} head="My Blog" text="Yep, this is exactly that — this very site is my first pet project built with React.js. I'm hoping to eventually connect it to Node.js and set up automated article writing!" minText="Node.js"  className="text-emerald-800 bg-emerald-400"/>
          <Card image={champ} head="React lib" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." minText="react.js" className="text-cyan-800 bg-cyan-400" />
        </div>

        <div className='flex justify-between'>
          <h1>Latest <span>Posts</span></h1>
          <div className="flex ">
              <p>View all posts </p> 
              <FontAwesomeIcon className='text-2xl text-(--text-p)' icon={faCircleRight} />
          </div>
        </div>
        <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-10 mt-15 mb-15'>
          <StateCard url="/components/buttons" head="Buttons" date="April 24, 2022 - 5 min read" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state1}  />
          <StateCard head="Checkboxes" date="April 03, 2022 - 4 min read" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state2}  />
          <StateCard head="Sliders" date="March 12, 2022 - 6 min read" text="Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." image={state3}  />
        </div>
        
  
    </>
  )
}

export default MainPage
