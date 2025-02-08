import React, { useRef, useState } from 'react'

import video01 from '../assets/Video/clean.mp4'

import serviceImgHero from '../assets/img/services.jpg'
import { outServices } from '../helper/Helper'
import CallIcon from '@mui/icons-material/Call';

export const Services = () => {

  const videoRef = useRef < HTMLVideoElement > (null);
  const [isPlaying, setIsPlaying] = useState(false);

  //VideoPlay
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <section >
      <div className='h-[60vh] bg-center bg-cover bg-fixed' style={{ backgroundImage: `url(${serviceImgHero})` }}></div>

      {/*=====ServicesSection=====*/}
      <div className='flex flex-col px-20 py-8 items-center'>
        <div className='mb-4 flex flex-col items-center'>
          <h3 className='text-4xl mb-4 font-semibold uppercase'>SERVICES</h3>
          <div className='border-[#e84d62] w-20 border-4 mt-[-8px]'></div>
        </div>
        <div>
          <p>
            At Vicar Enterprise, we understand the importance of keeping your vehicle in top condition, ensuring safety, performance, and longevity. Our comprehensive range of services is designed to meet your car's needs at every stage, whether it's routine maintenance or major servicing.
            <br />
            From interim car services that include essential checks like oil changes and tire pressure inspections, to full and major car services that cover critical components such as brake pads, transmission fluids, and timing belts, we provide everything your car needs to run smoothly.
            <br />
            We also specialize in oil & filter changes, tire rotations, wheel alignments, wiper blade replacements, and air filter services, ensuring your vehicle remains reliable on the road.
            <br />
            At Vicar Enterprise, we go the extra mile so you can drive with confidence. Trust us to keep your car in peak condition—because your journey matters.
          </p>
          <div className='grid grid-cols-4 max-[1120px]:grid-cols-2 max-[670px]:grid-cols-1 gap-4 justify-items-center mx-auto mt-8'>
            {outServices.map((services, index) => {
              return (
                <div className='bg-[#e84d62] w-60 h-72 p-4 flex flex-col items-center rounded-md hover:scale-105 duration-300'>
                  <img className='w-16' src={services.icon} />
                  <h4 className='font-bold text-[1.6rem] uppercase text-white text-center '>{services.name}</h4>
                  <p>{services.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      <div className='flex w-full pb-6 flex-col items-center px-20 max-sm:px-8'>
        <h3 className='text-3xl mb-4 font-bold uppercase text-center'>Leave the dust <b className='text-[#e84d62]'>in the past</b></h3>
        <div className='border-[#e84d62] w-20 border-4 mt-[-8px] '></div>
        <video
          className="w-[60%] max-[800px]:w-[100%] shadow-lg border-[#e84d62] border-4 my-8"
          controls
          autoPlay
          loop
          muted
        >
          <source src={video01} type='video/mp4' />

        </video>
        <p>At Vicar, we treat your car like our own!Our team is dedicated to providing top-quality
          cleaning with attention to every detail, ensuring a spotless shine inside and out. We use the best
          products and techniques to give your car the care it deserves. Because a clean car is a happy car!</p>

        <button className='mt-4 text-2xl bg-[#BE3144] p-[1rem] rounded-md hover:bg-[#e84d62] text-white hover:scale-105 active:scale-95 duration-300'>
          <a href='./contact' className='flex items-center '>
            <CallIcon sx={{fontSize:32}} />
            <h4 className='ml-2 font-bold text-[2rem] mb-[0.3rem]'>Call Us</h4>
          </a>
        </button>
      </div>


    </section>
  )
}
