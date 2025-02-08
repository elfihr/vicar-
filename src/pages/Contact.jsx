import React from 'react'
import contactHero from '../assets/img/contact.png'

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import profile from '../assets/whatsapp.webp'


export const Contact = () => {
    return (
        <section className='w-full'>
            <FloatingWhatsApp
                avatar={profile}
                accountName={'Marcus'}
                chatMessage={'Ola, Tudo bem? Posso ajudar Você?'}
                statusMessage={'Sócio'}
                notification={true}
                notificationDelay={10}
                placeholder={'Mensagem'}
            />

            <div className='h-[60vh] w-full bg-cover bg-center bg-fixed' style={{ backgroundImage: `url(${contactHero})` }}></div>

            <div className='flex flex-col gap-4  '>

                <div className='mb-4 flex flex-col items-center  ' >
                    <h3 className='text-4xl mb-4 font-semibold uppercase pt-4'>Contact</h3>
                    <div className='border-[#e84d62] w-20 border-4 mt-[-8px]'></div>
                </div>
                <p className='px-20'>
                    In today's digital world, staying connected is easier than ever! Whether you prefer email, phone calls, or social media, having multiple contact options ensures seamless communication. Whether for customer support, business inquiries, or personal connections, providing clear and accessible contact information helps build trust and convenience. Let’s explore the best ways to stay in touch!
                </p>

                <div className='bg-slate-300 flex flex-col gap-4 py-4'>
                    <h4 className='text-center text-2xl font-semibold'>Send a Message to Us</h4>

                    <form method='POST' className='flex flex-col gap-4 items-center'>
                        <div className='flex gap-4 max-sm:flex-col'>
                            <div className='flex flex-col gap-4'>
                                <input className='border-[1px] border-black w-80' type='name' placeholder='Full Name*' required></input>
                                <input className='border-[1px] border-black w-80' type='email' placeholder='Email*' required></input>
                                <input className='border-[1px] border-black w-80' type='number' placeholder='Phone*' required></input>
                                <input className='border-[1px] border-black w-80' type='text' placeholder='Subject*' required></input>
                            </div>
                            <textarea className='w-80 border-[1px] border-black' rows={6} placeholder='Type your Message*' name='message' required></textarea>

                        </div>
                        <button className='bg-[#BE3144] p-[1rem] rounded-md hover:bg-[#e84d62] hover:scale-105 active:scale-95 duration-300 px-4 py-2 rounded-md text-white  mt-4' type='submit'>Enviar Menssagem</button>
                    </form>
                </div>


            </div>


        </section>
    )
}
