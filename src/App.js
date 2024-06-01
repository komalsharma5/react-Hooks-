// import React, { useRef } from 'react'



// export default function App() {
//   const imgClick = useRef()
//   return (
//     <div>
//       <input type='file' multiple ref={imgClick} hidden></input>
//         <img alt='' src='https://cdn-icons-png.freepik.com/512/7112/7112229.png' width={100} onClick={() =>imgClick.current.click()}></img> 
//     </div>
//   )
// }

import React from 'react'
import A from './Components/A'
import { createContext , useState } from 'react'


const Name = createContext()
export default function App() {

  const [name ,setName] = useState('demo')

  return (
    <div>
      <Name.Provider value={name}>
      <A></A>
      </Name.Provider>     
    </div>
  )
}

export {Name}
