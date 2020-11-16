/* eslint-disable no-unused-expressions */
import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Hero from '../../Lottie/hero-section.json';
import Yoga from '../../Lottie/yoga.json';
import Analysis from '../../Lottie/analysis.json';
import {
  ARTICLES_BASE_ROUTE,
  DOCTORS_ROUTE,
  SELF_ASSESSMENT_ROUTE,
} from '../../routes';
import Card from '../../components/common/Card';
import DoctorCard from '../../components/DoctorCard';
import { doctors } from '../../services/fakeDoctorsServices';
import { articles } from '../../services/fakeArticleService';
import { HorizontalArticleCard } from '../../components/ArticleCard';

const Home = () => {
  const { t } = useTranslation();
  const doctorsItem = doctors.slice(0, 3).map((item) => (
    <div className="flex justify-center mt-10 md:w-1/3 md:px-4 md:mt-0">
      <Card>
        <DoctorCard
          index={item.id}
          name={item.name}
          specialty={item.specialty}
          email={item.email}
          phone={item.phone}
          image={item.image}
          address={item.address}
          workplace={item.workplace}
        />
      </Card>
    </div>
  ));
  const articleItem = articles.slice(0, 2).map((item) => (
    <div className="flex justify-center mt-10 md:w-1/2 md:px-4 md:mt-0">
      <HorizontalArticleCard
        index={item.id}
        title={item.title}
        img={item.articleImg}
        time={item.date}
        authorImage={item.authorImg}
      />
    </div>
  ));
  const defaultOptions = (data) => {
    return {
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };
  return (
    <div className="">
      <section
        className="relative flex items-center h-screen my-32 header md:py-16 md:my-0"
        style={{ maxHeight: '660px' }}
      >
        <div className="container px-4 mx-auto my-10 ">
          <div className="flex flex-col-reverse items-center md:flex-row-reverse">
            <div className="w-full px-4 my-16 ml-auto mr-auto overflow-hidden md:w-5/12 md:my-0">
              <Lottie options={defaultOptions(Hero)} width="100%" height="auto" />
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-6/12">
              <div className="pt-0 md:pt-16">
                <h2 className="text-4xl font-semibold text-gray-700">
                  {t('HereHelpYou')}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {t('HowHelp')}
                </p>
                <div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 my-4 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                  >
                    <Link to={SELF_ASSESSMENT_ROUTE}>{t('Checkup')}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 pb-20 mt-40 bg-gray-200 md:px-14">
        <SeparatorSVG />
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold">{t('whyexhal')}</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              {t('ReasonsUseExhale')}
            </p>
          </div>
        </div>

        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full px-4 my-0 mr-auto overflow-hidden md:w-4/12 md:pt-0">
              <Lottie
                options={defaultOptions(Analysis)}
                width="100%"
                height="auto"
              />
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <div className="md:pr-4">
                <h3 className="text-3xl font-semibold">{t('checkupservice')}</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {t('detailcheckup')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center md:flex-row-reverse">
            <div className="w-full px-4 my-0 mr-auto overflow-hidden md:w-4/12 md:pt-0">
              <Lottie options={defaultOptions(Yoga)} width="120%" height="auto" />
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <div className="md:pr-4">
                <h3 className="text-3xl font-semibold">{t('tackcarofurself')}</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {t('detailTackare')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 pb-20 bg-white ">
        <SeparatorSVG color="white" />
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold">{t('meetdoctor')}</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              {t('takelook')}
            </p>
          </div>
        </div>
        <div className="py-4 team-1 md:py-12">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:mt-12 md:mb-6 team-list">
              {doctorsItem}
            </div>
            <div className="flex justify-center w-full mt-20">
              <Link
                to={DOCTORS_ROUTE}
                className="justify-center p-2 text-lg text-center text-yellow-500 transition-all duration-200 border-2 border-t-2 border-yellow-500 rounded-lg hover:shadow-sm hover:text-white hover:bg-yellow-400 hover:border-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 pb-20 bg-blue-800">
        <SeparatorSVG color="blue-800" />
        <div className="flex flex-wrap justify-center py-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold text-white">Self Assessment</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-400">
              let see if you need any help
            </p>
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 my-4 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-transparent border border-transparent border-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
              >
                <Link to={SELF_ASSESSMENT_ROUTE}>{t('Checkup')}</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 pb-20 bg-white">
        <SeparatorSVG color="white" />
        <div className="flex flex-wrap justify-center py-8 mt-8 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold">Read Something Helpful</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
              let see if you need any help
            </p>
          </div>
        </div>
        <div className="py-4 team-1 md:py-12">
          <div className="container px-4 mx-auto">
            <div className="overflow-hidden md:flex md:-mx-4 md:mt-12 md:mb-6 team-list">
              {articleItem}
            </div>
            <div className="flex justify-center w-full">
              <Link
                to={ARTICLES_BASE_ROUTE}
                className="justify-center p-2 text-lg text-center text-yellow-500 transition-all duration-200 border-2 border-t-2 border-yellow-500 rounded-lg hover:shadow-sm hover:text-white hover:bg-yellow-400 hover:border-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

export const SeparatorSVG = ({ color }) => {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20"
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
          className={`text-${color} fill-current`}
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  );
};
SeparatorSVG.propTypes = {
  color: PropTypes.string,
};
SeparatorSVG.defaultProps = {
  color: 'gray-200',
};
