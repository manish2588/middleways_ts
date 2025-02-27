"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '../../components/Button'; // Adjust the import path as needed

function JoinUsForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
      job: 'job',
      cv: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      address: Yup.string().required('Address is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone number is required').matches(
        /^[0-9]{10}$/,
        'Phone number must be 10 digits'
      ),
      job: Yup.string().required('Job selection is required'),
      cv: Yup.mixed().required('CV is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formDataToSend = new FormData();
      formDataToSend.append('name', values.name);
      formDataToSend.append('address', values.address);
      formDataToSend.append('email', values.email);
      formDataToSend.append('phoneNumber', values.phoneNumber);
      formDataToSend.append('job', values.job);
      formDataToSend.append('cv', values.cv);
      
      try {
        const response = await axios.post('/api/submit-form', formDataToSend);
        console.log(response.data);
        alert('We received your message. We will reply to you soon.');
        resetForm();
      } catch (error) {
        console.error('Error submitting form data:', error);
        alert('Failed to send form data. Please try again.');
      }
    },
  });

  return (
    <div className='bg-gray-300'>
      <form className="max-w-2xl mx-auto p-8 rounded-lg mt-24" onSubmit={formik.handleSubmit}>
        <h2 className="text-center text-4xl font-medium text-black mb-6 font-serif">Join Our Team</h2>
        <p className="text-center text-xl text-black mb-8 font-mono">We are looking for talented people to join our collaborative team</p>
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-teal-800 focus:outline-none focus:border-blue-600"
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name ? <p className="error">{formik.errors.name}</p> : null}
          </div>

          <div className="relative">
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-teal-800 focus:outline-none focus:border-blue-600"
              placeholder="Address"
            />
            {formik.touched.address && formik.errors.address ? <p className="error">{formik.errors.address}</p> : null}
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-teal-800 focus:outline-none focus:border-blue-600"
              placeholder="Email Address"
            />
            {formik.touched.email && formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-teal-800 focus:outline-none focus:border-blue-600"
              placeholder="Phone Number"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p className="error">{formik.errors.phoneNumber}</p> : null}
          </div>

          <div className="relative">
            <select
              id="job"
              name="job"
              value={formik.values.job}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full py-2.5 px-4 text-sm text-gray-400 bg-transparent border-b-2 border-teal-800 focus:outline-none focus:border-blue-600"
            >
              <option value="job" disabled hidden>Job</option>
              <option value="internship">Internship</option>
              <option value="traineeship">Traineeship</option>
            </select>
            {formik.touched.job && formik.errors.job ? <p className="error">{formik.errors.job}</p> : null}
          </div>

          <div className="relative flex items-center">
            <div className="relative bg-gray-100 rounded-lg border border-gray-300 shadow-sm py-2 px-4 flex items-center justify-center">
              <span className="text-gray-500">{formik.values.cv ? formik.values.cv.name : "No file chosen"}</span>
              <input
                type="file"
                id="cv"
                name="cv"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(event) => formik.setFieldValue("cv", event.currentTarget.files[0])}
              />
            </div>
            <Button
              type="button"
              onClick={() => document.getElementById('cv').click()}
              className="ml-2 bg-slate-800 hover:bg-slate-400 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
              label="Choose File"
            />
            {formik.touched.cv && formik.errors.cv ? <p className="error">{formik.errors.cv}</p> : null}
          </div>

          <Button
            type="submit"
            className=" font-serif bg-transparent text-black border border-black hover:bg-black hover:text-white hover:border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2 text-center"
            label="Apply Now"
          />
        </div>
      </form>
    </div>
  );
}

export default JoinUsForm;
