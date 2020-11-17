/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { doctors } from '../../services/fakeDoctorsServices';
import DoctorCard from '../../components/DoctorCard';
import Modal, { Body } from '../../components/common/Modal';

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [doctorId, setDoctorId] = useState(-1);
  return (
    <div className="relative bg-gray-400 h-screan">
      <div
        className="top-0 flex-grow w-full h-64 py-64 Header "
        style={{ backgroundColor: '#ADCCD2' }}
      >
        <svg
          className="absolute w-full h-full buttom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
      </div>
      <div
        className="absolute left-0 right-0 w-full mx-auto md:w-9/12"
        style={{ top: '300px' }}
      >
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:ronot provided yetd-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Name
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        specialty
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        workplace
                      </th>
                      <th className="px-6 py-3 bg-gray-50" />
                    </tr>
                  </thead>
                  {doctors.map((el) => (
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 ronot provided yetd-full"
                                src={el.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium leading-5 text-gray-900">
                                {el.name}
                              </div>
                              <div className="text-sm leading-5 text-gray-500">
                                {el.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-sm leading-5 text-gray-900">
                            {el.specialty}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 ronot provided yetd-full">
                            {el.workplace}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
                          <button
                            className="text-indigo-600 hover:text-blue-500"
                            onClick={() => {
                              setDoctorId(el.id);
                              setShow(true);
                            }}
                          >
                            Contact
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
            <div>
              <Body>
                <div>
                  <DoctorCard
                    show
                    name={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].name
                        : 'not provided yet'
                    }
                    specialty={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].specialty
                        : 'not provided yet'
                    }
                    workplace={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].workplace
                        : 'not provided yet'
                    }
                    address={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].address
                        : 'not provided yet'
                    }
                    phone={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].phone
                        : 'not provided yet'
                    }
                    img={
                      doctors[doctorId - 1]
                        ? doctors[doctorId - 1].image
                        : 'not provided yet'
                    }
                  />
                </div>
              </Body>
            </div>
          </Modal>
        )}
      </div>
      <div className="block h-full py-64 " style={{ backgroundColor: '#F0EEF0' }} />
    </div>
  );
};
export default Doctors;
