import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import {plus,minus,plusByAmount} from "./countSlice"
function App() {
    const [num,setNum] = useState(null);
    const count = useSelector((state)=>state.count.counter);
    const dispatch = useDispatch();

    const onInputChange = (e)=>{
      setNum(Number(e.target.value));
    }
  return (
    <>
       <input onChange={onInputChange} vlaue={num}/>
      <p>App {count}</p>
      <button onClick={()=>{dispatch(plus())}}>+1</button>
      <button onClick={()=>{dispatch(minus())}}>-1</button>
      <button onClick={()=>{dispatch(plusByAmount(num))}}>Amount</button>
    </>
  )
}

export default App
