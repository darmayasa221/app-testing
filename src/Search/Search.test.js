import { render, fireEvent} from '@testing-library/react'
import Search from './Search'

it('rendering Search',() =>{
  render(<Search/>)
})
describe('when inputting',() =>{
  it('input',()=>{
    const { queryByTitle }  = render(<Search/>)
    const input = queryByTitle('inputNow')
    fireEvent.change(input,{target:{value:'hay'}})
    expect(input.value).toBe('hay')
  })
})