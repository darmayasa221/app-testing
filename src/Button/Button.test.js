import {render,  fireEvent} from "@testing-library/react"
import Button from "./Button"

it('render Button',() => {
  const {queryByTitle}  = render(<Button />);
  queryByTitle('button_sub')
})

describe('when button click',() => {
  it('onClik button',() =>{
    const {queryByTitle}  = render(<Button />);
    const btn  = queryByTitle('button_sub')
    expect(btn.innerHTML).toBe('default value')
    fireEvent.click(btn)
    expect(btn.innerHTML).toBe('click me!')
  })
})