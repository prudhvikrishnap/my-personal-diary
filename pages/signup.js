import {IoMailOutline} from 'react-icons/io5'
import {RiKeyLine} from 'react-icons/ri' 
import {AiOutlineUser} from 'react-icons/ai'


const Login=()=> {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-sky-500 to-green-500">
        <div className="bg-white rounded-2xl shadow-2xl flex items-center max-w-4xl text-m mb-3">
            <div className=" className=' flex flex-col left w-3/5 bg-sky-500 rounded-tl-2xl 
            rounded-bl-2xl py-36 px-12 text-white bg-text-bg">
                <h1 className=' mb-3 inline underline text-center'>
                    Please fill all the fields to create a new user.  </h1>
                    <div className='mt-2'>
                        <ul className='italic font-semibold'>
                            <li className='list-disc w-17 mb-3'>
                                Please provide valid email adddress
                                </li>
                            <li className='list-disc'>
                                You can also make use of the password generator to generate a random password
                            </li>
                        </ul>
                    </div> 
            </div>
            <div className="w-3/5 m-2 flex flex-col items-center">
            <form id='reg-user' action='/api/register' method='post'>
                    <div className="flex items-center p-2 mb-2">   
                        <AiOutlineUser className='mr-2'/>
                        <input type='text' name='name' placeholder='Name' autoComplete='false' className="flex1 accent-green-500 outline-none"/>
                    </div>
                    <div className="flex  items-center p-2 mb-2">
                        <IoMailOutline className='mr-2'/>
                        <input type='text' name='email' placeholder='Enter Valid Email' autoComplete='false' className="flex1 accent-green-500 outline-none"/>
                    </div>
                    <div className="flex items-center p-2 mb-4">
                        <RiKeyLine className='mr-2'/>
                        <input type='password' name='password' placeholder='Password' autoComplete='false' className="flex1 accent-green-500 outline-none"/>
                    </div>
                    <div className='border-2 border-green-500  px-2 py-2 inline-block font-semibold
        hover:bg-green-500 hover:text-white text-sm mb-3 rounded border-b-4 items-center justify-center'>
                        <input type='submit' value='Create Account'/>
                </div>
                </form>
                <div className='mb-3 text-center'>
                    <h4 className='flex text-xs'>Already have an account?</h4>
                <a href='/' className='text-xs border-2 border-green-500 px-2 py-1 inline-block font-semibold
        hover:bg-green-500 hover:text-white mt-2 border-b-4 rounded'>Login</a>
                </div>
            </div> 
          
        </div> 
    </div>
    )             
}

export default Login