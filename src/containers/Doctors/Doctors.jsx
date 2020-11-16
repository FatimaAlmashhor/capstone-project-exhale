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
    <div className="mx-2 md:mx-20 lg:mx-32 my-20">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      specialty
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={el.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">
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
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {el.workplace}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
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
                  name={doctors[doctorId] ? doctors[doctorId - 1].name : 'unde'}
                  specialty={
                    doctors[doctorId] ? doctors[doctorId - 1].specialty : 'unde'
                  }
                  workplace={
                    doctors[doctorId] ? doctors[doctorId - 1].workplace : 'unde'
                  }
                  address={
                    doctors[doctorId] ? doctors[doctorId - 1].address : 'unde'
                  }
                  phone={doctors[doctorId] ? doctors[doctorId].phone : 'unde'}
                  img={doctors[doctorId] ? doctors[doctorId].image : 'unde'}
                />
              </div>
            </Body>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default Doctors;
