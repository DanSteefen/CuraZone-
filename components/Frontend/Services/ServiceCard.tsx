import { ServiceProps } from '@/types/types'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ServiceCard({service} : {service : ServiceProps}) {
  return (
    <Link href={`/services/${service.slug}`} 
        className='rounded-md bg-slate-100 hover:bg-slate-200 duration-300 flex gap-4 overflow-hidden'>
        <Image 
            src={service.image}
            width={1170}
            height={848}
            alt={service.title}
            className='w-1/3 object-cover aspect-video'
        />
        <div className='flex flex-col w-2/3 py-4'>
            <h2>{service.title}</h2>
            <p className='text-[0.6rem]'>900 Doctors are available</p>
        </div>
    </Link>
  )
}

export default ServiceCard