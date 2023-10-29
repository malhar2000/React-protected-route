import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/AuthSlice' 
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {

    const [role, setRole] = useState('')
    const dispatch = useDispatch() 

    // setup for redirecting to the page that the user was trying to access before being redirected to the login page
    const location = useLocation() 
    const from = location.state?.from || { pathname: '/' }
    const navigate = useNavigate() 

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authActions.setRole(role)) 
        navigate(from, { replace: true })
    }

  return (
     <>
        <input type="text" placeholder="Enter Role" value={role} onChange={(e) => setRole(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
     </>
  )
}

export default Login