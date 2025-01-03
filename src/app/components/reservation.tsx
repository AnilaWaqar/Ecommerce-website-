import React from 'react'

export default function Reservation() {
  return (
<section className='bg-gradient-to-r from-black to-slate-700 py-10'>
    <div className='container mx-auto text-center'>
<h2 className='text-2xl font-bold mb-6 text-white'>Make A Reservation</h2>
   <form className='max-w-md mx-auto'>

    <div className='mb-4 text-white'>
    <input type="text"
    placeholder='Enter Your Name'
    className='w-full placeholder:text-black placeholder:font-bold  p-3 border border-grey-300 rounded-md' required />
</div>

<div className='mb-4'>
    <input type="email" 
    placeholder='Your Email' 
    className='w-full  placeholder:text-black placeholder:font-bold p-3 border border-gray-300 rounded-md'/>
</div>

<div className='mb-4'>
    <input type="date" 
    placeholder='Your Email' 
    className='w-full placeholder:text-black placeholder:font-bold  p-3 border border-gray-300 rounded-md'/>
</div>

<div className='mb-4'>
    <input type="time" 
    placeholder='Your Email' 
    className='w-full placeholder:text-black placeholder:font-bold  p-3 border border-gray-300 rounded-md'/>
</div>

<div className='mb-4'>
    <button className='bg-red-600 text-white  py-2 px-6 rounded-md font-extraboldbold hover:bg-red-700'>Reserved Table  </button>
</div>

   </form>
   
   
    </div>

</section>
  )
}   