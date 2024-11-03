import React from 'react'

const Eligibity = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:px-32 px-8 py-20'>
                <div className='bg-[#0C7E81]'>
                    <div className=' py-4 text-gray-50'>
                        <h2 className='text-2xl font-bold text-gray-50 text-center'>Compulsory Subjects</h2>
                        <ul className='list-disc text-[13px] text-gray-50 px-8 py-3'>
                            <li>Urdu</li>
                            <li>English</li>
                            <li>Islamic Studies (Part 1)</li>
                            <li>Pak Studies (Part 2)</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-yellow-500'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-[#0C7E81] text-center'>Elective Subjects</h2>
                        <p className='text-[13px] text-gray-800 px-8 py-4'>Students can chose any one of the following combinations</p>
                        <ul className='list-disc text-[13px] text-gray-800 px-8 py-3'>
                            <li>Phy, Math, Comp Science</li>
                            <li>Stat, Math, Comp Science</li>
                            <li>Stat, Eco, Comp Science</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-[#0C7E81]'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-gray-50 text-center'>Eligibility Criteria</h2>
                        <ul className='list-disc text-[13px] text-gray-50 px-8 py-3'>
                            <li>Matric or Equivalent</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eligibity