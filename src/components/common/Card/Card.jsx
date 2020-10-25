import React  , {useState} from 'react'
import PropTypes from 'prop-types' ;

export default function Card({children }) {
    const [hover , setHover] = useState(' ');
    return (
        <div 
            className = {`max-w-screen-sm md:max-w-xs lg:max-w-xs rounded overflow-hidden border ${hover}`}
            onMouseEnter = {() => setHover('shadow-md')}    
            onMouseLeave = {() => setHover(' ')}    
        >
            {children}
        </div>
    )
}

Card.propTypes = {
    children : PropTypes.element.isRequired 
} 