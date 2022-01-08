import React, { useEffect, useState } from 'react'
import PrimaryButton from '../Button/Button';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(typeof props.startValue === 'number') {
      setCount(props.startValue)
    }
  }, [])

  useEffect(() => {
    if(typeof props.onChangeCount === 'function') {
      props.onChangeCount(count)
    }
  }, [count])

  const onChange = (val) => {
    if(count+val <= 0) {
      return;
    }

    setCount(ct => ct + val)
  }

  return (
    <div className="flex">
      <span className='text-lg p-2 px-4'>{count}</span>
      <PrimaryButton onClick={() => onChange(1)} className='bg-zinc-200 hover:bg-slate-400 text-blue-900 px-4 rounded-none'>+</PrimaryButton>
      <PrimaryButton onClick={() => onChange(-1)} className='bg-zinc-200 hover:bg-slate-400 text-blue-900 px-4 rounded-none'>-</PrimaryButton>
    </div>
  )
}

export default Counter;
