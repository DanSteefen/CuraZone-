import NavBar from '@/components/Dashboard/NavBar';
import Sidebar from '@/components/Dashboard/SideBar';
import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
        <NavBar />
      <div className='flex'>
        <Sidebar />
        <div className='p-8'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;