import React from 'react'
import PasswordGenerator from '../PasswordGenerator/PasswordGenerator'

const Home = () => {

  
  return (
    <>
    <div className='relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2  ' >
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 ">
    
      <div className="relative z-10 max-w-screen-xl px-4  pb-10 pt-10 sm:py-20 mx-auto sm:px-6 lg:px-8">
    
        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
          <h2 className='text-rose-500 font-bold'>Password Generator Tool</h2>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Create Strong and Secure Passwords with Ease
          </h2>
          <p className=" sm:block text-xl">
            Welcome to <span className='font-semibold italic text-purple-800'>Easy</span><span className='italic font-semibold'>Pass</span>, your go-to tool for generating strong and secure passwords. Our user-friendly password generator is designed to make your online life safer and more convenient.
          </p>
          <button  className="inline-flex text-white items-center px-6 py-3 font-medium bg-yellow-500 rounded-lg hover:opacity-70" >
           Generate password <span className='ml-2'><img src="/react.svg" alt="" /></span>
          </button>  
        </div>
    
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
         <img className="w-96" src="/image.svg"/>  
        </div>
      </div>
  </aside>
 </div>
 <PasswordGenerator/>
 </>
  )
}

export default Home
