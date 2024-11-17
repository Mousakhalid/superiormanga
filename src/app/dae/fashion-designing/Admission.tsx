import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Admission = () => {
    return (
        <div className='bg-adm'>
            <div className='bg-admission'>
                <div className='py-8'>
                    <div className='flex items-center justify-center flex-col space-y-4 py-12'>
                        <h1 className='text-3xl font-bold text-[#0C7E81]'>ADMISSIONS OPEN</h1>
                        <p className='text-gray-700 text-[13px]'>Join Superior and be a part of progressing future</p>
                        <Link href={'/apply-now'}>
                            <button className='text-gray-50 font-medium bg-[#0C7E81] py-4 px-9'>ENROLL HERE !</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admission