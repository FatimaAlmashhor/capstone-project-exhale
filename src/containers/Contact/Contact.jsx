import React from 'react';
import ContactUsForm from '../../components/ContactUsForm';

const Contact = () => {
  return (
    <div>
      <div
        className="Header flex-grow  w-full h-64 top-0 py-64 "
        style={{ backgroundColor: '#F0EEF0' }}
      >
        <svg
          className="absolute buttom-0 h-64 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
      </div>
      <div
        className="absolute h-32 mx-auto right-0 left-0  "
        style={{ top: '80px' }}
      >
        <ContactUsForm />
      </div>

      <div className="block h-full py-64 mb-56 ">
        <svg
          className="absolute buttom-0 h-full w-20 md:w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ top: '600px' }}
        >
          <polygon fill="#ADCCD2" points="0,100 0,0 100, 100 100" />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
