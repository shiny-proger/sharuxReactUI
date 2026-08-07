import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { propsButtons } from '../../utils/utils';
import { icons } from '../../utils/utils';

function IconButton({text="Click", icon="faBookmark", ...styleProps}){  
    let className=propsButtons(styleProps);
    return (
        <button className={className} >{text}<FontAwesomeIcon className='pl-3' icon={icons(icon)}></FontAwesomeIcon></button>
    )
}

export default IconButton;