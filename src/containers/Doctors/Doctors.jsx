/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { doctors } from '../../services/fakeDoctorsServices';
import DoctorCard from '../../components/DoctorCard';
import Modal, { Body } from '../../components/common/Modal';
import { ThemeContext } from '../../themContext';

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [doctorId, setDoctorId] = useState(-1);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const bgTable = theme === 'dark' ? 'bg-gray-500' : 'bg-gray-50';
  return (
    <div className="relative bg-gray-400 h-screan bg-background-primary">
      <div className="top-0 flex-grow w-full h-64 py-64 Header bg-background-tertiary">
        <svg
          className="absolute w-full h-54 buttom-0 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            fill={theme === 'dark' ? '#b7b7b7' : 'white'}
            points="0,100 100,0 100,100"
          />
        </svg>
      </div>
      <div
        className="absolute left-0 right-0 w-full mx-auto md:w-9/12"
        style={{ top: '300px' }}
      >
        <div className="relative z-10 flex flex-wrap justify-center w-full pb-12 -mt-32 text-center">
          <div className="w-full px-12 md:w-8/12 md:px-6">
            <h2 className="text-4xl font-semibold text-blue-700">
              {t('ourpsychiatrists')}
            </h2>
            <div className="box-content flex justify-center mt-4 mb-4 text-lg leading-relaxed text-textColor-secondary ">
              <p className="">{t('psychiatristsDetails')}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto xl:overflow-x-hidden  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-12">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-background-secondary">
                    <tr>
                      <th className="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        {t('Name')}
                      </th>
                      <th className="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        {t('specialty')}
                      </th>
                      <th className="px-2 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        {t('workplace')}
                      </th>
                      <th className="px-2 py-3 bg-gray-50" />
                    </tr>
                  </thead>
                  {doctors.map((el) => (
                    <tbody key={el.id} className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className={`px-6 py-4 whitespace-no-wrap ${bgTable}`}>
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 rounded-full roNot provided yetd-full"
                                src={el.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium leading-5 text-gray-900">
                                {t(el.name)}
                              </div>
                              <div className="text-sm leading-5 text-gray-500">
                                {el.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={`px-3 py-4 whitespace-no-wrap ${bgTable}`}>
                          <div className="text-sm leading-5 text-gray-900">
                            {t(el.specialty)}
                          </div>
                        </td>
                        <td className={`px-3 py-4 whitespace-no-wrap ${bgTable}`}>
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 roNot provided yetd-full">
                            {t(el.workplace)}
                          </span>
                        </td>
                        <td
                          className={`px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap ${bgTable}`}
                        >
                          <button
                            className="text-indigo-600 hover:text-blue-500"
                            onClick={() => {
                              setDoctorId(el.id);
                              setShow(true);
                            }}
                          >
                            {t('Contact')}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <Modal
            show={show}
            onClick={() => {
              setShow(false);
            }}
          >
            <div className="bg-background-primary">
              <Body>
                <div>
                  <DoctorCard
                    show
                    name={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].name
                        : 'Not provided yet'
                    }
                    specialty={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].specialty
                        : 'Not provided yet'
                    }
                    workplace={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].workplace
                        : 'Not provided yet'
                    }
                    address={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].address
                        : 'Not provided yet'
                    }
                    phone={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].phone
                        : 'Not provided yet'
                    }
                    img={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].image
                        : 'Not provided yet'
                    }
                  />
                </div>
              </Body>
            </div>
          </Modal>
        )}
      </div>
      <div className="block h-full py-64  bg-background-pinck z-20">
        <div className=" mb-56 md:mb-32" />
      </div>
    </div>
  );
};
export default Doctors;
