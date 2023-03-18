import { useMetadata, useMetamask } from '@thirdweb-dev/react'
import React from 'react'

function Login() {
  const connectWithMetamask = useMetamask()

  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col
    items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img 
            className='rounded-full h-56 wo-56 mb-10'
            src="https://i.imgur.com/4h7mAu7.png" alt="" />
            <h1 className='text-6xl text-white font-bold'>THE MADALIOU BOUYO</h1>
            <h2 className='text-white'>Get Started by login in with your metamask</h2>
            <button 
            onClick={connectWithMetamask}
            className='bg-white px-8 py-5 mt-10 
            shadow-large rounded-lg font-bold'>
                Login with metamask
            </button>     
        </div>

    </div>
  )
}

export default Login
