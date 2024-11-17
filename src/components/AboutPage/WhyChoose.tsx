import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyChoose = () => {
    return (
        <div className='md:px-32 px-8 py-24 bg-gray-100'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className=''>
                    <h1 className='text-yellow-500 text-3xl font-bold'>Why Choose</h1>
                    <p className='text-3xl font-bold text-[#0c7e81]'>Superior College Lalazar Campus</p>
                    <p className='text-[13px] text-gray-700 py-5'>
                        We are committed to enhancing the potentials of students, faculty, staff, and
                        all segments of our society by bringing a positive change in their personal and
                        career lives, motivating them for self-enlightenment through Quality Education,
                        Personality Development, True Professionalism, and Career Planning; thus, adding
                        value to our nation, and ultimately to humanity!
                        </p>
                    <div className='flex gap-10 text-[15px] text-gray-700 py-10'>
                        <ul className='list-disc'>
                            <li>Intermediate Programs</li>
                            <li>DAE Programs</li>
                            <li>ADP Programs</li>
                        </ul>
                        <ul className='list-disc'>
                            <li>Student LMS</li>
                            <li>Modern Infrastructure</li>
                            <li>In-House Labs</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='-pt-6'>
                        <Image src={'/g1.webp'} alt='facility' width={200} height={200} />
                        <br />
                        <Link href={'/campus-facilities'}><p className='underline text-[13px] text-[#0c7e81] hover:text-xl duration-300 transition-all'>View all facilities</p></Link>
                    </div>
                    <div>
                        <Image src={'/g2.webp'} alt='facility' width={280} height={280} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose