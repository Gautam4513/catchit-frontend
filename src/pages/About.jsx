import React from 'react'
import Nav from '../components/Nav'

const About = () => {
    return (
        <div className='h-screen'>
            <Nav></Nav>
            <div className='flex justify-center items-center text-center mt-[100px]'>
                <div>
                    <h1 className='font-[roboto] text-7xl text-white font-semibold mb-5'>Catchit</h1>
                    <h2 className='font-[roboto] text-xl text-white mb-3 '>This Project was developed by Us in order to make File sharing easy. between various devices with any OS, Catchit enables you to share any kind of files between devices.</h2>
                    <h1 className='font-[roboto] text-3xl text-white font-semibold'>Thank you for visiting!</h1>
                </div>
            </div>
        </div>
    )
}

export default About
