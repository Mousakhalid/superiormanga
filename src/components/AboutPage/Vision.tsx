import React from 'react'

const Vision = () => {
    return (
        <div className='md:px-32 px-8 py-16 bg-gray-100'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='bg-[#0C7E81] py-8 px-7 space-y-3'>
                    <h2 className='text-3xl font-bold text-gray-50'>Our Vision</h2>
                    <p className='text-[13px] text-gray-50'>To become the top choice for students in Rawalpindi, setting a benchmark for educational excellence and community engagement.                    </p>
                </div>
                <div className='bg-yellow-500 py-8 px-7 space-y-3'>
                    <h2 className='text-3xl font-bold text-[#0C7E81]'>Our Mission</h2>
                    <p className='text-[13px] text-gray-700'>
                        At Superior College Lalazar Campus, we strive to transform the lives of our students through an outstanding educational experience. Our focus on emotional intelligence and intellectual growth equips students to lead meaningful lives and contribute positively to society.
                    </p>
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