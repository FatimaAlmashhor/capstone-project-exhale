import React from 'react';
import { Formik } from 'formik';
import PropType from 'prop-types';

function Input(props) {
  const { handleSubmit, handleChange, name, errors, labelText, type, value } = props;
  return (
    <Formik>
      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>{labelText}</label>
        <input type={type} onChange={handleChange} name={name} value={value} />
        {errors && <div className="input-feedback">{errors}</div>}
      </form>
    </Formik>
  );
}

Input.propTypes = {
  handleSubmit: PropType.func.isRequired,
  handleChange: PropType.func.isRequired,
  name: PropType.string.isRequired,
  errors: PropType.string.isRequired,
  labelText: PropType.string.isRequired,
  type: PropType.string.isRequired,
  value: PropType.string.isRequired,
};
export default Input;
