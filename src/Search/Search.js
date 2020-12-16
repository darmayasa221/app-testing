import React ,{useState}from 'react'
export default function Search(){
  const [event,setEvent] = useState([])
  const onEvent = e => setEvent(e.target.value);

  return(
    <div>
    <input type="text" title="inputNow" onChange={onEvent}></input>
        <p>{event}</p>
    </div>
  )
}