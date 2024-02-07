import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
  
  // ------------1.State-----------------
  const [length, setLength] = useState(4);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed,  setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  // ------------2.password-Generation-----------------
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~`!@#$%^&*_+-=]';?/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <div className='h-200 bg-[#1c273b] p-5 rounded-md shadow-lg shadow-slate-500'>
      <h1 className='font-bold text-3xl text-white '>Password Generator</h1>
      <br />
      <div className=''>
         {/* password o/p & copy */}
        <input type="text" value={password}  placeholder='Password' readOnly ref={passwordRef} className='h-10  border  text-center border-[#00000003] text-xl rounded-md px-3 mb-3 py-2 mr-2 mt-4 text-white bg-[#00000024]' />
        <button onClick={copyPasswordToClipboard} className='bg-[#4579f1] hover:bg-[#ef4444] text-blue-50 px-4 py-2 rounded-md '>COPY</button>
      </div>

      <div>
        <button onClick={passwordGenerator}
        className='p-2 bg-yellow-500 mt-5 rounded-md '
        >
          Generate Password
        </button>
      </div>


      <div className='flex justify-center space-x-6 p-5 text-white mt-5 '>

        {/* range */}
        <div>
         <input type="range" min={4} max={100} value={length}
         className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}/>
         <label> Length : {length} </label>
        </div>

       {/* Number */}
       <div>
        <input type="checkbox" defaultChecked={numberAllowed} id="numInput" 
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }} />
        <label  htmlFor="numInput">Number</label>
       </div>

       {/* Char */}
       <div>
        <input type="checkbox" defaultChecked={charAllowed}  id="characterInput" 
        onChange={() => {
          setCharAllowed((prev) => !prev)
        }} />
        <label  htmlFor="characterInput">Character</label>
       </div>
      </div>

      
    </div>
  )
}

export default PasswordGenerator
