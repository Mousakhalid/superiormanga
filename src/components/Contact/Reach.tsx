import React from 'react'
import Form from './Form'

const Reach = () => {
    return (
        <div className='bg-[#0C7E81]'>
            <div className='md:px-32 px-8 py-16'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div >
                        <h2 className='text-2xl font-semibold uppercase text-yellow-500 pb-6'>Contact Details</h2>
                        <div className='flex items-center justify-between py-3'>
                            <p className='text-yellow-500 font-bold uppercase'>Address</p>
                            <p className='text-gray-50 text-[13px]'>Tulsa Chowk Near PSO Petrol Pump, Rawalpindi, Islamabad</p>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='text-yellow-500 font-bold uppercase'>Telephone</p>
                            <p className='text-gray-50 text-[13px]'>
                                +92 (0) 300-1119288
                                <br />
                                (07:00am to 09:00pm)
                            </p>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='text-yellow-500 font-bold uppercase'>E-MAIL</p>
                            <p className='text-gray-50 text-[13px]'>info@superiorlalazar.com</p>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='text-yellow-500 font-bold uppercase'>Social</p>
                            <p className='text-gray-50 text-[13px]'></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-2xl font-semibold text-yellow-500 pb-6 uppercase'>Send message</h2>
                        </div>
                        <div>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    )
}

export default Reach