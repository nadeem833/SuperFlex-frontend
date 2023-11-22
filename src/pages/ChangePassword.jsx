import React, { useState } from 'react';

import { useFormik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import '../global.css';
import { publicRequest } from '../requestMethods';
import styles from '../styles';

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().required('New password is required'),
    confirmPassword: Yup.string().required('Confirm password is required')
  });

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  const handleSubmit = values => {
    // let apiObject = {
    //   user_name: values.name,
    //   email: 'test@yopmail.com',
    //   password: values.password,
    //   confirm_password: values.password,
    //   phone: values.phone
    // };
    // console.log('apiObject', apiObject);
    // publicRequest
    //   .post(`sign-up`, apiObject)
    //   .then(res => {
    //     toast.success('Sign Up Successful!');
    //     navigate('/sign-in');
    //   })
    //   .catch(error => {
    //     toast.error(error.response.data.msg);
    //   });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  const navigate = useNavigate();

  return (
    <div className="w-full">
      <h1 className="font-semibold text-white text-3xl mb-10">
        Change Password
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        className="max-w-[500px] w-full"
      >
        <label
          htmlFor="oldPassword"
          className="block text-sm font-light leading-6 text-white mb-2 ml-6 "
        >
          Current Password
        </label>

        <div
          className={` ${
            !(formik.touched.oldPassword && formik.errors.oldPassword)
              ? 'mb-4'
              : ''
          }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
        >
          <div className="flex h-full rounded-full w-full items-center justify-center bg-[#1f1f1f] px-4 sm:px-8 gap-4">
            <input
              type={showOldPassword ? 'text' : 'password'}
              id="oldPassword"
              name="oldPassword"
              placeholder="Enter Current Password"
              className="flex-1 h-full rounded-full text-[14px] font-normal leading-6 bg-inherit  text-white placeholder-[#FAFAFA] text-[14px]::placeholder focus:outline-none "
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
            />
            <span
              onClick={toggleOldPasswordVisibility}
              className="text-xs font-normal leading-5 text-[#9C9C9C]"
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {formik.touched.oldPassword && formik.errors.oldPassword && (
          <div className="text-red-600 text-[14px] mb-2 font-light py-2">
            {formik.errors.oldPassword}
          </div>
        )}
        <label
          htmlFor="newPassword"
          className="block text-sm font-light leading-6 text-white mb-2 ml-6 "
        >
          New Password
        </label>

        <div
          className={` ${
            !(formik.touched.newPassword && formik.errors.newPassword)
              ? 'mb-4'
              : ''
          }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
        >
          <div className="flex h-full rounded-full w-full items-center justify-center bg-[#1f1f1f] px-4 sm:px-8 gap-4">
            <input
              type={showNewPassword ? 'text' : 'password'}
              id="newPassword"
              name="newPassword"
              placeholder="Enter New Password"
              className="flex-1 h-full rounded-full text-[14px] font-normal leading-6 bg-inherit  text-white placeholder-[#FAFAFA] text-[14px]::placeholder focus:outline-none "
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
            />
            <span
              onClick={toggleNewPasswordVisibility}
              className="text-xs font-normal leading-5 text-[#9C9C9C]"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {formik.touched.newPassword && formik.errors.newPassword && (
          <div className="text-red-600 text-[14px] mb-2 font-light py-2">
            {formik.errors.newPassword}
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
            !(formik.touched.confirmPassword && formik.errors.confirmPassword)
              ? 'mb-6'
              : ''
          }  h-[60px] w-full rounded-full bg-gradient-to-r from-[#F65B0B]  to-[#1f1f1f] p-[0.5px]`}
        >
          <div className="flex h-full rounded-full w-full items-center justify-center bg-[#1f1f1f] px-4 sm:px-8 gap-4">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm New Password"
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

        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-600 text-[14px] mb-2 font-light py-2">
            {formik.errors.confirmPassword}
          </div>
        )}

        <button type="submit" className={`${styles.submitButton}`}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
