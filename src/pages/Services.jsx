import React from 'react'

import serviceImgHero from '../assets/img/services.jpg'
import { outServices } from '../helper/Helper'

export const Services = () => {
  return (
    <section >
      <div className='h-[60vh] bg-center bg-cover' style={{ backgroundImage: `url(${serviceImgHero})` }}></div>

      {/*=====ServicesSection=====*/}
      <div className='flex flex-col px-20 py-12 items-center'>
        <div className='mb-4 flex flex-col items-center'>
          <h3 className='text-4xl mb-4 font-semibold uppercase'>SERVICES</h3>
          <div className='border-[#e84d62] w-20 border-4 mt-[-8px]'></div>
        </div>
        <div>
          <p>
            At Vicar Enterprise, we understand the importance of keeping your vehicle in top condition, ensuring safety, performance, and longevity. Our comprehensive range of services is designed to meet your car's needs at every stage, whether it's routine maintenance or major servicing.
            <br/>
            From interim car services that include essential checks like oil changes and tire pressure inspections, to full and major car services that cover critical components such as brake pads, transmission fluids, and timing belts, we provide everything your car needs to run smoothly.
            <br/>
            We also specialize in oil & filter changes, tire rotations, wheel alignments, wiper blade replacements, and air filter services, ensuring your vehicle remains reliable on the road.
            <br/>
            At Vicar Enterprise, we go the extra mile so you can drive with confidence. Trust us to keep your car in peak condition—because your journey matters.
          </p>
          <div className='grid grid-cols-4 justify-items-center mx-auto mt-8'>
          {outServices.map((services,index) => {
            return(
              <div className='bg-[#e84d62] w-60 h-60 p-4 flex flex-col items-center rounded-md'>
                <img className='w-16' src={services.icon}/>
                <h4 className='font-bold text-[1.6rem] uppercase text-white'>{services.name}</h4>
                <p>{services.desc}</p>
              </div>
            )
          })}
          </div>
        </div>

      </div>


    </section>
  )
}
