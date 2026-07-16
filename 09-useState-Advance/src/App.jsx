import { useState } from 'react'



const App = () => {
  const [num, setNum] = useState({user: 'Divya', age:20})

  const btnClicked = () =>{
    const newNum = {...num}
    
newNum.user = 'Sakshi'
    setNum(newNum)
  }
  return (
    

      <div> 
       <h1>{num.user}, {num.age}</h1>
       <button onClick={btnClicked}>click</button>
      </div>

      
  )
}

export default App
