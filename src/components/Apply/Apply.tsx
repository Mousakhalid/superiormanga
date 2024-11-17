import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Apply = () => {
    return ( 
        <div className='bg-gray-100'>
            <div className='md:px-32 px-8 py-24 grid md:grid-cols-2 grid-cols-1 gap-12'>
                <div className='space-y-2'>
                    <Badge className='bg-gray-100 hover:bg-gray-100 text-yellow-500 px-5 uppercase text-[13px] py-2 border border-[#0C7E81]'>Apply Now</Badge>
                    <h2 className='text-3xl font-bold text-[#0C7E81]'>Join Superior College Lalazar Campus to build the superior Pakistan</h2>
                    <p className='text-[13px] text-gray-700'>Superior College Lalazar Campus prepare students to be leaders in their professions.  Students have easy access to online admission in any course.</p>
                    <p className='border-l-4 border-gray-900 text-[16px] text-gray-700'>&nbsp;&nbsp;&nbsp;Superior is truly Superior in building your skills              </p>
                    <br /><br />
                    <Link href={'/about'}><Button className='text-[12px] bg-yellow-500 py-3 uppercase hover:bg-yellow-700'>Discover More</Button></Link>
                </div>
                <div>
                    <Image src={'/g2.webp'} alt='Superio apply' width={300} height={300} />
                </div>
            </div>
        </div>
    )
}

export default Apply