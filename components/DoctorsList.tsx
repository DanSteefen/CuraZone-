import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton';
import Link from 'next/link';
import DoctorCard from './DoctorCard';
import { Map } from 'lucide-react';
import DoctorsListCarousel from './DoctorsListCarousel';

function DoctorsList(
    {title = "Telehealth Visit", isInPerson, className = "bg-pink-100 py-8 lg:py24"} : 
    {title ?: string; isInPerson ?: boolean; className ?: string}){

    const doctors = [
        {
            name : "Bharatha"
        },
        {
            name : "Bharatha"
        },
        {
            name : "Bharatha"
        },
        {
            name : "Bharatha"
        },
        {
            name : "Bharatha"
        },
        {
            name : "Bharatha"
        },
    ]

  return (
    
    <div className = {className}>
        <div className='max-w-6xl max-auto'>
            <SectionHeading title={title}/>
        
            <div className='py-4 flex items-center justify-between'>
                {isInPerson ?(
                    <Link href= "" className='text-sm flex items-center text-blue-700 font-semibold'>
                        <Map className='mr-2 flex-shrink-0 w-4 h-4'/>
                        <span> Map View </span>
                    </Link>
                ):(
                    <ToggleButton/>
                )}
                <Link className='py-3 px-6 border border-blue-600 bg-white' href="#">See All</Link>
            </div>
            <div className='py-6'>
                   {/* {
                    doctors.map((doctor, d) => {
                        return <DoctorCard key={d} isInPerson = {isInPerson}/>
                    })
                   } */}
                   <DoctorsListCarousel doctors={doctors} isInPerson = {isInPerson}/>
            </div>
        </div>
    </div>
  )
}

export default DoctorsList;