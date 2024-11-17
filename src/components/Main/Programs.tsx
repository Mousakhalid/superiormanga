import React from 'react'

const Programs = () => {
    return (
        <div className='bg-[#0C7E81]'>
            <div className='md:px-32 px-8 py-16 '>
                <div>
                    <div className='space-y-3'>
                        <h1 className='md:text-4xl text-2xl font-bold uppercase text-gray-50'>
                            Intermediate at
                            <br />
                            Superior College Lalazar Campus
                        </h1>
                        <p className='text-yellow-500 text-3xl'>Our Programmes:</p>
                        <p className='font-thin text-gray-50'>
                            Superior College Lalazar Campus offers a purpose-built campus with state-of-the-art facilities, supported by an experienced faculty. At Superior, you have access to a wide variety of courses designed to empower your educational journey and prepare you for a successful future.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-5 grid-cols-1 gap-8 mt-8'>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>FSC.</h2>
                            <p className='text-yellow-500'>Pre-Medical</p>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>This programme aims to deliver diverse knowledge and education related to medicine
                                and other related fields.</p>
                        </div>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>FSC.</h2>
                            <p className='text-yellow-500'>Pre-Engineering</p>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>This programme serves as a gateway to prepare our students with practical knowledge and education of engineering fields in order to achieve their place in the top engineering universities of the country.</p>
                        </div>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>F.A.</h2>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>Our F.A programme is designed for students who are interested in developing careers in the fields of arts, humanities, journalism, media and other related fields</p>
                        </div>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>ICS</h2>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>ICS programme is designed to enhance the skills of our students in computer science and information technology.</p>
                        </div>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>I.Com</h2>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>Our I. Com programme helps build your skills in
                            the fields of commerce and accounting, leading to promising careers in accountancy and other related fields.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs