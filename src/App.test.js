import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import PersonList from "./PersonList"

describe('App', ()=>{
  let addWrapper;
  beforeAll(()=>{
    addWrapper = shallow(<App/>)
  })
  it('',()=>{
     addWrapper.find(PersonList);
  })

  it('satet',()=>{
    const stateNotNull  = addWrapper.state();
    expect(stateNotNull).not.toBeNull();
  })
})