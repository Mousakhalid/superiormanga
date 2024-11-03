import Image from 'next/image'
import React from 'react'

const RectorsMessage = () => {
    return (
        <div className='bg-[#50392F]'>
            <div className='flex items-center justify-between md:flex-row flex-col md:px-32 px-8 py-16 gap-10'>
                <div className='text-gray-50 space-y-3'>
                    <h1 className='text-xl font-bold text-yellow-500'>MESSAGE FROM RECTOR</h1>
                    <p className='border-l-4 border-yellow-500'>&nbsp;&nbsp;She is Pakistan's youngest female Rector and has made significant contributions to education and entrepreneurship.</p>
                    <p className='text-[12px]'>Driven by a passion for academic excellence and a commitment to transformative leadership, Prof. Dr. Sumaira Rehman continues to steer Superior University towards new heights of success. Her dedication to revolutionizing Pakistan’s academic landscape, coupled with her visionary leadership, ensures that Superior University remains at the forefront of innovation and excellence in education. Dr. Sumaira’s  extensive portfolio at the national level includes roles such as Member of the Higher Education Commission Pakistan, contributing to the formulation of higher education policy and quality assurance mechanisms, and serving on the Accreditation Committee for the Government of Punjab. She is also a key member of the Punjab Higher Education Commission (PHEC) Consortium on Entrepreneurship and serves as the Project Leader for initiatives like COMSTECH and Superior University’s 3U1M Program for the OIC Countries.
                        <br /><br />
                        Her leadership extends further as a member of the Academic Committee at the Higher Education Commission in Islamabad and as the Director of the Chaudhry Muhammad Akram Center of Entrepreneurship & Development (CMACED).
                    </p>
                    <div>
                        <h2 className='text-xl font-semibold text-yellow-500 uppercase'>Prof. Dr. Sumaira Rehman</h2>
                        <p className='text-[12px]'>
                            Rector | The Superior Group
                            <br />
                            Director | Chaudhry Muhammad Akram Center of Entrepreneurship & Development (CMACED)
                            <br />
                            Member | HEC (Higher Education Commission)
                            <br />
                            Vice President | PDTRC (Pakistan Drugs Testing and Research Center)

                        </p>
                    </div>
                </div>
                <div className=''>
                    <Image src={'/max.png'} alt='Chairman Superior' width={2700} height={2700} />
                </div>
            </div>
        </div>
    )
}

export default RectorsMessage