import React from 'react'

const Code = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center gap-30 shrink-1 mt-10 '>
          <div className='bg-[#13204c] p-5 rounded-3xl'>
            <div className='bg-blue-950 p-5 w-fit border-2 border-dashed border-[#fdc500] rounded-2xl'>
              <h1 className='text-3xl text-white font-[roboto] '>Enter Joining Code</h1>
              <h2 className='text-lg text-white font-[roboto] mb-10'>The code provided by The Sender</h2>
              <form action="/" onSubmit={(e) => {
                e.preventDefault();
                let jcode = document.getElementById('join-code');
                let code = jcode.value;
                console.log(code);
              }}>
                <input type="number" placeholder='Enter 4-digit code' className='h-[50px] border-2 border-white text-xl text-white font-[roboto] p-2 rounded-xl bg-[#000814] mb-5' id='join-code' />
                <button className='text-2xl text-white font-[roboto] bg-[#fdc500] p-2 cursor-pointer rounded-xl block ml-20'>Confirm</button>
              </form>
            </div>
          </div>
          <div id='bottom'>
            <h1 className='text-5xl text-white font-[roboto] font-semibold'>Recieve Files</h1>
            <h2 className='text-xl text-white font-[roboto] ' id='det1'>By using the Joining code provided by the user you can join the room and recieve files from The Sender from any device to any device.</h2>
          </div>
        </div>
    </div>
  )
}

export default Code
