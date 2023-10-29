import React from 'react'
import { Outlet } from 'react-router-dom'
import LinkPage from './Comp/LinkPage'

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
      <LinkPage />
    </div>
  )
}

export default Layout