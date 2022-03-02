import {Outlet} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

import {changePage} from '../slices/mainSlice'
import StoryPage from '../pages/Story'
import VoicePage from '../pages/Voice'

import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile.png'
import VoiceFill from '../assets/Voice-fill.png'
import Voice from '../assets/voice.png'
import StoryFill from '../assets/Story-fill.png'
import Story from '../assets/Story.png'
import Search from '../assets/search.png'
import Mic from '../assets/mic.png'



const Main = ()=>{
  const page = useSelector(state=>state.main.page)
  const dispatch = useDispatch()
  return(
    <div className='w-screen h-screen bg-gray-100'>
      {/* header */}
      <div className="w-[90vw] flex justify-between items-center h-20 py-2 px-5 mx-auto">
        <div className='basis-1/3 h-full flex items-center'>
          <img className='h-2/3' src={Logo} alt="" />
        </div> 
        <div className='basis-1/3 h-full flex items-center justify-center'>
          <div className='w-4/5 h-10 border-solid border-2 border-orange-200 rounded-2xl flex justify-around items-center '>
            <div className='flex items-center'>
              <img className='h-5 w-5' src={Search} alt="" />
              <input type="text" placeholder='Search story and voice' className='bg-transparent border-none focus:outline-none ml-5 text-sm text-slate-400'/>
            </div>
            <img src={Mic} alt="" className='h-5 w-5' />
          </div>
        </div> 
        <div className='basis-1/3 h-full flex justify-around items-center'>
          <button className='h-6' onClick={()=>dispatch(changePage('story'))}>
            <img src={page==="story" ? StoryFill : Story} alt="" className='h-full min-w-[6rem]' />
          </button>
          <button className='h-6' onClick={()=>dispatch(changePage('voice'))}>
            <img src={page==='voice' ? VoiceFill : Voice} alt="" className='h-full min-w-[6rem]' />
          </button>
          <div className='flex  '>
            <img className='h-10' src={Profile} alt="" />
            <button className='ml-3 text-gray-400'>Hi, Molica</button>
          </div>
        </div> 
      </div>
      {/*Content*/}
      { page === 'story' ? < StoryPage /> : < VoicePage /> }
    </div>
  )
}

export default Main;
