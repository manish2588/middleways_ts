import React from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Define the shape of the form values
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (
      values: FormValues,
      { resetForm, setSubmitting, setStatus, setErrors, setTouched }: FormikHelpers<FormValues>
    ) => {
      console.log("Form data submitted:", values); // Log form data before sending

      try {
        const response = await axios.post(
          "http://localhost:5004/submit-form",
          values
        );
        console.log(response.data);
        alert("Message Sent Successfully. We will reply to you soon");
        resetForm();
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Failed to send message. Please try again.");
        // You can optionally handle form errors here, like:
        setErrors({ message: "There was an error submitting the form" });
      } finally {
        setSubmitting(false); // Make sure to reset submitting state after the form is submitted
      }
    },
  });

  return (
    <div>
      <form className="max-w-md mx-auto mt-6" onSubmit={formik.handleSubmit}>
        <div>
          <p className="text-center text-xl text-blue-600 font-serif">
            Don't be stranger
          </p>
          <h1 className="text-center text-3xl mt-4 text-blue-600 font-serif">
            You tell us. We Listen
          </h1>
        </div>

        <div className="relative z-0 w-full mb-5 group mt-4">
          <input
            type="text"
            name="name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-blue-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none peer"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-blue-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none peer"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-blue-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none peer"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="error">{formik.errors.phone}</p>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border border-blue-600 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none peer"
            placeholder="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="error">{formik.errors.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-transparent font-serif text-black border border-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-transparent dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
