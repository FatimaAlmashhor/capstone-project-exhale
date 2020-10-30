import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
 const ArticleCard = ({ title, paragraph, time , img , onClick}) => {
  let handleCLick = () => {
    // on click code
    onClick()
  }
   return(
    <section className="blog text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            {img && <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" 
                style={{backgroundImage: `url(${img}`}}>
            </div>}
            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div className="header-content inline-flex">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                  <div className="h-2 w-2 rounded-full m-1 bg-green-500"></div>
                </div>
                <div className="category-title flex-1 text-sm text-gray-400"> {time}</div>
              </div>
              <div className="title-post font-medium">{title}</div>
              <div className="summary-post text-base text-justify">{paragraph}. 
                <button 
                  type='button'
                  onClick = {handleCLick}
                  className="bg-green-400 text-white px-2 mt-4 block rounded p-2 text-sm"><span className="">Full Read</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleCard ;
ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  onClick : PropTypes.func.isRequired,
  time: PropTypes.string,
  img : PropTypes.string,
=======
// import Button from '../common/Button' ;

export default function ArticleCard({ header, paragraph, time }) {
  return (
    <div className="max-w-screen-sm md:max-w-sm lg:max-w-sm rounded overflow-hidden ">
      <div className="px-6 pt-4 pb-2 text-gray-500">{time}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{header}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
      <div className="px-6 pt-3 pb-5 mt-10">
        {/* <Button text=''/> */}
        <button
          type="button"
          className=" border py-2 px-3 text-white hover:border-1 hover: border-green-400 hover:text-green-400 hover:bg-transparent rounded bg-green-400"
        >
          Read Full
        </button>
      </div>
    </div>
  );
}
ArticleCard.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string,
>>>>>>> 39e4212... Feat : Add ArticalCard component
};
ArticleCard.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
};
