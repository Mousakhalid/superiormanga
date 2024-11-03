import React from 'react'
import Hero from './Hero'
import AdmissionRules from './AdmissionRules'
import Admission from '@/app/intermediate/pre-medical/Admission'

const MainAdmission = () => {
    return (
        <div>
            <Hero />
            <AdmissionRules />
            <Admission />
        </div>
    )
}

export default MainAdmission