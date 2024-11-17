import React from 'react'

const CampusLife = () => {
    return (
        <div>
            <div className='md:px-32 px-8 py-8'>
                <div>
                    <h1 className='text-4xl font-bold text-[#0C7E81]'>CAMPUS LIFE:</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 mt-6 gap-8'>
                    <div className='bg-clubs'>
                        <div className='px-4 py-7 flex flex-col justify-between space-y-4 text-gray-50'>
                            <h2 className='font-bold'>Clubs & <br />Societies:</h2>
                            <p className='text-[12px] pt-16'>Superior College Lalazar Campus offers a range of extracurricular activities through societies and clubs, including dramatics, music, debating, literary, IT, sports, and more. These activities allow students to develop their talents and enjoy a balanced college experience.</p>
                        </div>
                    </div>
                    <div className='bg-sports'>
                        <div className='px-4 py-7 flex flex-col justify-between space-y-4 text-gray-50'>
                            <h2 className='font-bold'>Annual Sports <br />Gala:</h2>
                            <p className='text-[12px] pt-16'>At Superior College Lalazar Campus, we organize an annual mega sports event to promote extracurricular and sports activities. Our students actively participate in local, regional, and national competitions, showcasing their talent and teamwork.</p>
                        </div>
                    </div>
                    <div className='bg-study'>
                        <div className='px-4 py-7 flex flex-col justify-between space-y-4 text-gray-50'>
                            <h2 className='font-bold'>Study & <br />
                                Recreational Trips:</h2>
                            <p className='text-[12px] pt-16'>Superior College Lalazar Campus fosters a vibrant student life through various recreational activities, including trips to movie cinemas, seminars, and adventure tours. These experiences enhance social connections and provide students with opportunities to relax and engage outside the classroom.</p>
                        </div>
                    </div>
                    <div className='bg-songs'>
                        <div className='px-4 py-7 flex flex-col justify-between space-y-4 text-gray-50'>
                            <h2 className='font-bold'>Welcome & <br />
                                Farewell Events:
                            </h2>
                            <p className='text-[12px] pt-16'>At Superior College Lalazar Campus, we celebrate memorable moments of fun and joy with our students every year, from the time they join us until graduation. These celebrations create lasting memories and strengthen the bonds within our college community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampusLife
