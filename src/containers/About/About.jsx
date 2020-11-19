import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import TeamCard from '../../components/teamCard';
import Card from '../../components/common/Card/Card';
import { ReactComponent as WhatDo } from '../../asset/svg/whatdo3.svg';
import { ReactComponent as Goals } from '../../asset/svg/goals.svg';
import { members } from '../../services/fakeTeamInfo';
import care from '../../Lottie/heart.json';
import integrity from '../../Lottie/like.json';
import excellence from '../../Lottie/engine.json';

const About = () => {
  const { t } = useTranslation();
  const [hoverLottie, setHoverLottie] = useState({
    loop: false,
    autoplay: false,
    Animated: 0,
  });
  const defaultOptions = (data) => {
    return {
      loop: false,
      autoplay: hoverLottie,
      animationData: data,
    };
  };

  return (
    <div>
      <section className=" pt-10 relative ">
        <div className="justify-center text-center flex flex-wrap Header flex-grow  w-full h-64 top-0 py-48 ">
          <div className="w-full md:w-6/12  md:px-4">
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
              <Goals />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-4">
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
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className=" md:w-6/12">
            <h2 className="font-semibold text-4xl text-blue-700">
              {t('Our Values')}
            </h2>
            <div className="justify-between mt-10 flex flex-wrap -mb-4">
              <div>
                <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white ">
                  <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions(care)}
                    height="auto"
                    width="100%"
                    onMouseOver={() => setHoverLottie({ autoplay: true })}
                  />
                </div>
                <p className="text-green-500">{t('Care Deeply')}</p>
              </div>

              <div>
                <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white ">
                  <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions(excellence)}
                    height="auto"
                    width="100%"
                    autoplay
                    onMouseOver={() => setHoverLottie(true)}
                  />
                </div>
                <p className="text-green-500">{t('Integrity')}</p>
              </div>
              <div>
                <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white  ">
                  <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions(integrity)}
                    height="auto"
                    width="100%"
                    onMouseOver={() => setHoverLottie(true)}
                  />
                </div>
                <p className="text-green-500">{t('Excllence')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto mt-10 pb-20 py-10 relative ">
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blue-700">{t('ourteam')}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              {t('detailteam')}
            </p>
          </div>
        </div>

        <div className=" justify-center md:flex md:flex-wrap -mb-4">
          {members.map((doc) => (
            <div className="p-8 mb-4  sm:w-1/1  md:w-1/2  lg:w-1/3">
              <Card>
                <TeamCard
                  name={`${doc.name}`}
                  major={`${doc.major}`}
                  image={doc.img}
                  email={`${doc.email}`}
                />
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
