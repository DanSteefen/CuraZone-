import MegaMenu from '@/components/Frontend/MegaMenu';
import Navbar from '@/components/Frontend/Navbar';
import React, { ReactNode } from 'react'

function Layout({children} : {children:ReactNode}) {
  return (
    <div>
            <Navbar/>
        <div className="max-w-5xl mx-auto py-6">
            <MegaMenu href={''}/>
        </div>
        {children}
    </div>
  )
}

export default Layout;