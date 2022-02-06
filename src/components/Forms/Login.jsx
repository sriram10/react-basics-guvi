import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';

/**
 * Email Input
 * Password Input
 * Login Button
 * 
 * Option to create new account / sign up
 */

const loginFormValidation = Yup.object().shape({
  email: Yup.string().email('Enter valid email').required('Enter email'),
  password: Yup.string().required('Enter password')
})

const Login = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {},
    validationSchema: loginFormValidation,
    onSubmit: (v) => {
      console.log('Login Submit >', v)
    }
  })

  return (
    <div className='px-10 py-4'>
      <form onSubmit={handleSubmit} className='w-3/5'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input
            name="email"
            type='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className='shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          {errors.email && <small className='text-red-600'>{errors.email}</small>}
        </div>
        <div>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Passord</label>
          <input
            name="password"
            type='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className='shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          {errors.password && <small className='text-red-600'>{errors.password}</small>}
        </div>
        <button type='submit' className='mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
      </form>

    </div>
  )
}

export default Login;