import React, { useState } from 'react';

/**
 * Email Input
 * Password Input
 * Login Button
 * 
 * Option to create new account / sign up
 */

const Login = () => {
  const [state, setState] = useState({})
  const [errors, setErrors] = useState({})

  const validateForm = (fieldName) => {
    if(!state[fieldName]) {
      setErrors(prevState => ({
        ...prevState,
        [fieldName]: `${fieldName} is empty`
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        [fieldName]: undefined
      }))
    }
  }

  const onLogin = e => {
    e.preventDefault();

    if(!state.email) {
      setErrors({ email: 'email is empty' })
      return null;
    }

    if(!state.password) {
      setErrors({ password: 'password is empty' })
      return null;
    }

    console.log('Form Submit >', state)
  }

  const onInputChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className='px-10 py-4'>
      <form onSubmit={onLogin} className='w-3/5'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input name="email" type='email' value={state.email} onBlur={() => validateForm('email')} onChange={onInputChange} className='shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          {errors.email && <small className='text-red-600'>{errors.email}</small>}
        </div>
        <div>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Passord</label>
          <input name="password" type='password' value={state.password} onBlur={() => validateForm('password')} onChange={onInputChange} className='shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          {errors.password && <small className='text-red-600'>{errors.password}</small>}
        </div>
        <button type='submit' className='mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
      </form>

      {/* Sign Up Option */}
      <p className='text-grey'>Don't have an account? Sign up here.</p>
    </div>
  )
}

export default Login;