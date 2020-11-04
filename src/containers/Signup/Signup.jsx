import React from 'react';
import SignUpForm from '../../components/RegisterForm';
import SoicalButtons from '../../components/SocialButtons';

const Signup = () => {
  return (
    <div>
      <div className="w-full mb-4 border-b-2 pb-2">
        <SoicalButtons />
      </div>
      <div />
      <SignUpForm />
    </div>
  );
};

export default Signup;
