"use client"
import React, { useState } from 'react'

function DoctorDetails() {

  const [isActive, setIsActive] = useState('availability');

  return (
    <div className='bg-blue-600 text-white'>
      <div className='flex items-center justify-between'>
        <button onClick={() => setIsActive("details")}
          className={isActive === 'details' ? 'py-4 px-8 w-full uppercase tracking-widest bg-blue-600 text-white'
            : 'border border-gray-200 bg-slate-100 w-full text-slate-800 py-4 px-8 uppercase tracking-widest'}>
          Service Details
        </button>

        <button onClick={() => setIsActive("availability")}
          className={isActive === 'availability' ? 'py-4 px-8 w-full bg-blue-600 text-white uppercase tracking-widest'
            : 'border border-gray-200 bg-slate-100 w-full text-slate-800 py-4 px-8 uppercase tracking-widest'}>
          Avalilability
        </button>
      </div>

      <div className='py-8 px-6'>
        {isActive === "availabilithy" ? (
          <div>
            Availability Details Component
          </div>
        ) : (
          <div>
            Service Details Component
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorDetails