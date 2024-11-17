'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

const Superiority = () => {
    return (
        <div>
            <div className='flex items-center justify-between md:px-32 px-8 md:flex-row flex-col py-24 gap-10'>
                <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='space-y-3'>
                    <h1 className='font-bold text-yellow-500'>SUCCESSFULLY SUPERIOR</h1>
                    <p className='text-[#0C7E81] text-4xl font-bold'>Superior College Lalazar Campus</p>
                    <p className='text-gray-600 text-[13px]'>
                        We are committed to enhancing the potential of our students, faculty,
                        and staff by bringing positive change in their personal and professional
                        lives. We motivate them for self-enlightenment through Quality Education,
                        Personality Development, True Professionalism, and Career Planning to add
                        value to our nation and humanity.
                    </p>
                    <br />
                    <Link href={'/about'}><Button className='py-7 px-10 transition-all duration-200 bg-yellow-500 text-black hover:bg-yellow-700 font-bold'>Read More</Button></Link>
                </motion.div>
                <motion.div variants={fadeIn("down", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                    <Image src={'/superior.webp'} alt='Superior' width={1400} height={1400} />
                </motion.div>
            </div>
        </div>
    )
}

export default Superiority