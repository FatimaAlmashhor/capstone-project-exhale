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
  const [hoverLottie, setHoverLottie] = useState();
  const defaultOptions = (data) => {
    return {
      loop: true,
      autoplay: hoverLottie,
      animationData: data,
    };
  };

  return (
    <div>
      <section className="relative pt-10 ">
        <div className="top-0 flex flex-wrap justify-center flex-grow w-full h-64 py-48 text-center Header ">
          <div className="w-full md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold text-blue-700">{t('aboutus')}</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              {t('detailaboutus')}
            </p>
          </div>
        </div>

        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full px-4 my-0 mr-auto md:w-6/12 md:pt-0">
              <WhatDo />
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
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

        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center md:flex-row-reverse">
            <div className="w-full px-4 my-0 mr-auto md:w-4/12 md:pt-0">
              <Goals />
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
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

      <section className="relative py-10 pb-20 mt-40 bg-gray-200">
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className=" md:w-6/12">
            <h2 className="text-4xl font-semibold text-blue-700">
              {t('Our Values')}
            </h2>
            <div className="justify-between -mb-4 lg:flex lg:flex-wrap md:flex  m-8">
              <div className="m-4">
                <div className="inline-flex items-center justify-center w-20 h-20 p-2 mb-4 text-center text-red-600 bg-white rounded-full shadow-lg ">
                  <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions(care)}
                    height="auto"
                    width="100%"
                    onMouseOver={() => setHoverLottie({ loop: true })}
                  />
                </div>
                <p className="text-green-600">{t('Care Deeply')}</p>
              </div>

              <div className="m-4">
                <div className="inline-flex items-center justify-center w-20 h-20 p-2 mb-4 text-center text-red-600 bg-white rounded-full shadow-lg ">
                  <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions(excellence)}
                    height="auto"
                    width="100%"
                    autoplay
                    onMouseOver={() => setHoverLottie(true)}
                  />
                </div>
                <p className="text-green-600">{t('Integrity')}</p>
              </div>
              <div className="m-4">
                <div className="inline-flex items-center justify-center w-20 h-20 p-2 mb-4 text-center text-red-600 bg-white rounded-full shadow-lg ">
                  <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions(integrity)}
                    height="auto"
                    width="100%"
                    onMouseOver={() => setHoverLottie(true)}
                  />
                </div>
                <p className="text-green-600">{t('Excllence')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 pb-20 m-auto mt-10 ">
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold text-blue-700">{t('ourteam')}</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              {t('detailteam')}
            </p>
          </div>
        </div>

        <div className="justify-center -mb-4 md:flex md:flex-wrap">
          {members.map((doc) => (
            <div className="p-8 mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
              <Card>
                <TeamCard
                  name={`${t(doc.name)}`}
                  major={`${t(doc.major)}`}
                  image={doc.img}
                  email={`${doc.email}`}
                  twitter={`${doc.twitter}`}
                  linkedin={`${doc.linkedin}`}
                  github={`${doc.github}`}
                  instagram={`${doc.instagram}`}
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
