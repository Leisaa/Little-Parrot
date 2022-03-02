import Next from '../assets/next.png'
import Play from '../assets/play.png'

const ProgressBar = (props)=>{
  const total = props.total ?? "00:00"
  const current = props.current ?? "00:00"
  const percent = props.percent ?? "0%"
  return (
    <div className="w-full">
      <div className='w-full h-5 bg-gray-100 rounded-lg'>
          <div className="h-5 bg-orange-400 rounded-lg" style={{width:percent}}></div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p>{current} / {total}</p>
        <div className='flex'>
          <img src={Next} alt="" className='mr-5' />
          <img src={Play} alt="" />
        </div> 
      </div>
    </div>
  )
}

export default ProgressBar;
