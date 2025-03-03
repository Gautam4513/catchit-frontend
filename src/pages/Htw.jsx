import {useEffect} from 'react'
import Nav from '../components/Nav'
import Swiper1 from '../components/Swiper1'
import {Link} from 'react-router-dom'
import { io } from 'socket.io-client'


const Home = () => {
    const socket  = io('http://localhost:3000');
    const sender = () => {
        socket.emit('sender-joined');
    }

    const reciever = () => {
        socket.emit('reciever-joined');
    }
    useEffect(()=>{
        socket.on("SJ",(data)=>{
            console.log(data.data);
        });
        
        socket.on('RJ', (data) => {
            console.log(data.data);
        });

    })
    return (
        <div className='h-screen'>
            <Nav />
            <div className='p-2 mt-15'>
                <Swiper1></Swiper1>
                {/* <div className='flex gap-3 p-2 justify-center items-center mt-5'>
                    <button className='w-[200px] bg-transparent text-2xl text-white p-2 rounded-xl mb-2 border-2 border-white active:scale-90 cursor-pointer' onClick={sender}><Link to='/sender'>Share Files</Link></button>
                    <button className='w-[200px] bg-transparent text-2xl text-white p-2 rounded-xl mb-2 border-2 border-white active:scale-90 cursor-pointer' onClick={reciever}><Link to='/nearby'>Nearby Devices</Link></button>
                </div> */}
            </div>
            
        </div>
    )
}

export default Home
