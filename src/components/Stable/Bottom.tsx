import Link from 'next/link'
import React from 'react'

const Bottom = () => {
    return (
        <div className='bg-yellow-500'>
            <div className='md:flex items-center justify-between py-4 md:px-32 px-8'>
                <div>
                    <p className='text-gray-800 text-[13px]'>
                        © Copyright Superior College Lalazar All Rights Reserved 2024
                    </p>
                </div>
                <div>
                    <ul className='flex flex-row  items-center justify-center space-x-4 text-[13px] text-gray-800'>
                        <li><Link href={'/about'}> About Us</Link></li>
                        <li><Link href={'/admissions'}>Admission</Link></li>
                        <li>
                            <Link href={'/contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bottom