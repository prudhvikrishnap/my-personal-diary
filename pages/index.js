import {FaFacebook,FaGoogle,FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {RiKeyLine} from 'react-icons/ri'


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-100 to-sky-300'>
      <div className='italic mb-10 text-7xl font-extrabold text-transparent bg-clip-text
      bg-gradient-to-br from-red-500 to-sky-500 p-4'>
      <h1 className='bg-clip-text hover:bg-white p-4'>
            My Personal Diary
          </h1>
          </div>
    <div className=' bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl text-center'>
      <div className='w-3/5 p-5 rounded-l-2xl bg-text-bg bg-cover hover:bg-none'>
        <div className='py-10'>
        <h1 className="text-3xl font-bold text-green-500 mb-2">
          Sign In to Account
      </h1>
      <div className='border-2 w-10 border-green-500 inline-block mb-2'>

      </div>
      <div className='flex justify-center my-2' >
        <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-200'>
          <FaFacebook className=' text-sm fill-blue-600 '/>
        </a>
        <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-200'>
          <FaGoogle className='text-sm fill-red-500'/>
        </a>
        <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-200'>
          <FaLinkedin className='text-sm fill-blue-400'/>
        </a>
      </div>
      <p className='text-gray-400 my-3'>or use your email</p>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
            <AiOutlineMail className='text-gray-400 m-2 fill-green-500'/>
            <input type="text" name='email' placeholder='Email ID' className='bg-gray-100 outline-none text-sm flex-1'></input>
          </div>

        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
            <RiKeyLine className='text-gray-400 m-2 fill-green-500'/>
            <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'></input>
          </div>
        </div>
        <div className='flex justify-between w-64 mb-5'>
          <label className='flex items-center text-xs'>
            <input type="checkbox" name="remember" className='mr-1 accent-green-500'/> Remember Me </label>
            <a href='#' className='text-xs'>Forgot Password?</a>
        </div>
        <a href="/home" className='border-2 border-green-500 rounded-full px-9 py-2 inline-block font-semibold bg-gray-100
        hover:bg-green-500 hover:text-white'>
          Sign In
        </a>
        </div>
        </div>
      </div>



      <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
      <h1 className='text-3xl font-bold mb-2'>
        Hello there!   </h1>
        <div className='border-2 w-10 border-white inline-block mb-2'></div>
        <p className='mb-3'>
          To create a new account signup here!
        </p>
        <a href="/signup" className='border-2 border-white rounded-full px-9 py-2 inline-block font-semibold
        hover:bg-white hover:text-green-500'>
          Sign Up
        </a>
      </div>
    </div>
    </div>
  )
}


