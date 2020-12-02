import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import PersonList from "./PersonList"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter : new Adapter()})

describe('App', ()=>{
  let addWrapper;
  beforeAll(()=>{
    addWrapper = shallow(<App/>)
  })
  it('test',()=>{
     addWrapper.find(PersonList);
  })

  it('satet',()=>{
    const stateNotNull  = addWrapper.state();
    expect(stateNotNull).not.toBeNull();
  })

  it('has a test propperty on state', () =>{
    const appState = addWrapper.state();
    expect(appState.test).toBeDefined()

  } )

  it('passes test property of state to personList as prop', () =>{
    const list = addWrapper.find(PersonList);
    expect(list.props().test).toEqual(addWrapper.state().test, console.log(test))
  })
})