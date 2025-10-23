import { useRef, useState } from 'react'
import { CustomButton } from './components/CustomButton'
import { handleStartWatch, handleStopWatch, handleResettWatch } from './utils/stopwatchhandlre'
function App() {
      const ref = useRef(0);
      const [timePassed, setTimePassed] = useState<number>(0);
  return (
    <div className='flex flex-col min-h-screen items-center justify-evenly bg-gray-600'>
      <h1 className='font-mono text-3xl tracking-widest text-gray-200'>Stop Watch</h1>
      <p> <span className='mr-3 text-2xl font-bold font-serif mask-radial-from-neutral-950'>Time Passed :</span> <span className='text-white text-2xl tracking-widest'>{timePassed.toFixed(3)}</span>  </p>
      <div className='flex gap-4.5'>
      <CustomButton onclick={() => handleStartWatch(ref,setTimePassed)} variant='start'>Start</CustomButton>
      <CustomButton onclick={() => handleStopWatch(ref)} variant='stop'>Stop</CustomButton>
      <CustomButton onclick={() => handleResettWatch(setTimePassed)} variant='reset'>Reset</CustomButton>
      </div>
    </div>
  )
}

export default App
