import React from 'react'
import Lottie from 'react-lottie';
import LoaderSVG from '../../Lottie/loading.json' ;

 const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoaderSVG,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    return (
        <div className="w-full h-full flex content-center ">
            <div className='mx-auto mt-20 my-20 container w-1/5 items-center'>
            <Lottie 
            options={defaultOptions}
            height={'auto'}
            width={400}
      />
            </div>
        </div>
    )
}
export default Loading ;