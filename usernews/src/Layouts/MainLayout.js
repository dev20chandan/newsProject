import React from 'react'
import Header from './Header'
import Dashboard from '../Components/Dashboard'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
   <>
   <Header />
  <Outlet />
   <Footer />
   </>
  )
}

export default MainLayout