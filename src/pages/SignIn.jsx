import React, { useState } from 'react';

import { useFormik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import '../global.css';
import styles from '../styles';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.number()
      .required('Phone number is required')
      .typeError('Invalid phone number'),
    password: Yup.string().required('Password is required')
  });

  const initialValues = {
    password: '',
    phone: ''
  };

  const handleSubmit = async values => {
    let apiObject = {
      email: values.email,
      password: values.password,
      phone: values.phone
    };
    console.log('apiObject', apiObject);
    await publicRequest
      .post(`sign-up`, apiObject)
      .then(res => {
        toast.success('Sign Up Successful!');
        navigate('/sign-in');
      })
      .catch(error => {
        toast.error(error.response.data.msg);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-black min-h-screen overflow-hidden">
      {/* Left Section (Form) */}
      <div className="md:w-1/2 bg-[#282828] p-4 sm:p-20 md:rounded-tr-[28.5px] md:rounded-br-[28.5px] min-h-screen flex flex-col items-center">
        <div className="w[472px]">
          <img src="./assets/SuperflexLogo.svg" alt="" />
          <div className="mt-[55px] ml-8 w-full">
            <h2 className="text-white font-poppins text-2xl font-semibold">
              Welcome
            </h2>
            <p className="text-gray-400 font-poppins text-sm font-light">
              Fill the requirements below
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            autocomplete="off"
            className="max-w-[472px]w-full"
          >
            <label
              htmlFor="email"
              className="block text-sm font-light leading-6 text-white mb-2 ml-6 mt-[40px]"
            >
              Phone Number
            </label>

            <div
              className={` ${
                !(formik.touched.phone && formik.errors.phone) ? 'mb-4' : ''
              }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
            >
              <div className="flex h-full rounded-full w-full items-center  bg-[#1f1f1f] px-4 sm:px-8">
                <span className="flex items-center w-max gap-2 text-[14px] text-white">
                  <img src="./assets/America.svg" alt="America" />
                  +1
                </span>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Amazon Flex Phone"
                  className="flex-1 h-full rounded-full text-[14px] font-normal leading-6 bg-inherit px-4 text-white placeholder-[#FAFAFA] text-[14px]::placeholder focus:outline-none "
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                />
              </div>
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-600 text-[14px] mb-2 font-light py-2">
                {formik.errors.phone}
              </div>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-light leading-6 text-white mb-2 ml-6"
            >
              Password
            </label>

            <div
              className={` ${
                !(formik.touched.password && formik.errors.password)
                  ? 'mb-1'
                  : ''
              }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
            >
              <div className="flex h-full rounded-full w-full items-center justify-center bg-[#1f1f1f] px-4 sm:px-8 gap-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Amazon Flex Password"
                  className="flex-1 h-full rounded-full text-[14px] font-normal leading-6 bg-inherit  text-white placeholder-[#FAFAFA] text-[14px]::placeholder focus:outline-none "
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="text-xs font-normal leading-5 text-[#9C9C9C]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-[14px] mb-2 font-light py-2">
                {formik.errors.password}
              </div>
            )}

            <div
              onClick={() => {
                navigate('/sign-up');
              }}
              className="flex justify-end items-center w-full text-sm font-light leading-5 text-[#A4A4A4] cursor-pointer mb-[272px]"
            >
              Forgot password ?
            </div>

            <button type="submit" className={`${styles.submitButton}`}>
              Register
            </button>
            <div className="flex gap-1 justify-center items-center w-full mt-5 text-sm font-normal leading-5 text-white text-center">
              New Account ?
              <span
                onClick={() => {
                  navigate('/sign-up');
                }}
                className="text-[#F65B0B] font-medium cursor-pointer"
              >
                Create an account
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className="md:w-1/2 bg-black hidden md:block h-auto relative background1">
        <img
          src="./assets/Superflex.svg"
          alt="SuperFlexImage"
          className="object-contain w-[96%] right-4 absolute bottom-0"
        />
      </div>
    </div>
  );
};

export default SignIn;
