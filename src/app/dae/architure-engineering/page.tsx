import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import Eligibility from './Eligibility'
import Admission from './Admission'
import { Faqs } from './Faqs'


const page = () => {
    return (
        <div>
            <Hero />
            <Introduction />
            <Eligibility />
            <Admission />
            <Faqs />
        </div>
    )
}

export default page