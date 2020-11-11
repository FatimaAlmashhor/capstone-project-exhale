<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable no-unused-expressions */
||||||| parent of c106d8a... Fix: initial commit
=======
import { logDOM } from '@testing-library/react';
>>>>>>> c106d8a... Fix: initial commit
||||||| parent of 52e8f6e... Feat: add forget password component
import { logDOM } from '@testing-library/react';
=======
>>>>>>> 52e8f6e... Feat: add forget password component
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
||||||| parent of c106d8a... Fix: initial commit
=======
import ForgetPWForm from '../../components/forgetPWForm/ForgetPWForm';
import LoginForm from '../../components/LoginForm/LoginForm';
>>>>>>> c106d8a... Fix: initial commit
||||||| parent of 52e8f6e... Feat: add forget password component
import ForgetPWForm from '../../components/forgetPWForm/ForgetPWForm';
import LoginForm from '../../components/LoginForm/LoginForm';
=======
>>>>>>> 52e8f6e... Feat: add forget password component

const Home = () => {
  const { t } = useTranslation();
  const doctorsItem = doctors.slice(0, 3).map((item) => (
    <div className=" flex md:w-1/3 md:px-4 mt-10 md:mt-0 justify-center">
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
    <div className=" flex md:w-1/2 md:px-4 mt-10 md:mt-0 justify-center">
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
<<<<<<< HEAD
    <div className=" ">
      <section
        className=" header relative items-center flex h-screen my-32 md:py-16 md:my-0"
        style={{ maxHeight: '660px' }}
      >
        <div className="container mx-auto px-4 my-10 ">
          <div className="items-center flex flex-col-reverse md:flex-row-reverse">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto my-16 md:my-0 overflow-hidden">
              <Lottie options={defaultOptions(Hero)} width="100%" height="auto" />
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="pt-0 md:pt-16">
                <h2 className="font-semibold text-4xl text-gray-700">
                  We Here To Help You
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  If you are feeling overwhelmed or unable to do the things you once
                  enjoyed, it may be time to assess your emotional health.
                </p>
                <div>
                  <button
                    type="button"
                    className="my-4 inline-flex items-center  justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                  >
                    <Link to={SELF_ASSESSMENT_ROUTE}>{t('Checkup')}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="  mt-40 md:px-14 pb-20 py-10 relative bg-gray-200">
        <SeparatorSVG />
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Why Use Exhale?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              Learn the reasons why you should be using Exhale
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="items-center flex flex-col md:flex-row">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0 overflow-hidden">
              <Lottie
                options={defaultOptions(Analysis)}
                width="100%"
                height="auto"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-4">
                <h3 className="text-3xl font-semibold">
                  Check up And Speed Service
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Request a check and have your examination done in a matter of
                  minutes and not days and all that with Volunteering doctors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="items-center flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0 overflow-hidden">
              <Lottie options={defaultOptions(Yoga)} width="120%" height="auto" />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-4">
                <h3 className="text-3xl font-semibold">
                  Learn How To Take Care Of Yourself
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  You can now focus on the important things such as work, family or
                  just being able to relax Learn All that here .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" pb-20 py-10 relative bg-white">
        <SeparatorSVG color="white" />
        <div className="justify-center text-center flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Meet Our Doctors</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              you can take look at them here
            </p>
          </div>
        </div>
        <div className="team-1 py-4 md:py-12">
          <div className="container mx-auto px-4">
            <div className="md:flex md:-mx-4 md:mt-12 md:mb-6 team-list">
              {doctorsItem}
            </div>
            <div className="w-full mt-20  flex justify-center">
              <Link
                to={DOCTORS_ROUTE}
                className="text-center p-2 justify-center text-lg text-yellow-500 border-t-2 rounded-lg border-2 border-yellow-500 hover:shadow-sm hover:text-white hover:bg-yellow-400 hover:border-white transition-all duration-200"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 py-10 relative bg-blue-800">
        <SeparatorSVG color="blue-800" />
        <div className="justify-center text-center  flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-white text-4xl">Self Assessment</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
              let see if you need any help
            </p>
            <div>
              <button
                type="button"
                className="my-4 inline-flex items-center  justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-transparent border border-transparent border-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
              >
                <Link to={SELF_ASSESSMENT_ROUTE}>{t('Checkup')}</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 py-10 relative bg-white">
        <SeparatorSVG color="white" />
        <div className="justify-center text-center mt-8 flex flex-wrap py-8">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Read Something Helpful</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              let see if you need any help
            </p>
          </div>
        </div>
        <div className="team-1 py-4 md:py-12">
          <div className="container mx-auto px-4">
            <div className="md:flex md:-mx-4 md:mt-12 md:mb-6 team-list overflow-hidden">
              {articleItem}
            </div>
            <div className="w-full flex justify-center">
              <Link
                to={ARTICLES_BASE_ROUTE}
                className="text-center p-2 justify-center text-lg text-yellow-500 border-t-2 rounded-lg border-2 border-yellow-500 hover:shadow-sm hover:text-white hover:bg-yellow-400 hover:border-white transition-all duration-200"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
||||||| parent of c106d8a... Fix: initial commit
    <div>
      <h1>Home</h1>
=======
    <div>
      <h1>Home</h1>
<<<<<<< HEAD
      <ForgetPWForm />
>>>>>>> c106d8a... Fix: initial commit
||||||| parent of 52e8f6e... Feat: add forget password component
      <ForgetPWForm />
=======
>>>>>>> 52e8f6e... Feat: add forget password component
    </div>
  );
};

export default Home;

export const SeparatorSVG = ({ color }) => {
  return (
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
