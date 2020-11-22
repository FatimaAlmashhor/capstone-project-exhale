/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function SelfAssessmentPanel({ task, onClick }) {
  const { t } = useTranslation();
  const handleClick = (e) => {
    onClick(e);
  };
  const handleHover = (e) => {
    e.target.className += ' hover:bg-green-300';
  };

  const style = {
    buttonStyle:
      'bg-transparent border-2 border-gray-400 rounded-full focus:outline-none',
    trans: 'transition duration-500',
    hover: '',
  };

  return (
    <div className="transition-all duration-100">
      <div className="flex-auto h-64 py-10 lg:h-48">
        <h1
          className={` text-4xl  text-center font-sans ${style.trans} ${style.hover} transition-all duration-100 `}
        >
          {t(task)}
        </h1>
      </div>
      <div className="flex-auto pt-20 ">
        <div className={` flex mt-8 mx-auto justify-center ${style.trans}`}>
          <div className="flex flex-col self-center justify-center flex-1 ">
            <button
              type="button"
              data-rate="20"
              className={` p-6  mt-6 mx-auto md:p-10 ${style.buttonStyle} ${style.trans} ${style.hover}`}
              onClick={handleClick}
              onMouseEnter={handleHover}
            />
            <p className="mx-auto mt-3 text-gray-500">{t('Never')}</p>
          </div>
          <div className="flex self-center justify-center flex-1 ">
            <button
              type="button"
              data-rate="40"
              className={` p-4  md:p-8 ${style.buttonStyle} ${style.trans} ${style.hover}`}
              onClick={handleClick}
              onMouseEnter={handleHover}
            />
          </div>
          <div className="flex self-center justify-center flex-1 ">
            <button
              type="button"
              data-rate="60"
              className={` p-3  md:p-6 ${style.buttonStyle} ${style.trans}${style.hover}`}
              onClick={handleClick}
              onMouseEnter={handleHover}
            />
          </div>
          <div className="flex self-center justify-center flex-1 ">
            <button
              type="button"
              data-rate="80"
              className={` p-4  md:p-8 ${style.buttonStyle} ${style.trans} ${style.hover}`}
              onClick={handleClick}
              onMouseEnter={handleHover}
            />
          </div>
          <div className="flex flex-col self-center justify-center flex-1 ">
            <button
              type="button"
              data-rate="100"
              className={`p-6  mt-6 mx-auto md:p-10 ${style.buttonStyle} ${style.trans} ${style.hover} `}
              onClick={handleClick}
              onMouseEnter={handleHover}
            />
            <p className="mx-auto mt-3 text-gray-500">{t('Always')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
SelfAssessmentPanel.propTypes = {
  task: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
