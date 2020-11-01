import React from 'react' ;
import PropTypes from 'prop-types'

export default function SelfAssessmentPanel({task , onClick }) {
   
    const handleClick = (e) => {
        onClick(e);
    }
    const handleHover = (e) => e.target.className += ' hover:bg-green-400' ;

    const style = {
        buttonStyle :  'bg-transparent border-4 border-gray-600 rounded-full focus:outline-none' ,
        trans : 'transition duration-500' ,
        hover: '',
    }

    return (
        <div >
            <div className='flex-auto py-10 '>
                <h1 className={` text-4xl  text-center font-sans ${style.trans} ${style.hover} `} >
                    {task}
                </h1>
            </div>
            <div className='flex-auto '>
            <div className= {` flex mt-8 mx-auto justify-center ${style.trans}`}>
                <div className= ' flex flex-col justify-center self-center flex-1'>
                    <button 
                        type ='button'
                        data-rate = '20'
                        className = {` p-6  mt-6 mx-auto md:p-10 ${style.buttonStyle} ${style.trans} ${style.hover}` }
                        onClick = {handleClick}
                        onMouseEnter ={handleHover}
                    >
                    </button>
                    <p className ='mx-auto text-gray-500  mt-3'>NEVER</p>
                </div>
                <div className= 'flex justify-center self-center flex-1 '>
                    <button
                     type ='button'
                    data-rate = '40' 
                    className = {` p-4  md:p-8 ${style.buttonStyle } ${style.trans} ${style.hover}`}
                    onClick = {handleClick}
                    onMouseEnter ={handleHover}
                    >
                    </button>
                </div>
                <div className= ' flex justify-center self-center flex-1 '>
                    <button 
                         type ='button'
                        data-rate = '60' 
                        className = {` p-3  md:p-6 ${style.buttonStyle } ${style.trans}${style.hover}`}
                        onClick = {handleClick}
                        onMouseEnter ={handleHover}
                    >
                    </button>
                </div>
                <div className= 'flex justify-center self-center flex-1 '>
                    <button 
                         type ='button'
                        data-rate = '80' 
                        className = {` p-4  md:p-8 ${style.buttonStyle } ${style.trans} ${style.hover}`}
                        onClick = {handleClick}
                        onMouseEnter ={handleHover}
                        >
                    </button>
                </div>
                <div className= ' flex flex-col justify-center self-center  flex-1'>
                    <button 
                        type ='button'
                        data-rate = '100' 
                        className = {`p-6  mt-6 mx-auto md:p-10 ${style.buttonStyle } ${style.trans} ${style.hover} `}
                        onClick = {handleClick}
                        onMouseEnter ={handleHover}
                    >
                    </button>
                    <p className ='mx-auto mt-3 text-gray-500'>ALWAYS</p>
                </div>
            </div>
            </div>
        </div>
    )
}
SelfAssessmentPanel.propTypes = {
    task : PropTypes.string.isRequired ,
    onClick : PropTypes.func.isRequired,
}