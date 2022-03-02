import MainDot from '../assets/main-dot.png'
import MainBook from '../assets/main-book.png'
import MainPerson from '../assets/main-person.png'
import MainDArrow from '../assets/main-darrow.png'
import MainTempBook from '../assets/main-temp_book.png'
import MainTriangleDown from '../assets/main-triangle-down.png'
import MainTempVoicePerson from '../assets/main-voice-person-temp.png'

import ProgressBar from '../components/ProgressBar'

const Story = ()=>{
  return (
    <div className="w-[90vw] mx-auto">
      {/*row 1*/}
      <div className="flex h-52 w-full ">
        {/*instruction*/}
        <div className="basis-3/5 bg-white flex justify-between rounded-lg shadow-gray-200 shadow-lg"> 
          <div className='flex basis-2/3'>
            <div className="flex flex-col justify-between items-center">
              <img className='h-20 w-36' src={MainDot} alt="" />
              <img className='h-14 w-14 mb-10' src={MainBook} alt="" />
            </div>
            <div className="mt-5 ml-10">
              <h1 className="text-2xl mb-5">INSTRUCTION FOR USE</h1>
              <p className="mt-2 text-md">1. UPLOAD FAMILY MEMBER’S VOICE.</p>
              <p className="mt-2 text-md">2. CHOOSE A STORY.</p>
              <p className="mt-2 text-md">3. ENJOY THE FANCY MOMENT!</p>
            </div>
          </div>
          <div className='overflow-hidden basis-1/3 relative'>
            <img className='scale-90 absolute left-5 -top-3' src={MainPerson} alt="" />
          </div>
        </div>
        {/*continue listening*/}
        <div className="basis-2/5 bg-white ml-5 shadow-gray-200 shadow-lg rounded-lg h-full w-full">
          <div className="flex justify-between items-center mt-3 mx-3 h-[5%]">
            <p className='text-gray-300'>Continue Listening</p>
            <img className='h-3 w-3' src={MainDArrow} alt="" />
          </div>
          <div className="flex h-[90%] mt-3 px-5 w-full">
            <img className='h-[80%] w-30' src={MainTempBook} alt="" />
            <div className='w-full'>
              <div className='flex justify-between items-center w-full'>
                <div className='basis-4/5 ml-5'>
                  <p className='text-black text-xl'>Three Pigs</p>
                  <p className='text-gray-300'>The first little pig was lazy</p>
                </div>
                <div className='flex justify-between items-center'>
                  <img className='h-12' src={MainTempVoicePerson} alt="" />
                  <img className='h-3' src={MainTriangleDown} alt="" />
                </div>
              </div>
              <div className='ml-5 mt-5'>
                <ProgressBar/>
              </div>
              <p className='text-gray-300 ml-5 mt-3'>Next: Wooden House</p>
            </div>
          </div>
        </div>
      </div>
      {/*row 2*/}
      <div>

      </div>
      {/*row 3*/}
      <div></div>
    </div>
  )
} 

export default Story;
