import React from 'react'

const Eligibility = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:px-32 px-8 py-20'>
                <div className='bg-[#0C7E81]'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-gray-50 text-center'>Compulsory Subjects</h2>
                        <ul className='list-disc text-[13px] text-gray-50 px-8 py-3'>
                            <li>Urdu</li>
                            <li>English</li>
                            <li>Islamic Studies (Part-I)</li>
                            <li> Pak. Studies (Part-II)</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-yellow-500'>
                    <div className=' py-4'>
                        <h2 className='text-2xl font-bold text-[#0C7E81] text-center'>Elective Subjects</h2>
                        <ul className='list-disc text-[13px] text-gray-800 px-8 py-3'>
                            <li>Civics</li>
                            <li>Physics Education</li>
                            <li>Economics</li>
                            <li>Fine Arts</li>
                            <li>English Literature</li>
                            <li>Home Economics</li>
                            <li>Islamiyat Elective</li>
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

export default Eligibility