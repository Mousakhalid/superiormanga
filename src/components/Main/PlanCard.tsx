import React from 'react'

const PlanCard = ({ imgSrc, title, description }: any) => {
    return (
        <div>
            <div className='card'>
                <div className='iconWrapper'>
                    <img src={imgSrc} alt={title} className='icon' />
                </div>
                <div className='label'>
                    <p>{title}</p>
                </div>
                <div className='overlay'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PlanCard