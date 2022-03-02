import {useState,useEffect} from 'react'


import rocketImg from '../assets/login-rocket.png'
import taskImg from '../assets/login-task.png'
import earthImg from '../assets/login-earth.png'


const bg = "radial-gradient(101.61% 101.61% at 2.55% -1.61%, #FFA927 0%, rgba(255, 169, 39, 0.7) 73.6%, rgba(255, 169, 39, 0.8) 100%)"

const Auth = ()=>{
  const [isLogin,setIsLogin] = useState(true)
  const [clip, setClip] = useState("polygon(0 0, 100% 0, 85% 100%, 0 100%)")
  useEffect(()=>{
    const handler = ()=>{
      if (window.innerWidth < 768){
        setClip("polygon(0 0, 100% 0, 100% 100%, 0 100%)") 
      }else{
        setClip("polygon(0 0, 100% 0, 85% 100%, 0 100%)") 
      }
    }
    window.addEventListener('resize',handler)
    window.addEventListener('load',handler)
    return ()=> [
      window.removeEventListener('resize',handler),
      window.removeEventListener('load',handler)
    ]
  }) 
  return (
    <div className="flex flex-row h-screen flex-wrap"> 
      {/* Left side */}
      <div className="order-last md:order-first basis-full md:basis-2/5 h-full flex flex-col items-start justify-around" style={{background:bg,clipPath:clip}}>
        <div className='flex h-1/3 items-center'>
          <img className='h-3/5' src={rocketImg} alt="" />
          <p className='text-white font-semibold text-3xl w-2/5'>Upload family members voice.</p>
        </div>
        <div className='flex h-1/3 items-center'>
          <img className='h-3/5' src={taskImg} alt="" />
          <p className='text-white font-semibold text-3xl w-2/5'>Choose a story from the library.</p>
        </div>
        <div className='flex h-1/3 items-center'>
          <img className='h-3/5' src={earthImg} alt="" />
          <p className='text-white font-semibold text-3xl w-2/5'> Enjoy the fancy moment! </p>
        </div>
      </div>
      {/*Right side*/}
      <div className="order-first md:order-last basis-full md:basis-3/5 bg-white h-full ">
        <div className='flex flex-col items-start w-4/5 h-4/5 mx-auto mt-32' >
          <h1 className='text-5xl text-black font-bold font-mono' style={{fontFamily:"Futura"}}>
            Welcome to Little Parrot
          </h1>
          <div className='mt-20 w-full'>
            <h3 className='text-gray-300 text-3xl' style={{fontFamily:"Futura Bk"}}>
                {isLogin ? "LOG IN" : "SIGN UP"}
            </h3>
            <div className='mt-5 w-full'>
              <p>Email</p>
              <input type="" className='mt-2 border-solid border-2 border-gray-400 rounded-md px-3 py-2 w-full md:w-3/5' placeholder='Your Email' />
            </div>
            <div className='mt-5'>
              <p>Password</p>
              <input type="password" className='mt-2 border-solid border-2 border-gray-400 rounded-md px-3 py-2 w-full md:w-3/5' placeholder='Your Password'/>
            </div>
            <div className='flex justify-start items-center mt-5'>
              <input type="checkbox" />
              <span className='ml-3'> <span className='text-gray-400'>I agree with</span> TERMs&CONDITIONs</span>
            </div>
            <div>
              <button className="bg-orange-400 w-full md:w-40 text-white rounded-sm px-4 py-2 mt-10 transition ease-in-out hover:scale-105">
                {isLogin ? "LOG IN" : "SIGN UP"}
              </button>
              <span>
                <span className='text-gray-400 ml-3'>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </span>
                <button className='ml-3' onClick={()=>setIsLogin(prev=>!prev)}>
                  {!isLogin ? "LOG IN" : "SIGN UP"}!
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Auth;
