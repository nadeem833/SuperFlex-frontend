import React, { useState } from 'react';

import { useFormik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import '../global.css';
import { publicRequest } from '../requestMethods';
import styles from '../styles';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.number()
      .required('Phone number is required')
      .typeError('Invalid phone number'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm password is required')
  });

  const initialValues = {
    name: '',
    password: '',
    confirmPassword: '',
    phone: ''
  };

  const handleSubmit = async values => {
    let apiObject = {
      user_name: values.name,
      email: 'test@yopmail.com',
      password: values.password,
      confirm_password: values.password,
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
              Create account
            </h2>
            <p className="text-gray-400 font-poppins text-sm font-light">
              Fill the requirements below
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            autocomplete="off"
            className="max-w-[472px] w-full"
          >
            <label
              htmlFor="email"
              className="block text-sm font-light leading-6 text-white mb-2 ml-6 mt-[40px]"
            >
              Full Name
            </label>

            <div
              className={` ${
                !(formik.touched.name && formik.errors.name) ? 'mb-4' : ''
              }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
            >
              <div className="flex h-full rounded-full w-full items-center  bg-[#1f1f1f] px-4 sm:px-8 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="flex-1 h-full rounded-full text-[14px] font-normal leading-6 bg-inherit px-0 text-white placeholder-[#FAFAFA] text-[14px]::placeholder focus:outline-none "
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
              </div>
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-600 text-[14px] mb-2 font-light py-2">
                {formik.errors.name}
              </div>
            )}

            <label
              htmlFor="email"
              className="block text-sm font-light leading-6 text-white mb-2 ml-6 "
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
                  placeholder="(XXX) XXX-XXXX"
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
                  ? 'mb-4'
                  : ''
              }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
            >
              <div className="flex h-full rounded-full w-full items-center justify-center bg-[#1f1f1f] px-4 sm:px-8 gap-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password"
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

            <label
              htmlFor="confirmPassword"
              className="block text-sm font-light leading-6 text-white mb-2 ml-6"
            >
              Confirm Password
            </label>

            <div
              className={` ${
                !(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
                  ? 'mb-1'
                  : ''
              }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
            >
              <div className="flex h-full rounded-full w-full items-center justify-center bg-[#1f1f1f] px-4 sm:px-8 gap-4">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="flex-1 h-full rounded-full text-[14px] font-normal leading-6 bg-inherit  text-white placeholder-[#FAFAFA] text-[14px]::placeholder focus:outline-none "
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="text-xs font-normal leading-5 text-[#9C9C9C]"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-600 text-[14px] mb-2 font-light py-2">
                  {formik.errors.confirmPassword}
                </div>
              )}

            <div className="flex gap-5 h-auto items-center ml-3 mb-3 mt-8">
              <input
                class="relative float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]  focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]  checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                value=""
                id="checkboxDefault"
              />

              <p className="text-white font-poppins text-sm font-light leading-normal">
                I have read and agree to the{' '}
                <span className="text-[#F65B0B]">Terms of services</span>
              </p>
            </div>

            <button type="submit" className={`${styles.submitButton}`}>
              Create Account
            </button>

            <p className="text-gray-400 font-poppins text-xs font-light leading-normal mt-3">
              DISCLAIMER: By providing your phone number and agreeing to the
              terms of service, you expressly consent to receiving text messages
              from SuperFlex. Message and data rates may apply. The frequency of
              messages may vary.
            </p>

            <div className="flex gap-1 justify-center items-center w-full mt-5 text-sm font-normal leading-5 text-white text-center">
              Already have an account?
              <span
                onClick={() => {
                  navigate('/sign-in');
                }}
                className="text-[#F65B0B] font-medium cursor-pointer"
              >
                Login
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

export default SignUp;
