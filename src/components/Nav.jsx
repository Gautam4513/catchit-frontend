import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="w-screen h-[100px] p-5 bg-transparent flex justify-between items-center" id='nav'>
      <div id="logo" className="text-4xl text-white font-[roboto] font-semibold">Catchit</div>
      <div className='text-xl font-[roboto] text-white cursor-pointer mr-10 flex justify-between w-[20%]' id='big-nav'>
        <Link className='hover:font-semibold' to='/sender'>Home</Link>
        <Link className='hover:font-semibold' to='/how-to-use'>How to Use</Link>
        <Link className='hover:font-semibold' to='/about'>About Us</Link>
      </div>
      <div id='small-nav'>
        <div id='before'>
          <input type="checkbox" className='bg-black hidden' id='check' onChange={() => {
            let before = document.getElementById('before');
            let after = document.getElementById('after');
            before.style.display = 'none';
            after.style.display = 'block';
          }} />
          <label htmlFor="check">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 mb-5 ml-15 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </label>

        </div>
        <div className='hidden' id='after'>
          <ul className='text-lg font-[roboto] text-white bg-blue-950 p-2 rounded-2xl mt-20 z-1 drop-shadow-xl' id='op-list'>
            <input type="checkbox" className='hidden' id='check2' onChange={() => {
              let before = document.getElementById('before');
              let after = document.getElementById('after');
              before.style.display = 'block';
              after.style.display = 'none';
            }} />
            <label htmlFor="check2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 mb-5 ml-15">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </label>
            <li><Link to='/sender'>Home</Link></li>
            <li> <Link to='/how-to-use'>How to Use</Link></li>
            <li><Link to='/about'>About Us</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Nav
