import React from 'react'
import contactHero from '../assets/img/contact.png'

export const Contact = () => {
    return (
        <section className='w-full'>
            <div className='h-[60vh] w-full bg-cover bg-center bg-fixed' style={{backgroundImage: `url(${contactHero})`}}></div>
            <div className='mb-4 flex flex-col items-center'>
                <h3 className='text-4xl mb-4 font-semibold uppercase'>Contact</h3>
                <div className='border-[#e84d62] w-20 border-4 mt-[-8px]'></div>
            </div>
            <div>
                <p>
                    In today's digital world, staying connected is easier than ever! Whether you prefer email, phone calls, or social media, having multiple contact options ensures seamless communication. Whether for customer support, business inquiries, or personal connections, providing clear and accessible contact information helps build trust and convenience. Let’s explore the best ways to stay in touch!
                </p>
            </div>
        </section>
    )
}
