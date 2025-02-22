import { useState } from "react"

export default function Start({setUsername}) {

  const [userName, setUserName] = useState("");

  return (
    <div className="flex justify-center flex-col gap-10 h-screen">
        <h1 className="text-white text-4xl font-bold italic">Who Wants to Be a Millionaire?</h1>
        <div className="flex justify-center items-center flex-col">
          <input type="text" onChange={(e) => setUserName(e.target.value)}
          className="bg-white text-[#020230] text-lg w-[50%] lg:w-[25%] border-2 border-b-gray-700 px-3 py-2 text-center rounded-md mb-3 focus-within:outline-0" placeholder="Enter Your Name" />
          <button
          onClick={() => {
          setUsername(userName)
          }}
          className="px-3 py-2 w-[50%] lg:w-[25%] rounded-sm font-bold text-xl bg-amber-300 cursor-pointer text-[#020230]">Start</button>
        </div>
    </div>
  )
}
