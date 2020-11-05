import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from '../../components/ProgressBar';
import Tasks from '../../services/selfAssessmentQuestion';
import SelfAssessmentPanel from '../../components/SelfAssessmentPanle';

const SelfAssessment = () => {
  const [result, setResult] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);

  const display = (index) => (index === displayIndex ? 'block' : 'hidden');

  const handleClick = (e) => {
    // inset the result of answer
    if (displayIndex === Tasks.length - 1) {
      // fetch the the result
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
  return (
    <div className="flex flex-col mx-auto w-4/5 md:w-8/12 lg:w-6/12 mt-10">
      <ProgressBar showLabel max={Tasks.length} now={displayIndex} />
      {TasksBicker}
      <div className="  mt-16  ">
        <button
          type="button"
          className="  self-start focus:outline-none"
          onClick={handleBackStep}
        >
          <FontAwesomeIcon
            className="text-lg md:text-xl pt-1 text-green-400"
            icon={['fas', 'chevron-left']}
          />
          <span className="text-gray-500 text-base ml-5">BACK</span>
        </button>
      </div>
    </div>
  );
};

export default SelfAssessment;
