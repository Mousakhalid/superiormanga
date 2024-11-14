import React from 'react'
import Hero from './Hero'
import Superiority from './Superiority'
import Message from './Message'
import Programs from './Programs'
import EQ from './EQ'
import Promise from './Promise'
import Building from './Building'
import CampusLife from './CampusLife'
import ProgramsDAE from '../DAE/Programs'

const MainPage = () => {
    return (
        <div>
            <Hero />
            <Superiority />
            <Message />
            <EQ />
            <Programs />
            <Promise />
            <ProgramsDAE />
            <Building />
            <CampusLife />
        </div>
    )
}

export default MainPage