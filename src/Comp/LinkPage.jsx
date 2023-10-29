import React from 'react'
import { Link } from 'react-router-dom'

const LinkPage = () => {
  return (
     <>

        <Link to="/agent">Agent</Link>
        <br />
        <Link to="/admin">Admin</Link>
        <br />
        <Link to="/student">Student</Link>
        <br />
        <Link to="/common">Common</Link>
        <br />
        <Link to="/login">Login</Link>
        <br /> 
        <Link to="/">Home</Link>
           

     </>
  )
}

export default LinkPage