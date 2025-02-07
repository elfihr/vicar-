import React from 'react'

import topImg from '../assets/img/About01.jpg'
import AboutPerfil from '../assets/img/AboutPerfil.jpg'
import AboutMVV from '../assets/img/About02.jpg'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const About = () => {
    return (
        <section className='flex justify-center flex-col z-1'>
            <div className='h-[60vh] bg-cover bg-center w-[100%] bg-fixed max-lg:bg-scroll' style={{ backgroundImage: `url(${topImg})` }}></div>

            <div className='bg-slate-300  pt-12 flex justify-center items-center p-12 max-lg:flex-col max-sm:px-2'>
                <div className='w-[20rem] flex flex-col items-center'>
                    <img className=' h-80 border-white border-8' src={AboutPerfil} alt='imagem' />
                    <p className='font01 text-3xl font-semibold mt-4 rotate-[-4deg] underline'>Peter Viggiani</p>
                </div>
                <div className='w-[70%] ml-4 flex flex-col items-center '>
                    <div className='flex flex-col items-center mb-4'>
                        <h3 className='text-4xl mb-4 font-semibold uppercase'>About Us</h3>
                        <div className='border-[#e84d62] w-20 border-4 mt-[-8px]'></div>
                    </div>

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
            {/* =====mvv Section===== */}
            <div className='flex flex-row-reverse px-20 py-12 bg-slate-100'>
                <img className='h-[18rem] border-[#e84d62] border-8' src={AboutMVV} />

                <div>

                </div>
                <p className='ml-4'>
                    <b>Vision:</b>
                    To be the leading automotive repair and maintenance enterprise, recognized for excellence, innovation, and trust, ensuring safe and high-performance vehicles for all our customers.
                    <br /><br />
                    <b>Mission:</b>
                    To provide top-quality mechanical services with precision, efficiency, and integrity, using advanced technology and skilled professionals to exceed customer expectations while fostering long-term relationships.
                    <br /><br />
                    <b>Values:</b>
                    <br />
                    &#11166; Excellence – Commitment to superior service and continuous improvement. <br />
                    &#11166; Integrity – Transparency and honesty in all interactions. <br />
                    &#11166; Innovation – Adoption of cutting-edge automotive solutions. <br />
                    &#11166; Customer Focus – Ensuring satisfaction and trust. <br />
                    &#11166; Sustainability – Responsible practices for a greener future. <br />
                </p>
            </div>
        </section>
    )
}
