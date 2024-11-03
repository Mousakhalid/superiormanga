'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

const Message = () => {
    return (
        <div className='bg-[#50392F]'>
            <div className='flex items-center justify-between md:flex-row flex-col md:px-32 px-8 py-16 gap-10'>
                <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='text-gray-50 space-y-3'>
                    <h1 className='text-xl font-bold text-yellow-500'>MESSAGE FROM CHAIRMAN</h1>
                    <p className='border-l-4 border-yellow-500'>&nbsp;&nbsp;He knows how to turn Human Resource into Human Capital</p>
                    <p className='text-[12px]'>Glancing through the Academic possibilities in Pakistan, I believe Educational Excellence is the best strategy to strengthen our national identity. 21st century revolves around innovating uniqueness, and Superior is creating hope by encouraging new ideas to bring smiles through facilitation.
                        <br /><br />
                        Focusing on IQ and EQ gives a chance to explore logics and discover yourself from within. We empower our students to work hard, be optimistic and live life to the maximum. We have a congenial environment to make them learn the subtle art of decision making, opportunity seeking and become job creators instead of job seekers. Our entrepreneurial ecosystem encourages and trains them to create their own destiny.</p>
                    <div>
                        <h2 className='text-xl font-semibold text-yellow-500'>PROF. DR. CHAUDHRY ABDUL REHMAN</h2>
                        <p className='text-[12px]'>
                            Chairman | The Superior Group
                            <br />
                            Chairman | APSUP (Association of Private Sector Universities of Pakistan)
                            <br />
                            President | PAMI (Pakistan Association of Medical and Dental Institutions)
                            <br />
                            Director | PBA (Pakistan Broadcast Association)

                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("down", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className=''>
                    <Image src={'/chairman.webp'} alt='Chairman Superior' width={1900} height={1900} />
                </motion.div>
            </div>
        </div>
    )
}

export default Message