import React, {useState} from 'react';
const Button =  () => {
  const [value,setValue] = useState('default value')
  const dumyFunction =()=>{
    setValue('click me!')
  }
  return(
    <button onClick={dumyFunction} title="button_sub">
      {value}
    </button>
  )
}
export default Button;
