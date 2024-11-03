import Image from 'next/image'
import React from 'react'

const Facilities = () => {
    return (
        <div className='bg-gray-100'>
            <div className='md:px-32 px-8 md:py-32 py-6 space-y-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='space-y-4 pt-20'>
                        <h2 className='text-4xl font-bold text-yellow-500'>Computer Lab</h2>
                        <p className='text-gray-700 text-[12px]'>At Superior College Manga Campus, we have purpose-built modern labs designed for practical learning. We emphasize helping students understand how theoretical concepts work in practice. Our computer labs are equipped with the latest versions of computers, fostering interest in IT and Computer Science. Experienced instructors guide and train students in the effective use and implications of technology.</p>
                    </div>
                    <div>
                        <Image src={'/labs.png'} alt='Computer lab superior lab' width={700} height={700} />
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-8'>
                    <div>
                        <Image src={'/science.png'} alt='Computer lab superior lab' width={700} height={700} />
                    </div>
                    <div className='space-y-4 pt-20'>
                        <h2 className='text-4xl font-bold text-[#0C7E80]'>Science Labs</h2>
                        <p className='text-gray-700 text-[12px]'>At Superior College Manga Campus, we have modern Science Labs where students can apply theories from Biology, Chemistry, and Physics. Our expert lab attendants and teachers guide them through experiments, helping them understand the practical aspects of scientific concepts. We believe these labs serve as the foundation for future doctors, engineers, and researchers, which is why we provide the latest equipment, training, and hygienic, hazard-free lab environments for our students.</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='space-y-4 pt-20'>
                        <h2 className='text-4xl font-bold text-yellow-500'>Transport Facility</h2>
                        <p className='text-gray-700 text-[12px]'>At Superior College Manga Campus, we provide modern, comfortable, and well-managed transportation facilities for our students. We recognize that public transport often falls short in comfort and timeliness, which can disrupt students' schedules. To address this, we operate a fleet of coasters and buses tailored to the city’s needs, ensuring reliable pick-up and drop-off services for our students.</p>
                    </div>
                    <div>
                        <Image src={'/transport.png'} alt='Computer lab superior lab' width={700} height={700} />
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-8'>
                    <div>
                        <Image src={'/cafe.png'} alt='Computer lab superior lab' width={700} height={700} />
                    </div>
                    <div className='space-y-4 pt-20'>
                        <h2 className='text-4xl font-bold text-[#0C7E80]'>Superior Manga Cafe</h2>
                        <p className='text-gray-700 text-[12px]'>
                            At Superior College Manga Campus, our café serves as a refreshing and entertaining space for students to take breaks from their rigorous academic routines. The café features:
                            <ul className='list-disc py-3'>
                                <li>Spacious and clean seating areas</li>
                                <li>Well-lit ambiance with a variety of food options</li>
                                <li>LCDs for entertainment and news updates</li>
                            </ul>
                            It's the perfect spot for students to relax and recharge.
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='space-y-4 pt-20'>
                        <h2 className='text-4xl font-bold text-yellow-500'>Library</h2>
                        <p className='text-gray-700 text-[12px]'>At Superior College Manga Campus, our library is an integral part of the educational experience. It provides a congenial and peaceful environment, equipped with hundreds of books covering various subjects such as Commerce, Business, Management, IT and Computer Science, Medicine, Engineering, Arts, and Literature. Additionally, students have access to reference materials, local and international journals, newspapers, and magazines, supporting their academic pursuits.</p>
                    </div>
                    <div>
                        <Image src={'/library.png'} alt='Computer lab superior lab' width={700} height={700} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities