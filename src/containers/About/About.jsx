import React from 'react';
import { useTranslation } from 'react-i18next';
import TeamCard from '../../components/teamCard';
import { ReactComponent as WhatDo } from '../../asset/svg/whatdo3.svg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="mt-10 pt-10 relative bg-gray-200">
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">{t('aboutus')}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              {t('detailaboutus')}
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
                <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-rocket text-xl" />
                </div>
                <h3 className="text-3xl font-semibold text-green-500">
                  {t('mission')}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {t('ourmission')}
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
                <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-chart-line text-xl" />
                </div>
                <h3 className="text-3xl font-semibold text-green-500">
                  {t('ourgoals')}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {t('goalsdetail')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 pb-20 py-10 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
          style={{ height: '80px', transform: 'translateZ(0px)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">
              {t('Our Values')}
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 pb-20 py-10 relative ">
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">{t('ourteam')}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              {t('detailteam')}
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-wrap -mb-4">
          <div className="mb-4  sm:w-1/1  md:w-1/2  lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4  sm:w-1/1  md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
