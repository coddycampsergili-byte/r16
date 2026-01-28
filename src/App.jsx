import React from 'react'
import Help from './components/Help'
import Form from './components/Form'
import { MdContentCopy } from "react-icons/md";

function App() {
  return (
    <div className='flex flex-col gap-2 p-5'>
      <div className="w-full bg-green-600 h-40 rounded-2xl relative flex flex-col text-white justify-center items-center">
        <h2 className="text-2xl font-bold">You Have Different Questions?</h2>
        <p className="">Our team will answer at your questios get in touch if you need more help</p>
        <a href="#" className="flex gap-1 items-center bg-black/20 px-2 py-1 rounded-xl">info@Malinum.com <MdContentCopy /></a>
      </div>
      <div className="flex justify-between gap-2 px-20">
        <Help />
        <Form />
      </div>
    </div>
  )
}

export default App