import Image from 'next/image'
import React from 'react'

const Building = () => {
    return (
        <div className='bg-yellow-500'>
            <div className='md:px-32 px-8 py-6'>
                <div>
                    <h1 className='uppercase text-4xl font-bold text-gray-50'>State of the art facilities:</h1>
                </div>
                <br />
                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 py-8'>
                    <div className='space-y-3'>
                        <Image src={'/building.png'} alt='Icon Superior Lalazar' width={80} height={80} />
                        <h2 className='font-bold uppercase text-gray-50 text-xl'>Purpose-built Campus:</h2>
                        <p className='text-[12px] text-gray-50 font-thin'>At Superior College Lalazar Campus, we ensure students have a conducive and comfortable environment for academic success. Our purpose-built campus features fully air-conditioned classrooms and halls, integrated IP boards and projectors for engaging lectures, a virtual clinic accessible to all students, and a load-shedding-free environment to keep learning uninterrupted.</p>
                    </div>
                    <div className='space-y-3'>
                        <Image src={'/lab.png'} alt='Icon Superior Lalazar' width={80} height={80} />
                        <h2 className='font-bold uppercase text-[#0C7E81] text-xl'>Well-Equipped Labs & Libraries:</h2>
                        <p className='text-[12px] text-gray-50 font-thin'>Superior College Lalazar Campus also offers an extensive academic library filled with invaluable books across various fields, including IT, business, literature, language, religion, philosophy, and more. Our commitment to practical learning is supported by well-equipped labs featuring the latest and most advanced equipment, providing students with hands-on experience and an enriching academic journey.</p>
                    </div>
                    <div className='space-y-3'>
                        <Image src={'/career.png'} alt='Icon Superior Lalazar' width={80} height={80} />
                        <h2 className='font-bold uppercase text-gray-50 text-xl'>Career oriented courses:</h2>
                        <p className='text-[12px] text-gray-50 font-thin'>Superior College Lalazar Campus offers career-oriented courses designed to equip students with skills that meet industry standards. These programs cover key fields like IT, business management, health sciences, and commerce, providing a balance of theory and practical training. Through workshops and industry connections, students gain valuable insights and hands-on experience, ensuring they are career-ready upon graduation.</p>
                    </div>
                    <div className='space-y-3'>
                        <Image src={'/counselling.png'} alt='Icon Superior Lalazar' width={80} height={80} />
                        <h2 className='font-bold uppercase text-[#0C7E81] text-xl'>Career Counselling:</h2>
                        <p className='text-[12px] text-gray-50 font-thin'>Superior College Lalazar Campus provides dedicated career counseling services to help students navigate their career paths. Our experienced counselors offer guidance on academic choices, skill development, and career opportunities, ensuring students make informed decisions aligned with their goals. Regular workshops and one-on-one sessions keep students on track, empowering them to pursue successful and fulfilling careers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Building
