
import Nav from '../components/Nav'
import { io } from 'socket.io-client'
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios';

const Reciever = () => {
  let { code } = useParams();
  console.log(code)
  const socket = io('https://catchit-keval.onrender.com');
  const [files, setFiles] = useState([])



  useEffect(() => {
    //  console.log(files)
    socket.on('file-sent', (data) => {
      console.log("recive");
      const fileData = data.files;
      setFiles((prevFiles) => {
        console.log("junu", prevFiles);
        console.log("navu", fileData)
        return [...prevFiles, fileData]
      });
    });

    const getFiles = async () => {
      const response = await axios.get(`https://catchit-keval.onrender.com/receive/${code}`)
      console.log(response)
      if (response.status === 200) {
        // const fileData= response.data.files
  
          setFiles(response.data.files)
        
        // setFiles(response.data.files);
        console.log(files)
      }
    }
    getFiles();
  }, [])
  useEffect(()=>{
    console.log(files)
  },[files])



  return (
    <div className='h-screen'>
      <Nav></Nav>
      <div className='p-5'>
        <div id='top' className='w-fit'>
          <h1 className='text-5xl text-white font-[roboto] font-semibold'>Recieve Files</h1>
          <h2 className='text-xl text-white font-[roboto] ' id='det1'>By using the Joining code provided by the user you can join the room and recieve files from The Sender from any device to any device.</h2>
        </div>
        <div id='recieved' className='flex justify-center items-center mr-5 gap-30'>
          <div className='bg-[#13204c] w-fit p-4 rounded-2xl mr-5'>
            <div className='bg-blue-950 font-[roboto] w-max p-5 border-2 border-white border-dashed rounded-2xl h-auto'>
              <h1 className='text-3xl text-white font-semibold w-max mb-3'>Recieved Files</h1>
              <div className='overflow-y-auto h-[200px]'>
                <ul className='text-white'>
                  {files && files.map((file, key) => (
                    <li key={key} className='flex w-[100%] justify-between'>
                      <div className='flex justify-between items-center w-[100%] mb-2'>
                        <span>{file.originalname}</span>
                        <a href={"https://catchit-keval.onrender.com/download/"+file.filename+"/"+file.originalname} download={file.filename} target='_blank' rel='"noopener noreferrer"'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-max">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div id='bottom' className='w-fit mr-5'>
          <h1 className='text-5xl text-white font-[roboto] font-semibold'>Recieve Files</h1>
          <h2 className='text-xl text-white font-[roboto] ' id='det1'>By using the unique link provided by the user you can join the room and recieve files from The Sender from any device to any device.</h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Reciever
