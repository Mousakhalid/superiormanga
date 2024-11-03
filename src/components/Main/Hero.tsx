'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'


const Hero = () => {
    return (
        <div className='bg-hero'>
            <div className='flex items-center justify-between pt-8 md:px-32 px-8 md:flex-row flex-col bg-color'>
                <motion.div variants={fadeIn("left", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='text-gray-50 space-y-3 max-sm:pt-32'>
                    <h1 className='text-4xl font-bold'>Facilitating Success</h1>
                    <p className='font-semibold'>Transforming success with a meaningful and rewarding life</p>
                    <br />
                    <Link href={'/apply-now'}>
                        <Button className='py-7 px-10 transition-all duration-200 bg-yellow-500 text-black hover:bg-yellow-700 font-bold'>APPLY NOW!</Button>
                    </Link>
                </motion.div>
                <motion.div variants={fadeIn("right", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                    <Image src={'/student.webp'} alt='Student Superior' width={300} height={300} />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero