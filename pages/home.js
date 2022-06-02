import {FaHome} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import{RiLogoutBoxLine} from 'react-icons/ri'
import {RiBookletLine} from 'react-icons/ri'
import Home from './index'

const Homepage=()=>{
    return(
        <div className='flex justify-center'>
        <div className='w-2/6'>
        <div className=" fixed lative top-0 h-screen w-20 m-0 flex flex-col bg-text-bg bg-cover
        hover:w-24 hover:bg-white ">
            <a href='#' className='mx-auto'>
            <FaHome className='sidebar-icon hover:text-white' />
            </a> 
            <div className='border '></div>
            <BiUser className='sidebar-icon hover:text-white'/>
            <RiBookletLine className='sidebar-icon hover:text-white'/>
            <a href='/' className='mx-auto'>
            <RiLogoutBoxLine className='sidebar-icon hover:text-white'/>
            </a>
        </div>
        </div>
        <div className='w-4/6 text-center rounded-sm shadow-xl border-4'>
            <h1>Notes</h1>
        </div>
        </div>
    )
}

export default Homepage