import React from 'react'

const Eligibility = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:px-32 px-8 py-20'>
                <div className='bg-[#0C7E81]'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-gray-50 text-center'>Subjects DAE-<br />Computer Hardware 1-2 Years</h2>
                        <ul className='list-disc text-[13px] text-gray-50 px-8 py-3'>
                            <li>Islamiat</li>
                            <li>Pak Studies</li>
                            <li>Applied Mathematics</li>
                            <li>Applied Chemistry</li>
                            <li>Computer Application</li>
                            <li>Applied Physics</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-yellow-500'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-[#0C7E81] text-center'>Subjects DAE-<br />Computer Hardware III</h2>
                        <ul className='list-disc text-[13px] text-gray-800 px-8 py-3'>
                            <li>Electrical Essential</li>
                            <li>Network</li>
                            <li>Electronic Devices & Circuits I</li>
                            <li>Electrical Drawing</li>
                            <li>Computer Application</li>
                            <li>General Engineering Workshop</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-[#0C7E81]'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-gray-50 text-center'>Eligibility Criteria / Duration</h2>
                        <ul className='list-disc text-[13px] text-gray-50 px-8 py-3'>
                            <li>45% in Matric/Intermediate / 3 Years</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eligibility