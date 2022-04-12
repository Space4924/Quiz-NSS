import React from 'react'
import Subject from './Subject'
import Advertisement from './Advertisement'
const Main = () => {
    return (
        <>
        <h1 className='heading'><b>Welcome to the Quiz</b></h1>
        <div className='mainnet'>
            
            <Subject/>
            <Advertisement/>
        </div>
        </>
    )
}
export default Main
