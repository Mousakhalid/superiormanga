import React from 'react'

const Vision = () => {
    return (
        <div className='md:px-32 px-8 py-16 bg-gray-100'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='bg-[#0C7E81] py-8 px-7 space-y-3'>
                    <h2 className='text-3xl font-bold text-gray-50'>Our Vision</h2>
                    <p className='text-[13px] text-gray-50'>To establish ourselves as the premier educational institution in the Manga region, inspiring students to achieve academic excellence and personal growth.</p>
                </div>
                <div className='bg-yellow-500 py-8 px-7 space-y-3'>
                    <h2 className='text-3xl font-bold text-[#0C7E81]'>Our Mission</h2>
                    <p className='text-[13px] text-gray-700'>At Superior College Manga Campus, our mission is to enhance the educational journey of every student through a superior learning experience. We emphasize the importance of both emotional and intellectual development, preparing our students to navigate the challenges of a rapidly changing world and lead purposeful lives.</p>
                </div>
                <div className='bg-[#0C7E81] py-8 px-7 space-y-3'>
                    <h2 className='text-3xl font-bold text-gray-50'>Our Values</h2>
                    <ul className='text-gray-50 list-disc'>
                        <li>Student Success</li>
                        <li>Excellence</li>
                        <li>Innovation & Creativity</li>
                        <li>Team work</li>
                        <li>Agility</li>
                        <li>Fairness</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Vision