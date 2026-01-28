import React, { useState } from 'react'
import fetchAxios from '../axios/fetchAxios'

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetchAxios.post('/email', formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div>
          <p className="font-bold">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='e.g Sepide Moqadasi'
            className='py-1 w-96 px-2 border rounded-md'
          />
        </div>
        <div>
          <p className="font-bold">Email Address</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='e.g sepide-moqadasi@gmail.com'
            className='py-1 w-96 px-2 border rounded-md'
          />
        </div>
        <div>
          <p className="font-bold">Message</p>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Write your message'
            className='py-1 w-96 px-2 border rounded-md'
          />
        </div>
        <button className="bg-green-600 text-white rounded-md py-1" type="submit">
          Submit Your Data
        </button>
      </form>
    </div>
  )
}

export default Form
