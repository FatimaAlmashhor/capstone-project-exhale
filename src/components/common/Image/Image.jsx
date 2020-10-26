import React from 'react' ;
import PropTypes from 'prop-types' ;

export default function Image({children , width}) {
    return (
        <div className = {`w-${width} h-auto `}>
            {children}
        </div>
    )
}

Image.propTypes = {
    children : PropTypes.element.isRequired ,
    width : PropTypes.string.isRequired
}