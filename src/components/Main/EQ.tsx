import React from 'react'
import PlanCard from './PlanCard'

const EQ = () => {
    return (
        <div className='my-16'>
            <div>
                <div className='text-center space-y-3 py-16'>
                    <h1 className='text-4xl font-bold text-[#0C7E81]'>Facilitating Dreams, <span className='text-yellow-500'>Igniting Brilliance</span>
                    </h1>
                    <p className='font-semibold text-gray-600'>Adding Value through Contributions</p>
                </div>
                {/* eq box */}
                <div className='grid md:grid-cols-3 grid-cols-1 md:px-32 px-3 gap-12'>
                    <div>
                        <PlanCard
                            imgSrc="/img-6.webp"
                            title="Plan on IQ"
                            description="Superior College Lalazar Campus has an exclusive study Plan based on polishing students’ IQ (Intelligence Quotient)"
                        />
                    </div>
                    <div>
                        <PlanCard
                            imgSrc="/img-6.webp"
                            title="Plan on EQ"
                            description="Plan EQ is an elaborative system to organize and execute events of recreational yet personality development nature."
                        /></div>
                    <div>
                        <PlanCard
                            imgSrc="/img-6.webp"
                            title="Academic Excellence"
                            description="The Superior Group is embodiment of continuous improvement, expansion and unmatchable excellence, since its inception."
                        />
                    </div>
                    <div>
                        <PlanCard
                            imgSrc="/img-6.webp"
                            title="Student LMS"
                            description="Superior LMS is a web-based application to provide educational resources and a centralized source of education."
                        />
                    </div>
                    <div>
                        <PlanCard
                            imgSrc="/img-6.webp"
                            title="Modern Infrastructure"
                            description="Superior College Lalazar Campus have got exclusive purpose-built campus to ensure provision of a study conducive environment."
                        />
                    </div>
                    <div>
                        <PlanCard
                            imgSrc="/img-6.webp"
                            title="In-house labs"
                            description="At Superior College Lalazar Campus, we have purpose built modern labs for practicing the knowledge being learnt."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EQ