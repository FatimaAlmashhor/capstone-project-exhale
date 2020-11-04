import React from 'react';
import PropTypes from 'prop-types';

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
                <div className="category-title flex-1 text-sm text-gray-400">{time}</div>
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
};

ArticleCard.defaultProps = {
  time: new Date().toLocaleDateString('en-US'),
};