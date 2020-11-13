import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import ProgressBar from '../../components/ProgressBar';
import Tasks from '../../services/selfAssessmentQuestion';
import SelfAssessmentPanel from '../../components/SelfAssessmentPanle';
import Modal, { Body } from '../../components/common/Modal';
import { DOCTORS_ROUTE } from '../../routes';
import fire from '../../firebase';
import Singin from '../Login';
import check from '../../Lottie/check-animation.json';

const SelfAssessment = () => {
  const [result, setResult] = useState([]);
  const [isSignedIn, setisSignedIn] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [final, setFinal] = useState(0);
  const history = useHistory();

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
  const handleBackStep = () =>
    setDisplayIndex((pre) => (displayIndex === 0 ? pre : pre - 1));
  const TasksBicker = Tasks.map((element) => (
    <div key={element.id} className={`${display(element.id)}`}>
      <SelfAssessmentPanel task={element.task} onClick={handleClick} />
    </div>
  ));

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: check,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-10 md:w-8/12 lg:w-6/12 mb-10">
      <ProgressBar showLabel max={Tasks.length} now={displayIndex} />
      {TasksBicker}
      <div className="mt-16 ">
        <button
          type="button"
          className="self-start focus:outline-none"
          onClick={handleBackStep}
        >
          <FontAwesomeIcon
            className="pt-1 text-lg text-green-400 md:text-xl"
            icon={['fas', 'chevron-left']}
          />
          <span className="ml-5 text-base text-gray-500">BACK</span>
        </button>
      </div>
      {!isSignedIn ? (
        <Singin
          show={showResultModal}
          onClick={() => {
            setShowResultModal(false);
          }}
        />
      ) : (
        showResultModal && (
          <>
            <Modal
              show={showResultModal}
              onClick={() => {
                setShowResultModal(false);
                history.push(DOCTORS_ROUTE);
              }}
            >
              <div>
                <Body>
                  <div>
                    <div>
                      <div className="w-64 h-64 mx-auto relative overflow-hidden">
                        <Lottie
                          options={defaultOptions}
                          height="auto"
                          width="100%"
                        />
                      </div>
                      <div className="w-full mt-5 ">
                        <h1 className="text-center">Your Result at Test Is</h1>
                        <p className="text-center text-3xl text-red-500">
                          {final}
                          <span>%</span>
                        </p>
                        <p>
                          {final < 40
                            ? 'You look good but If you ever need to talk to someone check out our doctors'
                            : 'It seem like you have some problems ,we recommend you to check out our doctors for helping'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Body>
              </div>
            </Modal>
          </>
        )
      )}
    </div>
  );
};
export default SelfAssessment;
