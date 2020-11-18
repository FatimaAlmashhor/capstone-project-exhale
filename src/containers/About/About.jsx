import React from 'react';
import { useTranslation } from 'react-i18next';
import TeamCard from '../../components/teamCard';
import { ReactComponent as WhatDo } from '../../asset/svg/whatdo3.svg';
import { ReactComponent as Respect } from '../../asset/svg/respect.svg';
import { ReactComponent as Compassion } from '../../asset/svg/compassion.svg';
import { ReactComponent as Positivity } from '../../asset/svg/positivity.svg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative pt-10 ">
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="mt-32 text-4xl text-blue-700 m-tfont-semibold">
              About Us
            </h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              We wont give up until everyone experiencing a mental health problem
              gets support and respect.
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

        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center md:flex-row-reverse">
            <div className="w-full px-4 my-0 mr-auto md:w-4/12 md:pt-0">
              {/* <Lottie 
    options={svg2}
      height={400}
      width={400}
    /> */}
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
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

      <section className="relative py-10 pb-20 mt-40 bg-gray-200">
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold text-blue-700">Our Values</h2>
            <div className="justify-between mt-10 -mb-4 md:flex md:flex-wrap">
              <div className="inline-flex items-center justify-center w-1/3 p-2">
                <Respect />
                <p className="text-xl font-semibold text-green-600">Respect</p>
              </div>
              <div className="inline-flex items-center justify-center w-1/3">
                <Compassion />
                <p className="text-xl font-semibold text-green-600">Compassion</p>
              </div>
              <div className="inline-flex items-center justify-center w-1/3">
                <Positivity />
                <p className="text-xl font-semibold text-green-600">Positivity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 pb-20 mt-10 ">
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold text-blue-700">{t('ourteam')}</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              {t('detailteam')}
            </p>
          </div>
        </div>

        <div className="-mb-4 md:flex md:flex-wrap">
          <div className="mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
          <div className="mb-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <TeamCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
