import { useState,useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allownumber, setAllownumber] = useState(false)
  const [allowcharacters, setAllowcharacters] = useState(false)

  const[password,setpassword] = useState('')

  const passref= useRef(null)


  const passwordGenerator = useCallback( ()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(allownumber) str += '0123456789'
    if(allowcharacters) str += '!@#$%^&*()'
    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length+1))
    }

    setpassword(pass)
  }
    
    ,[length,allownumber,allowcharacters,setpassword]) 
    
  const copyPassword = ()=>{
    navigator.clipboard.writeText(password)
    passref.current.select();
    alert('Password copied to clipboard')
  }
  useEffect(passwordGenerator,[length,allownumber,allowcharacters,passwordGenerator])

  return (
    <>
      <div className='h-screen w-screen'>
          <div className='text-5xl text-center mt-5'>Password generator</div>

          <div className=' border-4 mt-6 p-3 w-2xl    m-auto bg-gray-600 rounded-3xl'>
              <div className=' flex rounded-lg mb-4'>
                <input type="text"
                  value={password}
                  placeholder='password'
                  className=' w-full p-3 rounded-lg outline-none bg-white '
                  readOnly
                  ref={passref} 
                />
                <button className='bg-blue-300 rounded-lg p-4 ml-5 hover:cursor-pointer'
                onClick={copyPassword}>copy</button>
              </div>

              <div className='flex text-lg gap-x-2 mt-5'>
                <div className='flex items-center gap-x-1' >
                  <input type="range" 
                  value={length}
                  min={8}
                  max={30}
                  className='cursor-pointer'  
                  onChange={(e)=>{setLength(e.target.value);}}
                  
                  />
                  <label className='text-white'>{length}</label>
                </div>

                <div className='flex items-center gap-x-2'>
                  <input type="checkbox" 
                    defaultChecked={allownumber}
                    id='numberInput'
                    onChange={()=>{
                      setAllownumber(!allownumber);
                    }}
                  
                  /> 
                  <label htmlFor='numberInput' className='text-white'>Include numbers</label>

                </div>
                <div className='flex items-center gap-x-2'>
                  <input type="checkbox" 
                    defaultChecked={allowcharacters} 
                    id='characterInput'
                    onChange={()=>{
                      setAllowcharacters(!allowcharacters); 
                    }}
                  
                  /> 
                  <label htmlFor='characterInput' className='text-white'>Include character</label>

                </div>

              </div>

          </div>

      </div>
    </>
  )
}

export default App
