import React from 'react'

function Nav() {
  return (
    <div className=' backdrop-blur-0 bg-[#28574E] indent-30 z-10 flex fixed justify-evenly  items-center h-16 w-screen '>
      <div id="logo" className=' justify-center items-center '>
        <img src="./Group.png" className=' cursor-pointer h-8 w-full bje' alt="" />
      </div>
        <div id="menu" className=' flex gap-5 text-white'>
            <a href="" className='hover:text-base'>Client Trial</a>
            <a href="">Appoinment</a>
            <a href="">Membarship Goal</a>
            <a href="">Medical travel</a>
            <a href=""> Sign up</a>
            <a href="">sign in</a>
        </div>
        <div id="booknow"> 
            <button className=' rounded-full cursor-pointer px-3 hover:bg-zinc-300 bg-white text-[#28574E]  p-2'>Book Now</button>
        </div>

    </div>
  )
}

export default Nav
