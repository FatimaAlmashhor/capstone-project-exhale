import React, { useState, useEffect } from 'react';
import fire from '../../firebase';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Signup = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
    });
  });
  return (
    <div>
      {isSignedIn ? (
        <span>
          <div className="text-red-600">Signed In!</div>
        </span>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};

export default Signup;
