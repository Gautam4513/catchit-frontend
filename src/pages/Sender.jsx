import {useState,useEffect} from 'react'
import Nav from '../components/Nav'
// import { useState } from 'react'
import Selector from '../components/Selector'

const Sender = () => {

    return (
        <div className='h-screen w-dvw'>
            <div>
                <Nav></Nav>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center p-8' id="con">
                        <div id="top">
                            <h1 className='text-5xl font-[roboto] text-white font-semibold mb-2 w-max'>Share Files</h1>
                            <h2></h2>
                        </div>
                        <div>
                            <Selector />
                        </div>
                        <div id="bottom">
                            <h1 className='text-4xl font-[roboto] text-white font-bold mb-2 w-auto mt-5'>Share files directly from your device to anywhere</h1>
                            <h2 id="det1">
                                <ul className='text-2xl font-[roboto] text-white font-light'>
                                    <div className='flex justify-items-start items-center gap-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                        </svg>
                                        <li>Fast Transfer</li>
                                    </div>
                                    <div className='flex justify-items-start items-center gap-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                        </svg>

                                        <li>Without saving it online</li>
                                    </div>
                                    <div className='flex justify-items-start items-center gap-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                        </svg>
                                        <li>Peer-to-peer</li>
                                    </div>
                                </ul>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sender
