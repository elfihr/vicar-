import React from 'react'
import topImg from '../assets/img/About01.jpg'
import AboutPerfil from '../assets/img/AboutPerfil.jpg'

export const About = () => {
    return (
        <section className='flex justify-center flex-col'>
            <div className='h-[60vh] bg-cover bg-center w-[100%] bg-fixed max-lx-' style={{ backgroundImage: `url(${topImg})` }}></div>
            
            <div className='bg-slate-300  pt-12 flex justify-center items-center p-12'>
                <div className='w-[20rem] flex flex-col items-center'>
                    <img className=' h-80 border-white border-8' src={AboutPerfil} alt='imagem' />
                    <p className='font01 text-3xl font-semibold mt-4 rotate-[-4deg] underline'>Peter Viggiani</p>
                </div>
                <div className='w-[70%] ml-4 flex flex-col items-center '>
                    <h3 className='text-4xl mb-4 font-semibold'>About Us</h3>
                    <p>
                        Established in 2020, Vicar was founded with a simple yet essential goal: to provide high-quality car maintenance and professional washing services that keep vehicles running smoothly and looking their best. We know that a car is more than just a mode of transportation—it’s a reflection of its owner and a valuable investment that deserves expert care.
                        <br /><br />
                        At Vicar, we combine technical expertise, modern equipment, and a passion for automotive care to deliver outstanding results. Whether it’s routine maintenance, oil changes, brake checks, or a thorough car wash, our dedicated team ensures that every vehicle receives the attention it needs to perform at its best. We believe that proper maintenance not only extends the life of a car but also enhances safety, efficiency, and driving comfort.
                        <br /><br />
                        Customer satisfaction is at the heart of everything we do. We are committed to offering reliable, affordable, and high-standard services, always prioritizing transparency and trust. Our professionals are trained to handle vehicles with precision, providing both preventive and corrective maintenance solutions tailored to each car’s needs.
                        <br /><br />
                        When you bring your car to Vicar, you’re not just receiving a service—you’re experiencing care, quality, and dedication. Let us take care of your vehicle while you enjoy the peace of mind that comes with expert automotive service!
                    </p>
                </div>

            </div>
        </section>
    )
}
