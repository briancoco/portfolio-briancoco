'use client'

import React, { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      fetch('/api/send-email', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, message})
      })

      setName('');
      setEmail('');
      setMessage('');
      toast.info("Message sent")

    } catch (error) {
      toast.error("Message failed to send")
    }


  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="font-bold text-4xl mb-4">Contact</h1>
      <p className="text-zinc-200 text-md mb-8 text-center max-w-md">
        Feel free to reach out for collaboration, questions, or just to say hi!
      </p>
      <form 
        className="flex flex-col gap-4 w-full max-w-sm"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
        >
          Send Message
        </button>
      </form>
      <ToastContainer 
        toastClassName={context => "default bg-gray-800 w-50 flex rounded py-2 px-4"}
        position='bottom-right'
      />
    </div>
  )
}

export default Contact