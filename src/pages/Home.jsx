import React from 'react'
import hero from '../assets/img/heroHome.jpg'

import CallIcon from '@mui/icons-material/Call';

const Home = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hero})` }}
      className='h-[110vh] bg-center bg-cover flex flex-col justify-center'>
      <div className='text-white ml-28'>
        <h3 className=' uppercase text-8xl font-bold'>ViCari</h3>
        <h4 className='text-5xl'>Car Mechanic</h4>
        <button className='mt-4 text-2xl bg-[#BE3144] p-[1rem] rounded-md hover:bg-[#e84d62] hover:scale-105 active:scale-95 duration-300'>
          <a href='./contact' className='flex items-center '>
            <CallIcon sx={{fontSize:48}} />
            <h4 className='ml-2 font-bold text-[2.8rem] mb-[0.3rem]'>Contact Us</h4>
          </a>
        </button>
      </div>




    </section>
  )
}

export default Home