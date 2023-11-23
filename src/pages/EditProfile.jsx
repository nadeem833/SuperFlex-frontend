import React, { useState } from 'react';

import { useFormik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import '../global.css';
import { privateRequest } from '../requestMethods';
import styles from '../styles';

const EditProfile = () => {
  const validationSchema = Yup.object().shape({
    phone: Yup.number()
      .required('Phone number is required')
      .typeError('Invalid phone number'),
    name: Yup.string().required('Name is required')
  });

  const initialValues = {
    name: '',
    phone: ''
  };

  const handleSubmit = values => {
    let apiObject = {
      user_name: values.name,
      phone: values.phone
    };
    console.log('apiObject', apiObject);
    privateRequest
      .put(`update-user`, apiObject)
      .then(res => {
        toast.success('Profile Updated Successfully!');
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
    <div className="w-full">
      <h1 className="font-semibold text-white text-3xl mb-10">
        Update Profile
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        className="max-w-[500px] w-full"
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
              placeholder="Enter Your Name"
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
            !(formik.touched.phone && formik.errors.phone) ? 'mb-6' : ''
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
        <button type="submit" className={`${styles.submitButton}`}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
