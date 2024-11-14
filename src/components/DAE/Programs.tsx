import React from 'react'

const ProgramsDAE = () => {
    return (
        <div className='bg-[#0C7E81]'>
            <div className='md:px-32 px-8 py-16 '>
                <div>
                    <div className='space-y-3'>
                        <h1 className='md:text-4xl text-2xl font-bold uppercase text-gray-50'>
                            DAE at
                            <br />
                            Superior College Manga Campus
                        </h1>
                        <p className='text-yellow-500 text-3xl'>Our Programmes:</p>
                        <p className='font-thin text-gray-50'>
                            Superior College Manga Campus offers a purpose-built campus with state-of-the-art facilities, supported by an experienced faculty. At Superior, you have access to a wide variety of courses designed to empower your educational journey and prepare you for a successful future.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-8'>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>DAE</h2>
                            <p className='text-yellow-500'>Electrical Technology</p>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>
                                This program aims to provide comprehensive knowledge and education in Electrical Technology and related engineering fields.
                            </p>
                        </div>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>DAE</h2>
                            <p className='text-yellow-500'>Diploma in Office Management</p>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>
                                This program serves as a gateway to equip our students with practical skills and knowledge in office management, preparing them to excel in leading universities and professional environments across the country.
                            </p>
                        </div>
                        <div className='bg-gray-50 py-6 rounded-xl px-4'>
                            <h2 className='text-2xl text-[#0C7E81] font-semibold'>DAE</h2>
                            <p className='text-yellow-500'>Chemical Technology</p>
                            <p className='text-[#0c7e81] text-[12px] font-semibold'>
                                Our Chemical Technology program is designed for students interested in building careers in the fields of chemical engineering, industrial processes, and related sciences, providing them with the knowledge and skills necessary for success in these dynamic industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramsDAE