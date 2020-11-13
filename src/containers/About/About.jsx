import React from 'react';
import TeamCard from '../../components/teamCard';
import Card from '../../components/common/Card/Card';
import { ReactComponent as WhatDo } from '../../asset/svg/whatdo3.svg';

const About = () => {
  // const svg1 = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: Svg1,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
  // const svg2 = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: Svg2,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
  return (
    <div>
      <section className=" pt-10 relative ">
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">About Us</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              We wont give up until everyone experiencing a mental health problem
              gets support and respect.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="items-center flex flex-col md:flex-row">
            <div className="w-full md:w-6/12 mr-auto px-4 md:pt-0 my-0">
              <WhatDo />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-4">
                <h3 className="text-3xl font-semibold text-green-500">What we do</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  We provide advice and support to empower anyone experiencing a
                  mental health problem. We provide information to raise awareness
                  and promote understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="items-center flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
              {/* <Lottie 
	    options={svg2}
        height={400}
        width={400}
      /> */}
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-4">
                <h3 className="text-3xl font-semibold text-green-500">
                  What we aim
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                  ex placeat quia id consequuntur ullam, beatae minima sint
                  consectetur natus illo praesentium voluptas maiores! Est ipsam
                  autem eius velit quasi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 pb-20 py-10 relative bg-gray-200">
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">Our Values</h2>
            <div className="justify-between mt-10 md:flex md:flex-wrap -mb-4">
              <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-chart-line text-xl" />
              </div>
              <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-chart-line text-xl" />
              </div>
              <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-chart-line text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto mt-10 pb-20 py-10 relative ">
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">Our Team</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              Meet our amazing members. Without them, we could not offer the support
              our users need to rebuild their lives.
            </p>
          </div>
        </div>

        <div className="  md:flex md:flex-wrap -mb-4">
          <div className="p-8 mb-4  sm:w-1/1  md:w-1/2  lg:w-1/3">
            <Card>
              <TeamCard id={0} />
            </Card>
          </div>
          <div className="p-8 mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <Card>
              <TeamCard id={1} />
            </Card>
          </div>
          <div className=" p-8 mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <Card>
              <TeamCard id={2} />
            </Card>
          </div>
          <div className="p-8 mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <Card>
              <TeamCard id={3} />
            </Card>
          </div>
          <div className="p-8 mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <Card>
              <TeamCard id={4} />
            </Card>
          </div>
          <div className="p-8 mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <Card>
              <TeamCard id={5} />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
