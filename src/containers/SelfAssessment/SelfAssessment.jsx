import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../../components/ProgressBar';
import Tasks from '../../services/selfAssessmentQuestion';
import SelfAssessmentPanel from '../../components/SelfAssessmentPanle';
import Modal, { Body } from '../../components/common/Modal';
import { DOCTORS_ROUTE, LOGIN_ROUTE } from '../../routes';
import fire from '../../firebase';
import check from '../../Lottie/check-animation.json';
import register from '../../Lottie/register.json';

const SelfAssessment = () => {
  const [result, setResult] = useState([]);
  const [isSignedIn, setisSignedIn] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [final, setFinal] = useState(0);

  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });

  const display = (index) => (index === displayIndex ? 'block' : 'hidden');

  const handleClick = (e) => {
    // inset the result of answer
    if (displayIndex === Tasks.length - 1) {
      // avrage of the result
      const avrage = result.reduce((accumulator, currentValue) => {
        return parseInt(accumulator, 10) + parseInt(currentValue, 10);
      }, 0);
      setFinal(Math.round(avrage / Tasks.length));
      setShowResultModal(true);
    }
    setResult((pre) => [...pre], (result[displayIndex] = e.target.dataset.rate));
    setDisplayIndex((pre) => (displayIndex === Tasks.length ? pre : pre + 1)); // move to next question
  };

  const TasksBicker = Tasks.map((element) => (
    <div key={element.id} className={`${display(element.id)}`}>
      <SelfAssessmentPanel task={element.task} onClick={handleClick} />
    </div>
  ));

  const defaultOptions = (pic) => ({
    loop: false,
    autoplay: true,
    animationData: pic,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <div className="flex flex-col w-4/5 mx-auto mt-56 mb-16 md:w-8/12 lg:w-6/12 transition-all duration-100">
      <ProgressBar showLabel max={Tasks.length} now={displayIndex} />
      {TasksBicker}
      {!isSignedIn ? (
        <>
          <Modal
            show={showResultModal}
            onClick={() => {
              setisSignedIn(false);
              setShowResultModal(false);
              setDisplayIndex((pre) => pre - 1);
            }}
          >
            <div>
              <Body>
                <div>
                  <div>
                    <div className="relative w-64 h-64 mx-auto overflow-hidden">
                      <Lottie
                        options={defaultOptions(register)}
                        height="auto"
                        width="100%"
                        isClickToPauseDisabled
                      />
                    </div>
                    <div className="w-full mt-5 ">
                      <h1 className="text-center">{t('Please Login')}</h1>
                    </div>
                    <div className="flex w-full">
                      <Link
                        className="items-center justify-center w-full p-2 mx-auto font-medium leading-6 text-center text-white whitespace-no-wrap transition-all duration-100 bg-blue-400 border-blue-400 hover:bg-transparent hover:text-gray-600 focus:border-gray-500 focus:outline-none focus:text-gray-900 "
                        to={{
                          pathname: LOGIN_ROUTE,
                          state: { modal: location },
                        }}
                      >
                        {t('Login')}
                      </Link>
                    </div>
                  </div>
                </div>
              </Body>
            </div>
          </Modal>
        </>
      ) : (
        <div className="max-w-xs">
          <Modal
            show={showResultModal}
            onClick={() => {
              setShowResultModal(false);
              history.push(DOCTORS_ROUTE);
            }}
          >
            <div className="max-w-xs">
              <Body>
                <div className="">
                  <div className="  overflow-hidden">
                    <Lottie
                      isClickToPauseDisabled
                      options={defaultOptions(check)}
                      height="auto"
                      width="200px"
                    />
                  </div>
                  <div className=" mt-2 w-full ">
                    <h1 className="text-center">
                      {t('Your Result at the test is')}
                    </h1>
                    <p className="text-3xl text-center text-red-500">
                      {final}
                      <span>%</span>
                    </p>
                    <p className="">
                      {final < 40 ? t('Good Result') : t('Bad Result')}
                    </p>
                  </div>
                </div>
              </Body>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default SelfAssessment;
