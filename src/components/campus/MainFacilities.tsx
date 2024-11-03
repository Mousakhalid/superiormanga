import React from 'react'
import HeroFacilities from './HeroFacilities'
import Facilities from './Facilities'
import Admission from '@/app/intermediate/pre-medical/Admission'

const MainFacilities = () => {
    return (
        <div>
            <HeroFacilities />
            <Facilities />
            <Admission />
        </div>
    )
}

export default MainFacilities