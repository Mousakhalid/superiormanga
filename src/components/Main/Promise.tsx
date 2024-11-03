import Image from 'next/image'
import React from 'react'

const Promise = () => {
    return (
        <div className='py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2  px-8 md:space-x-8 space-x-0'>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='bg-yellow-500 text-gray-50 space-y-3 px-7 flex flex-col justify-center py-14'>
                        <h2 className='text-3xl font-bold'>Grow with Triumph</h2>
                        <p className='font-bold'>A Superior Promise</p>
                        <p className='text-[12px]'>We are an Emotionally Intelligent Institute helping individuals to explore themselves and influence others for shared goals. We help students become inspired learners, aspires, and dreamers. Our goal is to motivate them to become the masters of their fate and captains of their souls.                        </p>
                    </div>
                    <div>
                        <Image src={'/growth.webp'} alt='Image for growth' className='h-full w-full' height={5000} width={3000} />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='bg-[#0C7E81] text-gray-50 space-y-3 px-7 flex flex-col justify-center py-14'>
                        <h2 className='text-3xl font-bold'>A Vibrant Campus Experience</h2>
                        <ul className='text-[12px] list-disc'>
                            <li>Living the Moments</li>
                            <li>16 life changing yearly events</li>
                            <li>Entertaining the Learning</li>
                            <li>Optimal Learning Environment</li>
                            <li>Finest Campus Facilities</li>
                        </ul>
                    </div>
                    <div>
                        <Image src={'/boy.webp'} alt='Image for growth' className='h-full w-full' height={5000} width={3000} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promise