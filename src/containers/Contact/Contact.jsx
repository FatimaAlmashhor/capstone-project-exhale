import React from 'react';
import ContactUsForm from '../../components/ContactUsForm';

const Contact = () => {
  return (
    <div>
      <div
        className="Header flex-grow  w-full h-64 top-0 py-64 "
        style={{ backgroundColor: '#ADCCD2' }}
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
        className="absolute h-full mx-auto right-0 left-0  "
        style={{ top: '80px' }}
      >
        <ContactUsForm />
      </div>
      <div className="block h-full py-64 " />
    </div>
  );
};

export default Contact;
