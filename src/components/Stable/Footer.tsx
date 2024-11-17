import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#0C7E81]'>
            <div className='md:px-32 px-8 py-16'>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='space-y-6'>
                        <div className='flex gap-5 items-center'>
                            <Image src={'/logo2.png'} className='rounded-[50%] border-white border-2' alt='Superior College Manga' width={80} height={80} />
                            <p className='text-xl font-serif font-medium text-gray-50'>Superior College Lalazar <br /> Campus</p>
                        </div>
                        <div className='text-gray-50'>
                            <p className='text-[12px]'>
                                We are committed to transform the lives of students, faculty and staff by providing them a Superior learning experience. Our plan EQ & IQ enables them to lead a meaningful & rewarding life.
                            </p>
                        </div>

                        <div>
                            {/* Icons */}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-gray-50'>Contact Info</h2>
                        <ul className='text-gray-50 text-[12px]'>
                            <li><strong>Phone:</strong> +92 (0) 300011129</li>
                            <li><strong>Email:</strong> info@superiorlalazar.com</li>
                            <li><strong>Address:</strong>Tulsa Chowk, Near PSO Petro Pump,Lalazar Rawalpindi</li>
                            <li className='py-4'><strong>Experience EduTech app on mobile:</strong></li>
                            <div className='flex py-3'>
                                <Image src={'/google.png'} alt='superior' width={120} height={120} />
                                <Image src={'/stroe.png'} alt='superior' width={120} height={120} />
                            </div>
                        </ul>
                    </div>
                    <div>
                        <Image src={'/sup_map.png'} alt='Superior map' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer