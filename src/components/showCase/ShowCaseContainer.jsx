import React from 'react'
import ShowCaseImage from './ShowCaseImage'
import ShowCaseText from './ShowCaseText'
import '../../styles/components/showCase.scss'

const ShowCaseContainer = () => {
    return (
        <div className='showcaseContainer '>
            <ShowCaseImage />
            <ShowCaseText />
        </div>
    )
}

export default ShowCaseContainer